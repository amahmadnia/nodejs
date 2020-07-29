const axios = require("axios");
const chalk = require("chalk");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9a7dd87badb8839c1d4159ae79497f1b`;
  axios
    .get(url)
    .then((response) => {
      callback(undefined, response.data);
    })
    .catch((e) => {
      if (e.response) {
        callback("400 Forecast location not found. try another one", undefined);
      } else if (e.request) {
        callback("REQUEST Forecast ERROR", undefined);
      } else {
        callback("Unable to connect to weather services.", undefined);
      }
    });
};

module.exports = forecast;
