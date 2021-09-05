export class Weather {
  constructor(city) {
    this.APIkey = "0829e4d9f43cbab044ad71b0938a0557";
    this.city = city;
  }

  async getWeather() {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.APIkey}&units=metric`;
    const response = await fetch(URL);
    const data = response.json();
    return data;
  }

  changeLocation(city) {
    this.city = city;
  }
}
