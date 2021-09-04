// Modules
import { makeCard } from "./utils.js";
import { handleError } from "./utils.js";

// Catch the DOM
// const addButton = document.querySelector("#button");
const form = document.querySelector("#form");
const input = document.querySelector("#input");

// Request for the City
function getCity(e) {
  // Prevents the page from reloading
  e.preventDefault();

  const city = input.value.toLowerCase();
  // Request DATA
  fetchData(city);
}

// Fetch the data from the city
async function fetchData(city) {
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0829e4d9f43cbab044ad71b0938a0557`;
  // Check if that city has already been shown
  try {
    const response = await fetch(API);
    const data = await response.json();

    const city = {
      id: data.id,
      name: data.name.toLowerCase(),
      country: data.sys.country,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      degrees: parseInt(data.main.temp),
      max: parseInt(data.main.temp_max),
      min: parseInt(data.main.temp_min),
    };

    makeCard(city);
  } catch (err) {
    handleError({ err: err });
  }
}

form.addEventListener("submit", getCity);
