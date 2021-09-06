// Modules
import "../sass/main.scss";
import { Weather } from "./Weather";
import { UI } from "./UI";
import { LocalStorage } from "./localStorage";

const store = new LocalStorage();
const { city } = store.getLocationData();
const ui = new UI();
const weather = new Weather(city);

async function fetchWeather() {
  const data = await weather.getWeather();
  console.log(data);
  ui.render(data);
}

// Catch the DOM
const form = document.querySelector("#form");
const input = document.querySelector("#city");

// Event Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let cityValue = input.value;
  weather.changeLocation(cityValue);
  store.setLocationData(cityValue);
  fetchWeather();
  updateInput();
});

document.addEventListener("DOMContentLoaded", fetchWeather);

// Clean input when submit
function updateInput() {
  input.value = "";
}
