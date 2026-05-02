const fs = require("fs");

const INPUT_FILE = "./OilsScrolls.json";
const OUTPUT_FILE = "./OilsScrolls.json";

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
    "Max Durability": ["DurabilityMult"],
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
    "Drag": ["Drag"],
    "Bullet Size": ["BulletSize"],
    "AmmoConsumeChance": ["AmmoConsumeChance"],
    "Base Crit Chance": ["BaseCritChance"],
    "Movement Speed": ["MovementSpeedMult"],
    "Disables Aiming": ["CanADS"],
    "No Money Drops": ["MoneyDrops"],
    "No Organ Drops": ["OrganDrops"],
    "Move Accuracy": ["MovingAccuracy"],
    "Bullet Bounciness": ["BulletBounciness"]
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
            if (obj[field] === "Yes" || obj[field] === "No") {
                return 0;
            }
            else {
                return Math.abs(obj[field]);
            }
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
    console.log(val);

    if (val === null) {
        val = parseFromDescription(obj.StatDescription, typeField);
        
        console.log(val);
    }
    return val || 0;
}

// MAIN LOOP
for (const key in data.OilScroll) {
    const oil = data.OilScroll[key];

    oil.ScorePos1 = resolveScore(oil, oil.TypePositive1);
    oil.ScorePos2 = resolveScore(oil, oil.TypePositive2);
    oil.ScorePos3 = resolveScore(oil, oil.TypePositive3);
    oil.ScorePos4 = resolveScore(oil, oil.TypePositive4);
    oil.ScorePos5 = resolveScore(oil, oil.TypePositive5);

    oil.ScoreNeg1 = resolveScore(oil, oil.TypeNegative1);
    oil.ScoreNeg2 = resolveScore(oil, oil.TypeNegative2);
    oil.ScoreNeg3 = resolveScore(oil, oil.TypeNegative3);
    oil.ScoreNeg4 = resolveScore(oil, oil.TypeNegative4);
    oil.ScoreNeg5 = resolveScore(oil, oil.TypeNegative5);
}

// WRITE OUTPUT
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2));

console.log("Done.");