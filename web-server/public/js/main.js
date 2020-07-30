const weatherForm = document.querySelector("form");
const search = weatherForm.querySelector("input");
const message1 = document.getElementById("msg-1");
const message2 = document.getElementById("msg-2");

message1.textContent = "";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  message1.textContent = "Loading...";
  message2.textContent = "";
  if (location === "") {
    message1.textContent = "";
    message2.textContent = "";
    return;
  }
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9a7dd87badb8839c1d4159ae79497f1b`;
  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.cod === "404") return (message1.textContent = "City not found");
      message1.textContent = `Location: ${data.name}, ${data.sys.country}`;
      message2.textContent = `Temperature: ${data.main.temp}`;
      console.log(data);
    });
  });
});
