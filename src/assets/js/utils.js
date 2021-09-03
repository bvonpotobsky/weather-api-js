// Catch the DOM
const cardContainer = document.querySelector(".container");
const alertMsg = document.querySelector("#alert");

// Variables
const cities = [];

// Function to make the Card
export function makeCard(data) {
  // Store values
  const city = data.name;
  const country = data.sys.country;
  const description = data.weather[0].description;
  const degrees = parseInt(data.main.temp);
  const max = parseInt(data.main.temp_max);
  const min = parseInt(data.main.temp_min);
  // Make the card
  const card = document.createElement("div");
  card.classList.add("card");
  // Make card content
  const CardHTML = `
        <h3 class="card__city">${city}, ${country}</h3>
        <p class="card__update">Last update: 6:52 a.m.</p>
        <p class="card__degree">${degrees}°</p>
        <p class="card__description">${description}</p>
        <span class="card__day">
          <img
            class="card__day__icon"
            src="./src/assets/icons/animated/cloudy-day-1.svg"
            alt=""
          />
          <p class="card__day__info">${min}°/${max}°</p>
        </span>
      `;
  card.innerHTML = CardHTML;
  cardContainer.appendChild(card);
  input.value = "";
}

// Handle Error
export function handleError({ city: city, err: err }) {
  if (city !== "" && city !== undefined) {
    alertMsg.textContent = "Ya tienes esa ciudad en tu lista!";
    alertMsg.style.display = "block";
    input.value = "";
    setTimeout(() => {
      alertMsg.style.display = "none";
    }, 2000);
  } else {
    alertMsg.textContent = "Ingresa una ciudad valida!";
    alertMsg.style.display = "block";
    alertMsg.style.visibility = 1;
    input.value = "";

    setTimeout(() => {
      alertMsg.style.display = "none";
    }, 2000);
  }
}

// Function to check if city has already been shown
export function isCityPrinted(city) {
  // Check if that city has been requested
  if (cities.includes(city) && city !== "") {
    return true;
  } else {
    cities.push(city);
  }
}
