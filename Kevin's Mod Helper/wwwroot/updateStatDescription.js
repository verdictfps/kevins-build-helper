const fs = require("fs");

const INPUT_FILE = "./Oils.json";
const OUTPUT_FILE = "./Oils_UPDATED.json";

const oils = JSON.parse(fs.readFileSync(INPUT_FILE, "utf8"));

function pct(v) {
    const val = Math.round(v * 100);
    const sign = val > 0 ? "+" : "";
    return `${sign}${val}%`;
}

function num(v) {
    const sign = v > 0 ? "+" : "";
    return `${sign}${v}`;
}

function buildDescription(oil) {
    const lines = [];
//console.log(oil.oil[SpreadMult]);
    // Flat stats
    if (oil.Bounces)
        lines.push(`Bullet Bounces: ${num(oil.Bounces)}`);

    if (oil.Penetrations)
        lines.push(`Penetrations: ${num(oil.Penetrations)}`);

    if (oil.DamageAdd)
        lines.push(`Damage: ${num(oil.DamageAdd)}`);

    if (oil.BulletDrop)
        lines.push(`Bullet Drop: ${num(oil.BulletDrop)}`);

    if (oil.BulletBounciness)
        lines.push(`Bullet Bounciness: ${num(oil.BulletBounciness)}`);

    // Percent stats
    const percentStats = [
        ["DamageMult", "Damage"],
        ["ReloadSpeed", "Reload Speed"],
        ["RPM", "Attack Speed"],
        ["RecoilMult", "Recoil"],
        ["MovementSpeedMult", "Movement Speed"],
        ["DurabilityMult", "Max Durability"],
        ["BulletSpeed", "Bullet Speed"],
        ["JumpPower", "Jump Power"],
        ["LootDropChance", "Loot Chance"],
        ["AmmoConsumeChance", "Ammo Consume Chance"],
        ["ExtraAmmoUseChance", "Extra Ammo Use Chance"],
        ["BaseCritChance", "Crit Chance"],
        ["SpreadMult", "Spread"],
        ["ProjectileMult", "Projectiles"]
    ];

    for (const [key, label] of percentStats) {
        const v = oil[key];
        if (v)
            lines.push(`${label}: ${pct(v)}`);
    }

    // Spread 

    if (oil.SpreadAdd)
        lines.push(`Spread: ${num(oil.SpreadAdd)}`);

    // Special flags
    if (oil.MoneyDrops === "No")
        lines.push("No Money Drops");

    if (oil.OrganDrops === "No")
        lines.push("No Organ Drops");

    if (oil.CanADS === "No")
        lines.push("Disables Aiming");

    if (oil.DurabilityUsage === 0)
        lines.push("Does not increase durability usage");

    return lines.join("\\n");
}


// UPDATE ALL OILS
for (const oilName in oils.Oil) {
    console.log(oils.Oil[oilName]);
    oils.Oil[oilName].StatDescription =
    buildDescription(oils.Oil[oilName]);
}

// SAVE
fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(oils, null, 2),
    "utf8"
);

console.log("StatDescriptions rebuilt successfully.");