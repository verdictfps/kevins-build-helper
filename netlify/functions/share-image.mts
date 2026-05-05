import { createHash } from "node:crypto";
import { getStore } from "@netlify/blobs";

const STORE_NAME = "share-screenshots";
const MAX_IMAGE_BYTES = 6 * 1024 * 1024;
const IMAGE_VERSION_PATTERN = /^[a-z0-9_-]{1,64}$/i;

function getBuildPayload(url: URL) {
    const buildPayload = url.searchParams.get("build");

    if (buildPayload === null || buildPayload.trim() === "") {
        return null;
    }

    return buildPayload.startsWith("build") ? buildPayload : null;
}

function getImageVersion(url: URL) {
    const imageVersion = url.searchParams.get("image");

    if (imageVersion === null) {
        return null;
    }

    return IMAGE_VERSION_PATTERN.test(imageVersion) ? imageVersion : null;
}

function getImageKey(buildPayload: string, imageVersion: string | null) {
    const hash = createHash("sha256").update(buildPayload).digest("hex");

    if (imageVersion === null) {
        return `screenshots/${hash}.png`;
    }

    return `screenshots/${hash}/${imageVersion}.png`;
}

export default async (req: Request) => {
    const url = new URL(req.url);
    const buildPayload = getBuildPayload(url);

    if (buildPayload === null) {
        return new Response("Missing build payload.", { status: 400 });
    }

    const imageVersion = getImageVersion(url);
    const store = getStore({
        name: STORE_NAME,
        consistency: "strong",
    });
    const imageKey = getImageKey(buildPayload, imageVersion);

    if (req.method === "POST") {
        const contentType = req.headers.get("content-type") ?? "";

        if (!contentType.toLowerCase().startsWith("image/png")) {
            return new Response("Expected a PNG image.", { status: 415 });
        }

        const imageBuffer = await req.arrayBuffer();

        if (imageBuffer.byteLength === 0 || imageBuffer.byteLength > MAX_IMAGE_BYTES) {
            return new Response("Image size is not supported.", { status: 413 });
        }

        await store.set(imageKey, imageBuffer);

        return Response.json({ ok: true });
    }

    const image = await store.get(imageKey, { type: "arrayBuffer" });

    if (image === null) {
        return Response.redirect(new URL("/Images/metaimage.png", url.origin).toString(), 302);
    }

    return new Response(image, {
        headers: {
            "content-type": "image/png",
            "cache-control": imageVersion === null ? "public, max-age=60" : "public, max-age=31536000, immutable",
        },
    });
};

export const config = {
    path: "/share-image",
    method: ["GET", "POST"],
};
