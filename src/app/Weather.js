export class Weather {
  constructor(city) {
    this.APIkey = "0829e4d9f43cbab044ad71b0938a0557";
    this.city = city;
    this.countryCode = countryCode;
  }

  async getWeather() {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.APIkey}&units=metric`;
    const response = await fetch(URL);
    const data = response.json();
    return data;
  }

  changeLocation(city, countyCode) {
    this.city = city;
    this.countyCode = countyCode;
  }
}
