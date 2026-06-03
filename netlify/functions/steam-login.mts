import type { Handler } from "@netlify/functions";

export const handler = async () => {
  const baseUrl = "https://detergent-capably-omit.ngrok-free.dev";

  const returnTo = `${baseUrl}/.netlify/functions/steam-callback`;

  const params = new URLSearchParams();
  params.set("openid.ns", "http://specs.openid.net/auth/2.0");
  params.set("openid.mode", "checkid_setup");
  params.set("openid.return_to", returnTo);
  params.set("openid.realm", baseUrl);
  params.set(
    "openid.identity",
    "http://specs.openid.net/auth/2.0/identifier_select"
  );
  params.set(
    "openid.claimed_id",
    "http://specs.openid.net/auth/2.0/identifier_select"
  );

  const redirectUrl =
    `https://steamcommunity.com/openid/login?${params.toString()}`;

  return {
    statusCode: 302,
    headers: { Location: redirectUrl },
  };
};