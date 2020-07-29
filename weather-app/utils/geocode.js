const axios = require("axios");

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiYW1haG1hZG5pYSIsImEiOiJja2QzdXUzaDkwMGtyMnVydGplYzZkanYzIn0.J5JRf2GAotdolxBB4UWQZg&limit=1`;
  axios
    .get(url)
    .then((response) => {
      callback(undefined, {
        latitude: response.data.features[0].center[1],
        longitude: response.data.features[0].center[0],
        location: response.data.features[0].place_name,
      });
    })
    .catch((e) => {
      if (e.response) {
        callback("NOT FOUNT MAPBOX . try another one", undefined);
      } else if (e.request) {
        console.log(e);
        // callback("REQUEST MAPBOX ERROR", undefined);
      } else {
        // callback("Unable to connect to MAPBOX services.", undefined);
      }
    });
};

module.exports = geoCode;
