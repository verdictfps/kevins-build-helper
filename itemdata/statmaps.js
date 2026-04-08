const fs = require("fs");

const INPUT_FILE = "./OilsScrolls.json";
const OUTPUT_FILE = "./output.json";

const data = JSON.parse(fs.readFileSync(INPUT_FILE, "utf8"));

/**
 * Maps human-readable stat names → actual field prefixes
 */
const statMap = {
    "Reload Speed": ["ReloadSpeed"],
    "Recoil": ["RecoilAdd", "RecoilMult"],
    "Damage - Flat": ["DamageAdd"],
    "Damage - Mult": ["DamageMult"],
    "Spread": ["SpreadAdd", "SpreadMult"],
    "Movement Speed": ["MovementSpeedMult"],
    "Durability": ["DurabilityMult"],
    "Base Crit Chance": ["BaseCritChance", "ADSCritChance"],
    "Bullet Speed": ["BulletSpeed"],
    "Jump Power": ["JumpPower"],
    "Bullet Bounces": ["Bounces"],
    "Bullet Drop": ["BulletDrop"],
    "Penetration": ["Penetrations"],
    "Move Accuracy": ["MovingAccuracy"],
    "Loot Drop Chance": ["LootDropChance"],
    "Projectiles": ["ProjectileMult"],
    "RPM": ["RPM", "RPMBaseShift"],
    "Drag": ["Drag"]
};

/**
 * Try to resolve stat value from fields
 */
function getStatValue(obj, statName) {
    if (!statName || statName === "None") return 0;

    const fields = statMap[statName];
    if (!fields) return null;

    for (const field of fields) {
        if (obj[field] !== undefined && obj[field] !== 0) {

            return Math.abs(obj[field]);
        }
    }

    return null;
}

/**
 * Fallback: parse from StatDescription
 */
function parseFromDescription(desc, statName) {
    if (!desc || !statName || statName === "None") return 0;

    const regex = new RegExp(
        `${statName}:[^\\d-+]*([+-]?\\d+)%`,
        "i"
    );

    const match = desc.match(regex);
    if (!match) return 0;
    
    const sub = parseInt(match[1]) / 100;
    return Math.abs(sub);
}

/**
 * Resolve final score
 */
function resolveScore(obj, typeField) {
    let val = getStatValue(obj, typeField);

    if (val === null) {
        val = parseFromDescription(obj.StatDescription, typeField);
    }
console.log(val)
    return val || 0;
}

// MAIN LOOP
for (const key in data.Oil) {
    const oil = data.Oil[key];

    oil.ScorePos = resolveScore(oil, oil.TypePositive1);
    oil.ScoreNeg = resolveScore(oil, oil.TypeNegative1);
}

// WRITE OUTPUT
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2));

console.log("Done.");