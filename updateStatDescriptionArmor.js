const fs = require("fs");

const INPUT_FILE = "./itemdata/Trinkets.json";
const OUTPUT_FILE = "./itemdata/Trinkets2.json";

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

function wrap(value, type) {

    if (type === "positive")
        return `<span style='color:green'>${value}</span>`;

    if (type === "negative")
        return `<span style='color:red'>${value}</span>`;

    return value;
}

function buildDescription(oil) {

    const positive = [];
    const negative = [];

    function add(label, value, type) {

        const line = `<p>${label}: ${wrap(value, type)}</p>`;

        if (type === "positive")
            positive.push(line);
        else if (type === "negative")
            negative.push(line);
    }

const percentStats = [
    ["DamageMultWearableAR", "Assault Rifle Dmg"],
    ["DamageMultWearableAutomatic", "Automatic Weapon Dmg"],
    ["DamageMultWearableLMG", "LMG Dmg"],
    ["DamageMultWearablePistol", "Pistol Dmg"],
    ["DamageMultWearableRevolver", "Revolver Dmg"],
    ["DamageMultWearableRifle", "Rifle Dmg"],
    ["DamageMultWearableShotgun", "Shotgun Dmg"],
    ["DamageMultWearableSniper", "Sniper Dmg"],
    ["MovementSpeedEquipment", "Movement Speed"],
    ["SprintSpeedEquipment", "Sprint Speed"],
    ["SwimSpeedEquipment", "Swim Speed"],
    ["JumpPowerEquipment", "Jump Power"],
    ["MeleeDamageMultEquip", "Melee Damage"],
    ["WeaponWeightModifier", "Weapon Weight"],
    ["MoveAccuracyEquipment", "Move Accuracy"],
    ["ExtraJumpsMult", "Extra Jumps"]
];

    for (const [key, label] of percentStats) {

        const v = oil[key];
        if (!v) continue;

        let type = "neutral";

        switch (key) {

            case "DamageMultWearableAR":
            case "DamageMultWearableAutomatic":
            case "DamageMultWearableLMG":
            case "DamageMultWearablePistol":
            case "DamageMultWearableRevolver":
            case "DamageMultWearableRifle":
            case "DamageMultWearableShotgun":
            case "DamageMultWearableSniper":
            case "SprintSpeedEquipment":
            case "SwimSpeedEquipment":
            case "JumpPowerEquipment":
            case "MeleeDamageMultEquip":
            case "WeaponWeightModifier":
            case "MoveAccuracyEquipment":
                type = "positive";
                break;

            case "ExtraJumpsMult":
            case "MovementSpeedEquipment":
                type = v > 0 ? "positive" : "negative";
                break;
        }

        add(label, pct(v), type);
    }

    // flat

    if (oil.Charisma) {
        add(
            "Charisma",
            num(oil.Charisma),
            oil.Charisma > 0 ? "positive" : "negative"
    );
    }
    if (oil.Armor){
        add(
            "Armor",
            num(oil.Armor),
            "positive"
        );
    }
    if (oil.CharmResistance){
        add(
            "Charm Resist",
            num(oil.CharmResistance),
            "positive"
        );
    }
    if (oil.CoyoteTime) {
        add(
            "Coyote Time",
            num(oil.CoyoteTime),
            "positive"
        );
    }
    if (oil.DamageResistElectric) {
        add(
            "Electric Dmg Resist",
            num(oil.DamageResistElectric),
            "positive"
        );
    }
    if (oil.DamageResistExplosive) {
        add(
            "Explosive Dmg Resist",
            num(oil.DamageResistExplosive),
            "positive"
        );
    }
    if (oil.DamageResistFire) {
        add(
            "Fire Dmg Resist",
            num(oil.DamageResistFire),
            "positive"
        );
    }
    if (oil.DamageResistFrost) {
        add(
            "Frost Dmg Resist",
            num(oil.DamageResistFrost),
            "positive"
        );
    }
    if (oil.DamageResistLight) {
        add(
            "Light Dmg Resist",
            num(oil.DamageResistLight),
            "positive"
        );
    }
    if (oil.DamageResistPoison) {
        add(
            "Poison Dmg Resist",
            num(oil.DamageResistPoison),
            "positive"
        );
    }
    if (oil.ExtraJumps) {
        add(
            "Extra Jumps",
            num(oil.ExtraJumps),
            "positive"
        );
    }

    return [
        ...positive,
        ...negative,
    ]
        .filter(Boolean)
        .join("");
}


// UPDATE ALL OILS
for (const oilName in oils.Trinket) {
    console.log(oils.Trinket[oilName]);
    oils.Trinket[oilName].StatDescription =
    buildDescription(oils.Trinket[oilName]);
}

// SAVE
fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(oils, null, 2),
    "utf8"
);

console.log("StatDescriptions rebuilt successfully.");