const fs = require("fs");

// Load your JSON file as a string
let text = fs.readFileSync("Oils.json", "utf8");

const abbreviations = {
  "Ammo Consume Chance": "AmmoCC",
  "Bullet Drop": "BD",
  "Recoil": "RCL",
  "Reload Speed": "RLD",
  "Movement Soeed": "MVSPD",
  "Damage - Mult": "DMG%",
  "Damage - Flat": "DMG+-",
  "Extra Ammo Use Chance": "EAUC",
  "Loot Chance": "LOOT",
  "Bullet Speed": "BS",
  "No Money Drops": "No Money",
  "No Organ Drops": "No Organs",
  "Jump Power": "JMP",
  "Max Durability": "DUR",
  "Bullet Bounciness": "BNCE",
  "Move Accuracy": "MVACC",
  "Bullet Bounces": "Bounces",
  "Crit Chance": "Crit",
  "Penetrations": "PEN",
  "Projectiles": "PROJ",
  "Does not increase durability usage": "No Dur Use"
};

text = text.replace(
  /("DropdownDescription":\s*")([^"]*)(")/g,
  (_, prefix, content, suffix) => {
    const stats = content.split(" • ");

    const newStats = stats.map(stat => {
      // Match optional arrow, then stat name before colon
      const match = stat.match(/^([▲▼]?\s*)([^:]+):/);
      if (match) {
        const arrow = match[1];        // ▲ or ▼ + space, if present
        const name = match[2];         // actual stat name
        if (abbreviations[name]) {
          return stat.replace(/^([▲▼]?\s*)([^:]+):/, arrow + abbreviations[name] + ":");
        }
      }
      return stat; // no change
    });

    return prefix + newStats.join(" • ") + suffix;
  }
);

fs.writeFileSync("Oils.json", text, "utf8");
console.log("✅ DropdownDescription updated with ▲/▼ arrows!");