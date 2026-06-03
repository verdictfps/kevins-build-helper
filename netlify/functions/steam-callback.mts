import type { Handler } from "@netlify/functions";

function extractSteamId(identity: string): string | null {
  const match = identity.match(/\/id\/(\d+)$/);
  return match?.[1] ?? null;
}

function redirect(location: string, cookie?: string) {
  const headers: Record<string, string> = {
    Location: location,
  };

  if (cookie) headers["Set-Cookie"] = cookie;

  return {
    statusCode: 302,
    headers,
  };
}

export const handler: Handler = async (event) => {
  const query = event.queryStringParameters || {};

  const identity = query["openid.claimed_id"];
  if (!identity) {
    return {
      statusCode: 400,
      body: "Missing OpenID identity",
    };
  }

  const steamId = extractSteamId(identity);

   if (!steamId) {
    return {
      statusCode: 302,
      headers: {
        Location: "/login?error=bad_steamid",
      },
    };
  }
  
  const verifyParams = new URLSearchParams({
    "openid.ns": query["openid.ns"]!,
    "openid.mode": "check_authentication",
    "openid.sig": query["openid.sig"]!,
    "openid.signed": query["openid.signed"]!,
    });

    // include all signed fields
    for (const key of (query["openid.signed"] || "").split(",")) {
        verifyParams.set(`openid.${key}`, query[`openid.${key}`]!);
    }

    const verifyRes = await fetch(
        "https://steamcommunity.com/openid/login",
        {
            method: "POST",
            headers: { "content-type": "application/x-www-form-urlencoded" },
            body: verifyParams.toString(),
        }
    );

    const verifyText = await verifyRes.text();

    if (!verifyText.includes("is_valid:true")) {
        return {
            statusCode: 401,
            body: "Failed Steam OpenID verification",
        };
    }

  // fetch Steam profile
  const apiKey = process.env.STEAM_API_KEY;

  let profile = null;

  if (apiKey) {
    const res = await fetch(
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=${steamId}`
    );
    console.log(res)
    const json = await res.json();
    profile = json?.response?.players?.[0] ?? null;
    }

    const cookie = `steam_session=${steamId}; Path=/; HttpOnly; SameSite=Lax`;

    return redirect("/", cookie);
  
};

