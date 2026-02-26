const fs = require("fs");

const input = JSON.parse(fs.readFileSync("Chamber.json", "utf8"));

const transformed = {
    Oil: {}
};

for (const oil of input) {
    transformed.Oil[oil.Name] = oil;
}

fs.writeFileSync(
    "Oils_Converted.json",
    JSON.stringify(transformed, null, 2)
);

console.log("Lookup-optimized conversion complete.");