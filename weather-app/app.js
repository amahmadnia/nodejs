const axios = require("axios");

axios
  .get(
    "http://api.openweathermap.org/data/2.5/weather?q=London&appid=9a7dd87badb8839c1d4159ae79497f1b"
  )
  .then((response) => {
    console.log(
      `London's current temperature is ${response.data.main.temp} degrees`
    );
  });

// const dataJSON;
const url =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/London.json?access_token=pk.eyJ1IjoiYW1haG1hZG5pYSIsImEiOiJja2QzdXUzaDkwMGtyMnVydGplYzZkanYzIn0.J5JRf2GAotdolxBB4UWQZg&limit=1";
axios.get(url).then((response) => {
  const latitude = response.data.features[0].center[0];
  const longitude = response.data.features[0].center[1];
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
});
