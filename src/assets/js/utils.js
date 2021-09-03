// Catch the DOM
const cardContainer = document.querySelector(".container");
const alertMsg = document.querySelector("#alert");

// Function to make the Card
export function makeCard(data) {
  // Store values
  const city = data.name;
  const country = data.sys.country;
  const degrees = parseInt((5 / 9) * (data.main.temp - 32));
  const description = data.weather[0].description;
  const max = parseInt((5 / 9) * (data.main.temp_max - 32));
  const min = parseInt((5 / 9) * (data.main.temp_min - 32));
  // Make the card
  const card = document.createElement("div");
  card.classList.add("card");
  // Make the card content
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
export function handleError(city) {
  if (city !== "") {
    alertMsg.textContent = "Ya tienes esa ciudad en tu lista!";
    alertMsg.style.display = "block";
    setTimeout(() => {
      alertMsg.style.display = "none";
    }, 1500);
  } else {
    alertMsg.textContent = "Ingresa una ciudad valida!";
    alertMsg.style.display = "block";
    alertMsg.style.visibility = 1;

    setTimeout(() => {
      alertMsg.style.display = "none";
    }, 1500);
  }
}

// City not found
export function cityNotFound() {
  input.value = "";
  alertMsg.textContent = "Esa ciudad no existe!";
  alertMsg.style.display = "block";
  setTimeout(() => {
    alertMsg.style.display = "none";
  }, 1500);
}
