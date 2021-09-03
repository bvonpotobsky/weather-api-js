// Modules
import { makeCard } from "./utils.js";
import { handleError } from "./utils.js";

// Catch the DOM
const addButton = document.querySelector("#button");
const input = document.querySelector("#input");
const cities = [];

// Request for the City
function getCity() {
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
      if (response.status !== 404) {
        const data = await response.json();
        makeCard(data);
      } else {
        // Show alert message
        handleError(city);
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    handleError(city);
  }
}

const isCityPrinted = (city) => {
  // Check if that city has been requested
  if (cities.includes(city) && city !== "") {
    return true;
  } else {
    cities.push(city);
  }
};

addButton.addEventListener("click", getCity);
