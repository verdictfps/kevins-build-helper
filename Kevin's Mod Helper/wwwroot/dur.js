const fs = require("fs");

const inputFile = "./Oils.json";
const outputFile = "./Oils_UPDATED.json";

const data = JSON.parse(fs.readFileSync(inputFile, "utf8"));

for (const key in data.Oil) {
    const oil = data.Oil[key];

    if (!("Firemode" in oil)) {
        oil.Firemode = "None";
    }
}

fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));

console.log("DurLossMult field added to all oils.");