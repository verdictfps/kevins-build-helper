function stripHTML(str) {
  console.log(str)
  if (typeof str !== "string") return "";

  return str
    .replace(/<p\s*\/?>/gi, "")
    .replace(/<\/p\s*\/?>/gi, " ") // convert line breaks
    .replace(/<[^>]*>/g, "")       // remove all HTML tags
    .replace(/\s+/g, " ")          // normalize whitespace
    .trim();
}

function toDot(str) {
  return str
    .replace(/<\/p><p>/gi, " • ")
    .replace(/<p\s*\/?>/gi, "")
    .replace(/<\/p\s*\/?>/gi, " ")
    .trim();
}

function addSearchDescriptions(data) {
  
    for (const key in data.Trinket) {
        const oil = data.Trinket[key];
        oil.SearchDescription = oil.Name;
        oil.SearchDescription += " ";
        oil.SearchDescription += (stripHTML(oil.StatDescription));
        oil.DropdownDescription = (toDot(oil.StatDescription));
    }

  return data;
}

const fs = require("fs");

const inputFile = "./Trinkets.json";
const oils = JSON.parse(fs.readFileSync(inputFile, "utf8"));

addSearchDescriptions(oils);

fs.writeFileSync("Trinkets.json", JSON.stringify(oils, null, 2));