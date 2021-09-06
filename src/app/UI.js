// import { Weather } from "./Weather";

export class UI {
  constructor() {
    this.location = document.getElementById("city_name");
    this.description = document.getElementById("city_description");
    this.temp = document.getElementById("city_temp");
    this.minmax = document.getElementById("city_min-max");
    this.humidty = document.getElementById("city_humidity");
    this.wind = document.getElementById("city_wind");
  }

  render(weather) {
    this.location.textContent = `${weather.name} / ${weather.sys.country}`;
    this.description.textContent = `${weather.weather[0].description}`;
    this.temp.textContent = `${parseInt(weather.main.temp)}°C`;
    this.minmax.textContent = `${parseInt(
      weather.main.temp_max
    )}°C / ${parseInt(weather.main.temp_min)}°C`;
    this.humidty.textContent = `Humidity: ${weather.main.humidity}%`;
    this.wind.textContent = `Wind: ${weather.wind.speed} m/s`;
  }
}
