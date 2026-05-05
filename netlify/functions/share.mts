const SITE_NAME = "Kevin's Build Helper";
const DEFAULT_DESCRIPTION = "Wanna make a build? Kevin's got your back. Build calculator and randomizer for the video game SULFUR.";
const BUILD_FIELDS = [
    ["weapon", "Weapon"],
    ["ench1", "Enchantment 1"],
    ["ench2", "Enchantment 2"],
    ["ench3", "Enchantment 3"],
    ["ench4", "Enchantment 4"],
    ["ench5", "Enchantment 5"],
    ["barrel", "Barrel"],
    ["optic", "Optic"],
    ["laser", "Laser"],
    ["firemode", "Firemode"],
    ["chamber", "Chamber"],
    ["head", "Head"],
    ["chest", "Chest"],
    ["lfoot", "Left Foot"],
    ["rfoot", "Right Foot"],
    ["trinket1", "Trinket 1"],
    ["trinket2", "Trinket 2"],
    ["trinket3", "Trinket 3"],
    ["trinket4", "Trinket 4"],
] as const;

const KNOWN_LABELS = new Map<string, string>([
    ["none", "None"],
    ["static-not-applicable", "Not Applicable"],
    ["static-random-all-weapons", "Random Weapon"],
    ["static-random-pistols", "Random Pistol"],
    ["static-random-revolvers", "Random Revolver"],
    ["static-random-shotguns", "Random Shotgun"],
    ["static-random-smgs", "Random SMG"],
    ["static-random-assault-rifles", "Random AR"],
    ["static-random-lmgs", "Random LMG"],
    ["static-random-rifles", "Random Rifle"],
    ["static-random-sniper-rifles", "Random Sniper Rifle"],
    ["static-random-all-enchantments", "Random Enchantment"],
    ["static-random-all-oils", "Random Oil"],
    ["static-random-all-scrolls", "Random Scroll"],
    ["static-random-scroll-t1", "Random T1 Scroll"],
    ["static-random-scroll-t2", "Random T2 Scroll"],
    ["static-random-barrel", "Random Barrel"],
    ["static-random-optic", "Random Optic"],
    ["static-random-laser", "Random Laser"],
    ["static-random-chamber", "Random Chamber"],
    ["static-random-all-head-armor", "Random Head Armor"],
    ["static-random-all-chest-armor", "Random Chest Armor"],
    ["static-random-all-foot-armor", "Random Foot Armor"],
    ["static-random-all-trinkets", "Random Trinket"],
    ["hell-n-back", "Hell 'N' Back"],
    ["star-witness", "Star & Witness"],
    [".357-balthazar", ".357 Balthazar"],
    ["snut-.38", "Snut .38"],
    ["wyatt-pulsar", "Wyatt PULSAR"],
    ["socom-acr", "Socom ACR"],
    ["chat-pardeur-98", "Chat-Pardeur 98"],
    ["d4rt", "D4RT"],
    ["rokua-308", "Rokua .308"],
    ["tailor-marksman-mkii", "Tailor Marksman MKII"],
    ["chamber-chisel---.50-bmg", "Chamber Chisel - .50 BMG"],
    ["chamber-chisel---12ga", "Chamber Chisel - 12Ga"],
    ["chamber-chisel---5.56mm", "Chamber Chisel - 5.56mm"],
    ["chamber-chisel---7.62mm", "Chamber Chisel - 7.62mm"],
    ["chamber-chisel---9mm", "Chamber Chisel - 9mm"],
    ["chamber-chisel---energy", "Chamber Chisel - Energy"],
    ["a12c-muzzle-brake", "A12C Muzzle Brake"],
    ["breznik-bmd-tactical", "Breznik BMD (Tactical)"],
    ["breznik-bmd", "Breznik BMD"],
    ["sr-p3-silencer", "SR-P3 Silencer"],
]);

function safeDecode(value: string) {
    try {
        return decodeURIComponent(value);
    }
    catch {
        return value;
    }
}

function getBuildPayload(url: URL, context: any) {
    const queryBuild = url.searchParams.get("build");
    const pathBuild = context.params?.build;
    const rawBuild = queryBuild ?? pathBuild;

    if (rawBuild === undefined || rawBuild === null || rawBuild.trim() === "") {
        return null;
    }

    const withoutHashPrefix = rawBuild.startsWith("#!") ? rawBuild.slice(2) : rawBuild;
    const decoded = safeDecode(withoutHashPrefix);
    return decoded.startsWith("build") ? decoded : null;
}

function titleWord(word: string) {
    const upperWords = new Set(["acr", "ar", "bmg", "lmg", "mkii", "pg", "rpm", "smg"]);
    const lowerWord = word.toLowerCase();

    if (upperWords.has(lowerWord) || /^[a-z]*\d+[a-z0-9.]*$/i.test(word)) {
        return word.toUpperCase();
    }

    return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
}

function humanizeValue(value: string) {
    if (KNOWN_LABELS.has(value)) {
        return KNOWN_LABELS.get(value) as string;
    }

    return value
        .replaceAll("---", " - ")
        .replaceAll("-", " ")
        .split(" ")
        .filter(Boolean)
        .map(titleWord)
        .join(" ");
}

function parseBuild(buildPayload: string) {
    return buildPayload
        .replace(/^build/, "")
        .split("+")
        .map((value) => value.trim())
        .filter((value) => value !== "");
}

function describeBuild(buildPayload: string) {
    const values = parseBuild(buildPayload);
    const selections = BUILD_FIELDS.map(([, label], index) => ({
        label,
        value: values[index] ?? "none",
        name: humanizeValue(values[index] ?? "none"),
    }));
    const weapon = selections[0]?.name ?? "Custom";
    const enchantments = selections.slice(1, 6).map((selection) => selection.name).filter((name) => name !== "None");
    const attachments = selections.slice(6, 11).filter((selection) => selection.name !== "None" && selection.name !== "Not Applicable");
    const equipment = selections.slice(11).filter((selection) => selection.name !== "None");
    const descriptionParts = [
        `Weapon: ${weapon}`,
        enchantments.length > 0 ? `Enchantments: ${enchantments.join(", ")}` : "",
        attachments.length > 0 ? `Attachments: ${attachments.map((selection) => selection.name).join(", ")}` : "",
        equipment.length > 0 ? `Equipment: ${equipment.map((selection) => selection.name).join(", ")}` : "",
    ].filter(Boolean);

    return {
        title: `${weapon} build - ${SITE_NAME}`,
        description: descriptionParts.length > 0 ? descriptionParts.join(" | ") : DEFAULT_DESCRIPTION,
    };
}

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function escapeScriptString(value: string) {
    return JSON.stringify(value).replaceAll("<", "\\u003c");
}

function getImageVersion(url: URL) {
    const imageVersion = url.searchParams.get("image");

    if (imageVersion === null) {
        return null;
    }

    return /^[a-z0-9_-]{1,64}$/i.test(imageVersion) ? imageVersion : null;
}

export default async (req: Request, context: any) => {
    const url = new URL(req.url);
    const buildPayload = getBuildPayload(url, context);
    const appUrl = new URL("/", url.origin);
    const imageUrl = buildPayload === null ? new URL("/Images/metaimage.png", url.origin) : new URL("/share-image", url.origin);
    const shareUrl = new URL(url.pathname, url.origin);
    const imageVersion = getImageVersion(url);

    if (buildPayload !== null) {
        shareUrl.searchParams.set("build", buildPayload);
        imageUrl.searchParams.set("build", buildPayload);
        appUrl.hash = `!${encodeURIComponent(buildPayload)}`;
    }

    if (imageVersion !== null) {
        shareUrl.searchParams.set("image", imageVersion);
        imageUrl.searchParams.set("image", imageVersion);
    }

    const metadata = buildPayload === null ? {
        title: `${SITE_NAME} - The Complete Build Calculator & Randomizer`,
        description: DEFAULT_DESCRIPTION,
    } : describeBuild(buildPayload);

    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(metadata.title)}</title>
<meta property="og:title" content="${escapeHtml(metadata.title)}">
<meta property="og:description" content="${escapeHtml(metadata.description)}">
<meta property="og:determiner" content="the">
<meta property="og:image" content="${escapeHtml(imageUrl.toString())}">
<meta property="og:locale" content="en_GB">
<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${escapeHtml(shareUrl.toString())}">
<meta name="twitter:card" content="${buildPayload === null ? "summary" : "summary_large_image"}">
<meta name="twitter:title" content="${escapeHtml(metadata.title)}">
<meta name="twitter:description" content="${escapeHtml(metadata.description)}">
<meta name="twitter:image" content="${escapeHtml(imageUrl.toString())}">
<meta http-equiv="refresh" content="0; url=${escapeHtml(appUrl.toString())}">
</head>
<body>
<p><a href="${escapeHtml(appUrl.toString())}">Open this build in ${escapeHtml(SITE_NAME)}</a>.</p>
<script>window.location.replace(${escapeScriptString(appUrl.toString())});</script>
</body>
</html>`;

    return new Response(html, {
        headers: {
            "content-type": "text/html; charset=utf-8",
            "cache-control": "public, max-age=0, must-revalidate",
        },
    });
};

export const config = {
    path: ["/share", "/share/:build"],
    method: "GET",
};
