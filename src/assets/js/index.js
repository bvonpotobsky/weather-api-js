// Modules
import { makeCard } from "./utils.js";
import { handleError } from "./utils.js";
import { cityNotFound } from "./utils.js";

// Catch the DOM
const addButton = document.querySelector("#button");
const input = document.querySelector("#input");
const cities = [];

// Request for the City
function getCity() {
  // Store city
  const city = input.value.toLowerCase();
  // Check if that city has been requested
  if (!cities.includes(city) && city !== "") {
    cities.push(city);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=0829e4d9f43cbab044ad71b0938a0557`;
    // Request DATA
    fetchData(API);
  } else {
    // If city already exists or its undefined
    handleError(city);
  }
}

// Fetch the data from the city
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.status !== 404) {
      const data = await response.json();
      makeCard(data);
    } else {
      cityNotFound();
    }
  } catch (err) {
    console.error(err);
  }
}

addButton.addEventListener("click", getCity);
