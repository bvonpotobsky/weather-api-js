// async function getData(url) {
//   const response = await fetch(url);
//   const data = await response;
//   return data;
// }

const cardContainer = document.querySelector(".container");
const addButton = document.querySelector("#button");
const input = document.querySelector("#input");

function getData() {
  const city = input.value;
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=0829e4d9f43cbab044ad71b0938a0557`;
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      const city = data.name;
      const country = data.sys.country;
      const degrees = parseInt((5 / 9) * (data.main.temp - 32));
      const description = data.weather[0].description;
      const max = parseInt((5 / 9) * (data.main.temp_max - 32));
      const min = parseInt((5 / 9) * (data.main.temp_min - 32));
      const div = document.createElement("div");
      div.classList.add("card");
      const card = `
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

      div.innerHTML = card;
      console.log(div);
      cardContainer.appendChild(div);
    })
    .catch((err) => console.log(err));
}

addButton.addEventListener("click", getData);
