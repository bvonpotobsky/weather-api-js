// Modules
import "../css/index.css";
import { Weather } from "./Weather";
import { DOM } from "./DOM";
import { LocalStorage } from "./localStorage";

const store = new LocalStorage();
const { storeCity, storeCountryCode } = store.getLocationData();
const dom = new DOM();
const weather = new Weather(storeCity, storeCountryCode);

async function fetchWeather() {
  const data = await weather.getWeather();
  console.log(data);
  dom.render(data);
}

// Clean input when submit
function updateInput() {
  city.value = "";
  countryCode.value = "";
}

// Catch the DOM
const submit = document.getElementById("w-change-btn");
const city = document.getElementById("city");
const countryCode = document.getElementById("countryCode");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let cityValue = city.value;
  let countryCodeValue = countryCode.value;
  weather.changeLocation(cityValue, countryCodeValue);
  fetchWeather();
  updateInput();

  console.log(city, countryCode);
});

document.addEventListener("DOMContentLoaded", fetchWeather);
