// Catch the DOM
const cardContainer = document.querySelector(".container");
const alertMsg = document.querySelector("#alert");

// Variables
const cities = [];

// Function to make the Card
export function makeCard(city) {
  // Make the card element
  const card = document.createElement("div");
  card.classList.add("card");

  // Make card content
  const cardHTML = `
        <h3 class="card__city">${city.name}, ${city.country}</h3>
        <p class="card__update">Last update: 6:52 a.m.</p>
        <p class="card__degree">${city.degrees}°</p>
        <p class="card__description">${city.description}</p>
        <span class="card__day">
          <img
            class="card__day__icon"
            src="http://openweathermap.org/img/wn/${city.icon}.png"
            alt=""
          />
          <p class="card__day__info">${city.min}°/${city.max}°</p>
        </span>
      `;
  card.innerHTML = cardHTML;
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
export function isCityShown(city) {
  // Check if that city has been requested
  if (cities.includes(city) && city !== "") {
    return true;
  } else {
    cities.push(city);
  }
}
