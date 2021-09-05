export class LocalStorage {
  constructor() {
    this.city;
    this.defaultCity = "London";
  }

  getLocationData() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }

    return {
      storeCity: this.city,
    };
  }

  setLocationData(city) {
    localStorage.setItem("city", city);
  }
}
