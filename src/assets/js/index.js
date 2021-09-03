// Modules
import { makeCard } from "./utils.js";
import { handleError } from "./utils.js";
import { isCityPrinted } from "./utils.js";

// Catch the DOM
// const addButton = document.querySelector("#button");
const form = document.querySelector("#form");
const input = document.querySelector("#input");

// Request for the City
function getCity(e) {
  e.preventDefault();
  // Store city
  const city = input.value.toLowerCase();
  // Request DATA
  fetchData(city);
}

// Fetch the data from the city
async function fetchData(city) {
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0829e4d9f43cbab044ad71b0938a0557`;

  // Check if that city has already been shown
  if (!isCityPrinted(city)) {
    try {
      const response = await fetch(API);
      const data = await response.json();
      makeCard(data);
    } catch (err) {
      handleError({ err: err });
      console.error(err);
    }
  } else {
    handleError({ city: city });
  }
}

form.addEventListener("submit", getCity);
