// Modules
import "../sass/main.scss";
import { Weather } from "./Weather";
import { UI } from "./UI";
import { LocalStorage } from "./localStorage";

const store = new LocalStorage();
const { storeCity, storeCountryCode } = store.getLocationData();
const ui = new UI();
const weather = new Weather(storeCity, storeCountryCode);

async function fetchWeather() {
  const data = await weather.getWeather();
  ui.render(data);
}

// Clean input when submit
function updateInput() {
  city.value = "";
}

// Catch the DOM
const submit = document.getElementById("w-change-btn");
const city = document.getElementById("city");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let cityValue = city.value;
  weather.changeLocation(cityValue);
  fetchWeather();
  store.setLocationData(cityValue);
  updateInput();
});

document.addEventListener("DOMContentLoaded", fetchWeather);
