// import { Weather } from "./Weather";

export class UI {
  constructor() {
    this.location = document.getElementById("weather-location");
    this.description = document.getElementById("weather-description");
    this.string = document.getElementById("weather-string");
    this.humidty = document.getElementById("weather-humidity");
    this.wind = document.getElementById("weather-wind");
  }

  render(weather) {
    this.location.textContent = `${weather.name} / ${weather.sys.country}`;
    this.description.textContent = `${weather.weather[0].description}`;
    this.string.textContent = `${weather.main.temp}°C`;
    this.humidty.textContent = `Humidity: ${weather.main.humidity}%`;
    this.wind.textContent = `Wind: ${weather.wind.speed} m/s`;
  }
}
