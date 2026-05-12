import type { Config } from "@netlify/functions";
import { eq } from "drizzle-orm";
import { db } from "../../db/index.js";
import { itemData } from "../../db/schema.js";

const ITEM_DATA_NAMES = new Set([
  "armorChest",
  "armorFeet",
  "armorHead",
  "Attachments",
  "Barrels",
  "Chamber",
  "ChamberNoEn",
  "Firemodes",
  "Lasers",
  "Oils",
  "OilsScrolls",
  "Optics",
  "OrigWeapons",
  "Scrolls",
  "Trinkets",
  "Weapons",
]);

function jsonResponse(body: unknown, init?: ResponseInit) {
  return Response.json(body, {
    ...init,
    headers: {
      "cache-control": "public, max-age=300",
      ...init?.headers,
    },
  });
}

export default async (req: Request) => {
  if (req.method === "HEAD") {
    return new Response(null, { status: 204 });
  }

  if (req.method !== "GET") {
    return jsonResponse({ error: "Item data is read-only." }, { status: 405, headers: { allow: "GET, HEAD" } });
  }

  const url = new URL(req.url);
  const name = url.searchParams.get("name");

  if (name === null || !ITEM_DATA_NAMES.has(name)) {
    return jsonResponse({ error: "Unknown item data set." }, { status: 404 });
  }

  const [record] = await db.select({ data: itemData.data }).from(itemData).where(eq(itemData.name, name)).limit(1);

  if (record === undefined) {
    return jsonResponse({ error: "Item data set has not been seeded." }, { status: 404 });
  }

  return jsonResponse(record.data);
};

export const config: Config = {
  path: "/api/item-data",
};
