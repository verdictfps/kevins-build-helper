const fs = require("fs");

const INPUT_FILE = "./itemdata/Weapons.json";
const OUTPUT_FILE = "./itemdata/Weapons.json";

const oils = JSON.parse(fs.readFileSync(INPUT_FILE, "utf8"));

function dam(v, x) {
    console.log(v, x);

    let dam = null;

    switch (v) {
        case "12Ga":
            dam = `${20 * x}x 8`;
            break;
        case "9mm":
            dam = `${60 * x}`;
            break;
        case "5.56mm":
            dam = `${80 * x}`;
            break;
        case "7.62mm":
            dam = `${100 * x}`;
            break;
        case ".50 BMG":
            dam = `${200 * x}`;
            break;
        case "Energy":
            dam = `${50 * x}`;
            break;
        default:
            dam = 0;
    }
    console.log(dam);
    return dam;
}

function buildDescription(oil) {
    const lines = [];
    lines.push(`Ammo: ${oil.AmmoType}`);
    lines.push(`DMG Mult: ${oil.DamageMultiplier}x`);
    lines.push(`DMG: ${dam(oil.AmmoType, oil.DamageMultiplier)}`);

    return lines.join(" • ");
}


// UPDATE ALL OILS
for (const oilName in oils.Weapon) {
    oils.Weapon[oilName].DropdownDescription =
    buildDescription(oils.Weapon[oilName]);
}

// SAVE
fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(oils, null, 2),
    "utf8"
);

console.log("DropdownDescriptions rebuilt successfully.");