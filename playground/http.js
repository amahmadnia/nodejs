const https = require("https");
const url =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/London.json?access_token=pk.eyJ1IjoiYW1haG1hZG5pYSIsImEiOiJja2QzdXUzaDkwMGtyMnVydGplYzZkanYzIn0.J5JRf2GAotdolxBB4UWQZg&limit=1";
const request = https.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});
request.on("error", (error) => {
  console.log("An error: ", error);
});
request.end();
