import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { eq } from "drizzle-orm";
import { db } from "../../db/index.js";
import { steamUsers } from "../../db/schema.js";

type Context = {
  cookies: {
    get(name: string): string | undefined;
  };
};

type Config = {
  path: string[];
};

const SESSION_COOKIE = "kbh_steam_session";
const STATE_COOKIE = "kbh_steam_state";
const SESSION_MAX_AGE = 60 * 60 * 24 * 30;
const STEAM_OPENID_ENDPOINT = "https://steamcommunity.com/openid/login";
const STEAM_ID_RE = /^\d{17}$/;

type SteamProfile = {
  steamid: string;
  personaname?: string;
  avatarfull?: string;
  profileurl?: string;
};

function jsonResponse(body: unknown, init?: ResponseInit) {
  return Response.json(body, {
    ...init,
    headers: {
      "cache-control": "no-store",
      ...init?.headers,
    },
  });
}

function getSecret() {
  return process.env.STEAM_AUTH_SECRET ?? process.env.NETLIFY_AUTH_SECRET ?? process.env.SECRET_KEY;
}

function base64Url(input: string | Buffer) {
  return Buffer.from(input).toString("base64url");
}

function sign(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("base64url");
}

function makeSignedValue(value: string, secret: string) {
  return `${base64Url(value)}.${sign(value, secret)}`;
}

function readSignedValue(cookieValue: string | undefined, secret: string) {
  if (cookieValue === undefined) {
    return null;
  }

  const [encodedValue, signature] = cookieValue.split(".");
  if (encodedValue === undefined || signature === undefined) {
    return null;
  }

  let value: string;
  try {
    value = Buffer.from(encodedValue, "base64url").toString("utf8");
  }
  catch {
    return null;
  }

  const expected = sign(value, secret);
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);

  if (signatureBuffer.length !== expectedBuffer.length || !timingSafeEqual(signatureBuffer, expectedBuffer)) {
    return null;
  }

  return value;
}

function cookie(name: string, value: string, maxAge: number) {
  const secure = process.env.NETLIFY_DEV === "true" ? "" : "; Secure";
  return `${name}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${secure}`;
}

function clearCookie(name: string) {
  return `${name}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}

function redirect(location: string, headers?: HeadersInit) {
  return new Response(null, {
    status: 302,
    headers: {
      location,
      "cache-control": "no-store",
      ...headers,
    },
  });
}

function redirectWithCookies(location: string, cookies: string[]) {
  const headers = new Headers({
    location,
    "cache-control": "no-store",
  });

  cookies.forEach((cookieValue) => {
    headers.append("set-cookie", cookieValue);
  });

  return new Response(null, { status: 302, headers });
}

function appRedirectUrl(req: Request) {
  const url = new URL(req.url);
  const redirectTo = url.searchParams.get("redirect");

  if (redirectTo !== null && redirectTo.startsWith("/") && !redirectTo.startsWith("//")) {
    return redirectTo;
  }

  return "/";
}

function callbackUrl(req: Request) {
  return new URL("/api/auth/steam/callback", req.url).toString();
}

async function startSteamSignIn(req: Request) {
  const secret = getSecret();
  if (secret === undefined) {
    return jsonResponse({ error: "Steam sign-in is not configured." }, { status: 503 });
  }

  const returnTo = callbackUrl(req);
  const appRedirect = appRedirectUrl(req);
  const state = `${randomBytes(18).toString("base64url")}|${appRedirect}`;
  const steamUrl = new URL(STEAM_OPENID_ENDPOINT);

  steamUrl.searchParams.set("openid.ns", "http://specs.openid.net/auth/2.0");
  steamUrl.searchParams.set("openid.mode", "checkid_setup");
  steamUrl.searchParams.set("openid.return_to", returnTo);
  steamUrl.searchParams.set("openid.realm", new URL("/", req.url).origin);
  steamUrl.searchParams.set("openid.identity", "http://specs.openid.net/auth/2.0/identifier_select");
  steamUrl.searchParams.set("openid.claimed_id", "http://specs.openid.net/auth/2.0/identifier_select");

  return redirect(steamUrl.toString(), {
    "set-cookie": cookie(STATE_COOKIE, makeSignedValue(state, secret), 600),
  });
}

async function verifySteamOpenId(url: URL) {
  const verifyParams = new URLSearchParams(url.searchParams);
  verifyParams.set("openid.mode", "check_authentication");

  const response = await fetch(STEAM_OPENID_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: verifyParams,
  });

  if (!response.ok) {
    return null;
  }

  const result = await response.text();
  if (!result.includes("is_valid:true")) {
    return null;
  }

  const claimedId = url.searchParams.get("openid.claimed_id") ?? "";
  const steamId = claimedId.match(/\/id\/(\d{17})$/)?.[1];

  return steamId !== undefined && STEAM_ID_RE.test(steamId) ? steamId : null;
}

async function getSteamProfile(steamId: string): Promise<SteamProfile | null> {
  const apiKey = process.env.STEAM_WEB_API_KEY ?? process.env.STEAM_API_KEY;
  if (apiKey === undefined) {
    return null;
  }

  const profileUrl = new URL("https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/");
  profileUrl.searchParams.set("key", apiKey);
  profileUrl.searchParams.set("steamids", steamId);

  const response = await fetch(profileUrl);
  if (!response.ok) {
    return null;
  }

  const data = await response.json() as { response?: { players?: SteamProfile[] } };
  return data.response?.players?.[0] ?? null;
}

async function upsertSteamUser(steamId: string) {
  const profile = await getSteamProfile(steamId);
  const now = new Date();
  const [user] = await db
    .insert(steamUsers)
    .values({
      steamId,
      displayName: profile?.personaname ?? null,
      avatarUrl: profile?.avatarfull ?? null,
      profileUrl: profile?.profileurl ?? `https://steamcommunity.com/profiles/${steamId}`,
      updatedAt: now,
      lastSignedInAt: now,
    })
    .onConflictDoUpdate({
      target: steamUsers.steamId,
      set: {
        displayName: profile?.personaname ?? null,
        avatarUrl: profile?.avatarfull ?? null,
        profileUrl: profile?.profileurl ?? `https://steamcommunity.com/profiles/${steamId}`,
        updatedAt: now,
        lastSignedInAt: now,
      },
    })
    .returning({
      steamId: steamUsers.steamId,
      displayName: steamUsers.displayName,
      avatarUrl: steamUsers.avatarUrl,
      profileUrl: steamUsers.profileUrl,
    });

  return user;
}

async function finishSteamSignIn(req: Request, context: Context) {
  const secret = getSecret();
  if (secret === undefined) {
    return jsonResponse({ error: "Steam sign-in is not configured." }, { status: 503 });
  }

  const state = readSignedValue(context.cookies.get(STATE_COOKIE), secret);
  if (state === null) {
    return redirect("/?auth=expired", { "set-cookie": clearCookie(STATE_COOKIE) });
  }

  const [, appRedirect = "/"] = state.split("|");
  const url = new URL(req.url);
  const steamId = await verifySteamOpenId(url);

  if (steamId === null) {
    return redirect(`${appRedirect}${appRedirect.includes("?") ? "&" : "?"}auth=failed`, {
      "set-cookie": clearCookie(STATE_COOKIE),
    });
  }

  await upsertSteamUser(steamId);

  return redirectWithCookies(appRedirect, [
    cookie(SESSION_COOKIE, makeSignedValue(steamId, secret), SESSION_MAX_AGE),
    clearCookie(STATE_COOKIE),
  ]);
}

async function getSession(context: Context) {
  const secret = getSecret();
  if (secret === undefined) {
    return jsonResponse({ user: null, configured: false });
  }

  const steamId = readSignedValue(context.cookies.get(SESSION_COOKIE), secret);
  if (steamId === null || !STEAM_ID_RE.test(steamId)) {
    return jsonResponse({ user: null, configured: true });
  }

  const [user] = await db
    .select({
      steamId: steamUsers.steamId,
      displayName: steamUsers.displayName,
      avatarUrl: steamUsers.avatarUrl,
      profileUrl: steamUsers.profileUrl,
    })
    .from(steamUsers)
    .where(eq(steamUsers.steamId, steamId))
    .limit(1);

  return jsonResponse({ user: user ?? null, configured: true });
}

function logout(req: Request) {
  return redirect(appRedirectUrl(req), {
    "set-cookie": clearCookie(SESSION_COOKIE),
  });
}

export default async (req: Request, context: Context) => {
  const pathname = new URL(req.url).pathname;

  if (pathname === "/api/auth/steam") {
    return startSteamSignIn(req);
  }

  if (pathname === "/api/auth/steam/callback") {
    return finishSteamSignIn(req, context);
  }

  if (pathname === "/api/auth/session") {
    return getSession(context);
  }

  if (pathname === "/api/auth/logout") {
    return logout(req);
  }

  return jsonResponse({ error: "Not found." }, { status: 404 });
};

export const config: Config = {
  path: ["/api/auth/steam", "/api/auth/steam/callback", "/api/auth/session", "/api/auth/logout"],
};
