function assignTypesFromDescription(data) {
  const oils = data.Oil;

  for (const key in oils) {
    const oil = oils[key];

    if (!oil.StatDescription || oil.StatDescription === "None selected") continue;

    const lines = oil.StatDescription.split("<br>");

    let positiveType = null;
    let negativeType = null;

    for (const line of lines) {
      const statMatch = line.match(/^([^:]+):/);
      if (!statMatch) continue;

      const statName = statMatch[1].trim();

      // Detect color
      const isPositive = /color:\s*green/i.test(line);
      const isNegative = /color:\s*red/i.test(line);

      if (isPositive && !positiveType) {
        positiveType = mapStatToType(statName);
      }

      if (isNegative && !negativeType) {
        negativeType = mapStatToType(statName);
      }

      // Stop early if both found
      if (positiveType && negativeType) break;
    }

    if (positiveType) oil.TypePositive1 = positiveType;
    if (negativeType) oil.TypeNegative1 = negativeType;
  }

  return data;
}

function mapStatToType(stat) {
  const s = stat.toLowerCase();

  if (s.includes("ammo")) return "Ammo Consume Chance";
  if (s.includes("crit")) return "Base Crit Chance";
  if (s.includes("bounce")) return "Bullet Bounces";
  if (s.includes("speed") && s.includes("bullet")) return "Bullet Speed";
  if (s.includes("reload")) return "Reload Speed";
  if (s.includes("rpm") || s.includes("fire rate")) return "RPM";
  if (s.includes("spread")) return "Spread";
  if (s.includes("recoil")) return "Recoil";
  if (s.includes("penetration")) return "Penetration";
  if (s.includes("projectile")) return "Projectiles";
  if (s.includes("durability")) return "Max Durability";
  if (s.includes("loot")) return "Loot Drop Chance";
  if (s.includes("organ")) return "No Organ Drops";
  if (s.includes("money")) return "No Money Drops";
  if (s.includes("drop")) return "Bullet Drop";
  if (s.includes("drag")) return "Drag";
  if (s.includes("movement")) return "Movement Speed";
  if (s.includes("jump")) return "Jump Power";
  if (s.includes("disables")) return "Disables Aiming";
  if (s.includes("extra")) return "Extra Ammo Use Chance";
  if (s.includes("bounciness")) return "Bounciness";
  if (s.includes("move") && s.includes("accuracy")) return "Move Accuracy";
  

  if (s.includes("damage") && s.includes("flat")) return "Damage - Flat";
  if (s.includes("damage") && s.includes("mult")) return "Damage - Mult";

  return "Misc";
}

async function loadOils() {
    const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "Oils.json");

const oilsData = JSON.parse(fs.readFileSync(filePath, "utf8"));
   
    const updated = assignTypesFromDescription(oilsData);

    fs.writeFileSync("Oils_UPDATED.json", JSON.stringify(updated, null, 2));
}

loadOils();