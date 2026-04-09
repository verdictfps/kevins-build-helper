function stripHTML(str) {
  console.log(str)
  if (typeof str !== "string") return "";

  return str
    .replace(/<br\s*\/?>/gi, ", ") // convert line breaks
    .replace(/<[^>]*>/g, "")       // remove all HTML tags
    .replace(/\s+/g, " ")          // normalize whitespace
    .trim();
}

function addSearchDescriptions(data) {
  
    for (const key in data.Optic) {
        const oil = data.Optic[key];
        oil.SearchDescription = oil.Name;
        oil.SearchDescription += " ";
        oil.SearchDescription += (stripHTML(oil.StatDescription));
    }

  return data;
}

const fs = require("fs");

const inputFile = "./Optics.json";
const oils = JSON.parse(fs.readFileSync(inputFile, "utf8"));

addSearchDescriptions(oils);

fs.writeFileSync("Optics.json", JSON.stringify(oils, null, 2));