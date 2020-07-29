const chalk = require("chalk");
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

let city = "tehran";
geoCode(city, (error, data) => {
  if (error) return console.log(chalk.red.inverse(error));
  console.log(`City: ${city}`);
  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) return console.log(chalk.red.inverse(error));
    const temp = forecastData.main.temp;
    console.log(`Location: ${data.location}`);
    console.log(`Temperature: ${temp}`);
  });
});
