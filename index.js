const fs = require("fs");
const csv = require("csv-parser");

const inputFile = "input_countries.csv";
const canadaFile = "canada.txt";
const usaFile = "usa.txt";

[canadaFile, usaFile].forEach((file) => {
  if (fs.existsSync(file)) fs.unlinkSync(file);
});

fs.writeFileSync(canadaFile, "country,year,population\n");
fs.writeFileSync(usaFile, "country,year,population\n");

fs.createReadStream(inputFile)
  .pipe(csv())
  .on("data", (row) => {
    const country = row.country.trim();

    if (country === "Canada") {
      fs.appendFileSync(canadaFile, `${row.country},${row.year},${row.population}\n`);
    }

    if (country === "United States") {
      fs.appendFileSync(usaFile, `${row.country},${row.year},${row.population}\n`);
    }
  })
  .on("end", () => {
    console.log("Files created: canada.txt and usa.txt");
  });
