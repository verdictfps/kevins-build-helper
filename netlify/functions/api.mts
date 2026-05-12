import type { Config } from "@netlify/functions";
import { getDatabase } from "@netlify/database";
import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const functionDirectory = path.dirname(fileURLToPath(import.meta.url));
const itemDataDirectoryCandidates = [
    path.resolve(process.cwd(), "itemdata"),
    path.resolve(functionDirectory, "../../itemdata"),
    path.resolve(functionDirectory, "itemdata"),
];
let itemDataDirectoryPromise: Promise<string> | null = null;
let itemDataFilesPromise: Promise<Set<string>> | null = null;
const steamOpenIdProvider = "https://steamcommunity.com/openid";
const steamClaimPrefix = "https://steamcommunity.com/openid/id/";
const stateCookieName = "kbh_steam_state";
const sessionCookieName = "kbh_steam_session";
const cookieMaxAgeSeconds = 60 * 60 * 24 * 30;

type RouteContext = {
    params?: {
        splat?: string;
    };
};

type SteamSessionUser = {
    steamId: string;
    displayName: string | null;
    avatarUrl: string | null;
    profileUrl: string | null;
};

function jsonResponse(body: unknown, init?: ResponseInit) {
    return Response.json(body, {
        ...init,
        headers: {
            "Cache-Control": "no-store",
            ...init?.headers,
        },
    });
}

function getCookie(req: Request, name: string) {
    const cookieHeader = req.headers.get("cookie") ?? "";
    const cookies = cookieHeader.split(";").map((cookie) => cookie.trim());
    const match = cookies.find((cookie) => cookie.startsWith(`${name}=`));

    return match ? decodeURIComponent(match.slice(name.length + 1)) : null;
}

function serializeCookie(name: string, value: string, options: { maxAge?: number } = {}) {
    const maxAge = options.maxAge ?? cookieMaxAgeSeconds;
    const attributes = [
        `${name}=${encodeURIComponent(value)}`,
        "Path=/",
        "HttpOnly",
        "Secure",
        "SameSite=Lax",
        `Max-Age=${maxAge}`,
    ];

    return attributes.join("; ");
}

function clearCookie(name: string) {
    return serializeCookie(name, "", { maxAge: 0 });
}

function getSessionSecret() {
    return process.env.STEAM_SESSION_SECRET || process.env.NETLIFY_DATABASE_URL || null;
}

function signValue(value: string) {
    const secret = getSessionSecret();

    if (!secret) {
        throw new Error("Steam session secret is not configured.");
    }

    return createHmac("sha256", secret).update(value).digest("base64url");
}

function encodeSession(user: SteamSessionUser) {
    const payload = Buffer.from(JSON.stringify(user)).toString("base64url");
    return `${payload}.${signValue(payload)}`;
}

function decodeSession(value: string | null): SteamSessionUser | null {
    if (!value) {
        return null;
    }

    const [payload, signature] = value.split(".");

    if (!payload || !signature) {
        return null;
    }

    const expected = signValue(payload);
    const expectedBuffer = Buffer.from(expected);
    const signatureBuffer = Buffer.from(signature);

    if (expectedBuffer.length !== signatureBuffer.length || !timingSafeEqual(expectedBuffer, signatureBuffer)) {
        return null;
    }

    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));

    if (typeof parsed?.steamId !== "string" || !/^\d{15,20}$/.test(parsed.steamId)) {
        return null;
    }

    return {
        steamId: parsed.steamId,
        displayName: optionalString(parsed.displayName),
        avatarUrl: optionalString(parsed.avatarUrl),
        profileUrl: optionalString(parsed.profileUrl),
    };
}

async function getItemDataDirectory() {
    itemDataDirectoryPromise ??= (async () => {
        for (const directory of itemDataDirectoryCandidates) {
            try {
                await readdir(directory);
                return directory;
            }
            catch {
                // Try the next bundled-file location.
            }
        }

        throw new Error("Item data directory was not found.");
    })();

    return itemDataDirectoryPromise;
}

async function getItemDataFiles() {
    itemDataFilesPromise ??= (async () => {
        const itemDataDirectory = await getItemDataDirectory();
        const files = await readdir(itemDataDirectory);

        return new Set(files.filter((fileName) => fileName.endsWith(".json")));
    })();

    return itemDataFilesPromise;
}

async function isItemDataFile(value: unknown) {
    if (typeof value !== "string" || value !== path.basename(value)) {
        return false;
    }

    return (await getItemDataFiles()).has(value);
}

function optionalString(value: unknown) {
    return typeof value === "string" && value.trim() !== "" ? value : null;
}

function getRequestOrigin(req: Request) {
    const url = new URL(req.url);
    const forwardedProto = req.headers.get("x-forwarded-proto");
    const forwardedHost = req.headers.get("x-forwarded-host") ?? req.headers.get("host");

    if (forwardedHost) {
        return `${forwardedProto || url.protocol.replace(":", "")}://${forwardedHost}`;
    }

    return url.origin;
}

function redirectResponse(location: string, headers?: HeadersInit) {
    return new Response(null, {
        status: 302,
        headers: {
            Location: location,
            ...headers,
        },
    });
}

async function seedItemDataFile(fileName: string) {
    const db = getDatabase();
    const itemDataDirectory = await getItemDataDirectory();
    const filePath = path.join(itemDataDirectory, fileName);
    const [raw, fileStats] = await Promise.all([
        readFile(filePath, "utf8"),
        stat(filePath),
    ]);
    const data = JSON.parse(raw);

    await db.sql`
        INSERT INTO item_data (file_name, data, source_updated_at, seeded_at)
        VALUES (${fileName}, ${JSON.stringify(data)}::jsonb, ${fileStats.mtime.toISOString()}, now())
        ON CONFLICT (file_name) DO UPDATE SET
            data = EXCLUDED.data,
            source_updated_at = EXCLUDED.source_updated_at,
            seeded_at = now()
        WHERE item_data.source_updated_at IS DISTINCT FROM EXCLUDED.source_updated_at
    `;
}

async function getItemData(fileName: string) {
    const db = getDatabase();
    await seedItemDataFile(fileName);
    const rows = await db.sql`
        SELECT data
        FROM item_data
        WHERE file_name = ${fileName}
        LIMIT 1
    `;

    return rows[0]?.data;
}

function getApiPath(req: Request, context: RouteContext) {
    const splat = context.params?.splat;

    if (typeof splat === "string") {
        return `/${splat.replace(/^\/+/, "")}`;
    }

    const pathname = new URL(req.url).pathname;
    return pathname.replace(/^\/api(?=\/|$)/, "") || "/";
}

async function handleItemDataIndex() {
    const itemDataFiles = await getItemDataFiles();
    const entries = await Promise.all(
        [...itemDataFiles].map(async (fileName) => [fileName, await getItemData(fileName)] as const)
    );

    return jsonResponse(Object.fromEntries(entries), {
        headers: {
            "Cache-Control": "public, max-age=300, stale-while-revalidate=86400",
        },
    });
}

async function handleItemDataFile(fileName: string) {
    if (!(await isItemDataFile(fileName))) {
        return jsonResponse({ error: "Item data file not found" }, { status: 404 });
    }

    const data = await getItemData(fileName);

    return jsonResponse(data, {
        headers: {
            "Cache-Control": "public, max-age=300, stale-while-revalidate=86400",
        },
    });
}

async function handleSteamUserSave(req: Request) {
    const { steamId, displayName, avatarUrl, profileUrl } = await req.json().catch(() => ({}));

    if (typeof steamId !== "string" || !/^\d{15,20}$/.test(steamId)) {
        return jsonResponse({ error: "Valid Steam ID is required" }, { status: 400 });
    }

    const db = getDatabase();
    const savedDisplayName = optionalString(displayName);
    const savedAvatarUrl = optionalString(avatarUrl);
    const savedProfileUrl = optionalString(profileUrl);
    const rows = await db.sql`
        INSERT INTO steam_users (steam_id, display_name, avatar_url, profile_url, last_login_at, updated_at)
        VALUES (${steamId}, ${savedDisplayName}, ${savedAvatarUrl}, ${savedProfileUrl}, now(), now())
        ON CONFLICT (steam_id) DO UPDATE SET
            display_name = EXCLUDED.display_name,
            avatar_url = EXCLUDED.avatar_url,
            profile_url = EXCLUDED.profile_url,
            last_login_at = now(),
            updated_at = now()
        RETURNING steam_id, display_name, avatar_url, profile_url, last_login_at, created_at, updated_at
    `;

    return jsonResponse(rows[0], { status: 201 });
}

async function saveSteamUser(user: SteamSessionUser) {
    const db = getDatabase();
    const rows = await db.sql`
        INSERT INTO steam_users (steam_id, display_name, avatar_url, profile_url, last_login_at, updated_at)
        VALUES (${user.steamId}, ${user.displayName}, ${user.avatarUrl}, ${user.profileUrl}, now(), now())
        ON CONFLICT (steam_id) DO UPDATE SET
            display_name = EXCLUDED.display_name,
            avatar_url = EXCLUDED.avatar_url,
            profile_url = EXCLUDED.profile_url,
            last_login_at = now(),
            updated_at = now()
        RETURNING steam_id, display_name, avatar_url, profile_url
    `;

    const saved = rows[0];

    return {
        steamId: saved.steam_id,
        displayName: saved.display_name,
        avatarUrl: saved.avatar_url,
        profileUrl: saved.profile_url,
    };
}

async function getSteamProfile(steamId: string): Promise<SteamSessionUser> {
    const profileUrl = `https://steamcommunity.com/profiles/${steamId}`;
    const apiKey = process.env.STEAM_API_KEY;

    if (!apiKey) {
        return {
            steamId,
            displayName: null,
            avatarUrl: null,
            profileUrl,
        };
    }

    const playerUrl = new URL("https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/");
    playerUrl.searchParams.set("key", apiKey);
    playerUrl.searchParams.set("steamids", steamId);

    const response = await fetch(playerUrl);

    if (!response.ok) {
        return {
            steamId,
            displayName: null,
            avatarUrl: null,
            profileUrl,
        };
    }

    const body = await response.json();
    const player = body?.response?.players?.[0];

    return {
        steamId,
        displayName: optionalString(player?.personaname),
        avatarUrl: optionalString(player?.avatarfull) || optionalString(player?.avatarmedium) || optionalString(player?.avatar),
        profileUrl: optionalString(player?.profileurl) || profileUrl,
    };
}

function getReturnTo(req: Request) {
    const url = new URL(req.url);
    const value = url.searchParams.get("returnTo");

    if (!value || value.startsWith("//") || /^https?:\/\//i.test(value)) {
        return "/";
    }

    return value.startsWith("/") ? value : "/";
}

async function handleSteamLogin(req: Request) {
    const state = randomBytes(24).toString("base64url");
    const origin = getRequestOrigin(req);
    const callbackUrl = new URL("/api/auth/steam/callback", origin);
    callbackUrl.searchParams.set("returnTo", getReturnTo(req));
    callbackUrl.searchParams.set("state", state);

    const steamUrl = new URL(steamOpenIdProvider);
    steamUrl.searchParams.set("openid.ns", "http://specs.openid.net/auth/2.0");
    steamUrl.searchParams.set("openid.mode", "checkid_setup");
    steamUrl.searchParams.set("openid.return_to", callbackUrl.toString());
    steamUrl.searchParams.set("openid.realm", origin);
    steamUrl.searchParams.set("openid.identity", "http://specs.openid.net/auth/2.0/identifier_select");
    steamUrl.searchParams.set("openid.claimed_id", "http://specs.openid.net/auth/2.0/identifier_select");

    return redirectResponse(steamUrl.toString(), {
        "Set-Cookie": serializeCookie(stateCookieName, state, { maxAge: 600 }),
    });
}

async function verifySteamOpenId(url: URL) {
    const claimedId = url.searchParams.get("openid.claimed_id");
    const mode = url.searchParams.get("openid.mode");

    if (mode !== "id_res" || !claimedId?.startsWith(steamClaimPrefix)) {
        return null;
    }

    const body = new URLSearchParams();
    url.searchParams.forEach((value, key) => {
        if (key.startsWith("openid.")) {
            body.set(key, value);
        }
    });
    body.set("openid.mode", "check_authentication");

    const response = await fetch(steamOpenIdProvider, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
    });
    const result = await response.text();

    if (!response.ok || !result.includes("is_valid:true")) {
        return null;
    }

    const steamId = claimedId.slice(steamClaimPrefix.length);
    return /^\d{15,20}$/.test(steamId) ? steamId : null;
}

async function handleSteamCallback(req: Request) {
    const url = new URL(req.url);
    const state = url.searchParams.get("state");
    const storedState = getCookie(req, stateCookieName);
    const returnTo = getReturnTo(req);
    const failureUrl = new URL(returnTo, getRequestOrigin(req));
    failureUrl.searchParams.set("steamSignIn", "failed");

    if (!state || !storedState || state !== storedState) {
        return redirectResponse(failureUrl.toString(), {
            "Set-Cookie": clearCookie(stateCookieName),
        });
    }

    const steamId = await verifySteamOpenId(url);

    if (!steamId) {
        return redirectResponse(failureUrl.toString(), {
            "Set-Cookie": clearCookie(stateCookieName),
        });
    }

    const profile = await getSteamProfile(steamId);
    const savedUser = await saveSteamUser(profile);
    const successUrl = new URL(returnTo, getRequestOrigin(req));
    successUrl.searchParams.set("steamSignIn", "success");

    const headers = new Headers({
        Location: successUrl.toString(),
    });
    headers.append("Set-Cookie", clearCookie(stateCookieName));
    headers.append("Set-Cookie", serializeCookie(sessionCookieName, encodeSession(savedUser)));

    return new Response(null, {
        status: 302,
        headers,
    });
}

async function handleSteamMe(req: Request) {
    try {
        return jsonResponse({ user: decodeSession(getCookie(req, sessionCookieName)) });
    }
    catch {
        return jsonResponse(
            { user: null },
            {
                headers: {
                    "Set-Cookie": clearCookie(sessionCookieName),
                },
            }
        );
    }
}

async function handleSteamLogout() {
    return jsonResponse(
        { ok: true },
        {
            headers: {
                "Set-Cookie": clearCookie(sessionCookieName),
            },
        }
    );
}

export default async (req: Request, context: RouteContext) => {
    try {
        const apiPath = getApiPath(req, context);

        if (req.method === "GET" && apiPath === "/hello") {
            return new Response("Hello World!", {
                headers: {
                    "Content-Type": "text/plain; charset=utf-8",
                },
            });
        }

        if (req.method === "GET" && apiPath === "/itemdata") {
            return await handleItemDataIndex();
        }

        if (req.method === "GET" && apiPath.startsWith("/itemdata/")) {
            const fileName = decodeURIComponent(apiPath.slice("/itemdata/".length));
            return await handleItemDataFile(fileName);
        }

        if (req.method === "POST" && apiPath === "/steam/users") {
            return await handleSteamUserSave(req);
        }

        if (req.method === "GET" && apiPath === "/auth/steam/login") {
            return await handleSteamLogin(req);
        }

        if (req.method === "GET" && apiPath === "/auth/steam/callback") {
            return await handleSteamCallback(req);
        }

        if (req.method === "GET" && apiPath === "/auth/steam/me") {
            return await handleSteamMe(req);
        }

        if (req.method === "POST" && apiPath === "/auth/steam/logout") {
            return await handleSteamLogout();
        }

        return jsonResponse({ error: "Not found" }, { status: 404 });
    }
    catch (error) {
        const errorName = error instanceof Error ? error.name : "UnknownError";
        console.error(`API request failed: ${errorName}`);
        return jsonResponse({ error: "Internal server error" }, { status: 500 });
    }
};

export const config: Config = {
    path: "/api/*",
    method: ["GET", "POST"],
};
