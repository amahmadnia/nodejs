const fs = require("fs");
const dataBuffer = JSON.parse(fs.readFileSync("1-json.json"));
console.log(dataBuffer);

dataBuffer.name = "BOOBIES STORY";
dataBuffer.author = "SICKOSS";
const stringData = JSON.stringify(dataBuffer);
fs.writeFileSync("1-json.json", stringData);

