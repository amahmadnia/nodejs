const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

//Define paths for express configuration
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

//Setup handlebars engine and location
//express-generator uses a default Views directory which should be change by the command below
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

// Setup static directory
app.use(express.static(publicDirectoryPath));

//app gets
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) return res.send({ errorMessage: "No address" });
  const address = req.query.address;

  geoCode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) return res.send({ error });

    forecast(latitude, longitude, (forecastError, forecastData = {}) => {
      if (forecastError) return res.send({ forecastError });
      res.send({
        forecast: forecastData.main,
        location,
        address,
      });
    });
  });
});

// res.send({
//   address: req.query.address,
// });

app.get("/products", (req, res) => {
  if (!req.query.search)
    return res.send({ error: "You must provide a search term" });
  res.send({
    products: [],
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Mr West",
    ability: "Being a god",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Mr West",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestias repellat dignissimos possimus quas ipsum minus sed debitis repellendus impedit?",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    message: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    message: "OOPS!! Page not found bitcheeees!!",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
