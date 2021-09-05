export class LocalStorage {
  constructor() {
    this.city;
    this.countryCode;
    this.defaultCity = "London";
    this.defaultCountryCode = "uk";
  }

  getLocationData() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }

    if (localStorage.getItem("countryCode") === null) {
      this.countryCode = this.defaultCountryCode;
    } else {
      this.city = localStorage.getItem("countryCode");
    }

    return {
      storeCity: this.city,
      storeCountryCode: this.countryCode,
    };
  }

  setLocationData(city, countryCode) {
    localStorage.setItem("city", city);
    localStorage.setItem("countryCode", countryCode);
  }
}
