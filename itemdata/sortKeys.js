#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// ===== SORT FUNCTION =====
function sortObjectKeys(obj) {
    if (Array.isArray(obj)) {
        return obj.map(sortObjectKeys);
    }

    if (obj !== null && typeof obj === "object") {
        return Object.keys(obj)
            .sort((a, b) => a.localeCompare(b))
            .reduce((sorted, key) => {
                sorted[key] = sortObjectKeys(obj[key]);
                return sorted;
            }, {});
    }

    return obj;
}

// ===== MAIN =====
function main() {
    const inputPath = process.argv[2];
    const outputPath = process.argv[3] || inputPath;

    if (!inputPath) {
        console.error("Usage: node sort-json.js <input.json> [output.json]");
        process.exit(1);
    }

    const resolvedInput = path.resolve(inputPath);
    const resolvedOutput = path.resolve(outputPath);

    if (!fs.existsSync(resolvedInput)) {
        console.error("File not found:", resolvedInput);
        process.exit(1);
    }

    try {
        const raw = fs.readFileSync(resolvedInput, "utf-8");
        const data = JSON.parse(raw);

        const sorted = sortObjectKeys(data);

        fs.writeFileSync(resolvedOutput, JSON.stringify(sorted, null, 2));
        console.log(`Sorted JSON written to: ${resolvedOutput}`);
    } catch (err) {
        console.error("Error processing JSON:", err.message);
        process.exit(1);
    }
}

main();