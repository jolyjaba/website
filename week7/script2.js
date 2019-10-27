let countries = ["Kazakhstan", "Russia", "England", "France"];
let cities_by_country = {
    "Kazakhstan": ["Almaty", "Astana", "Karagandy"],
    "Russia": ["Moscow", "Saint-Petersburg", "Kazan"],
    "England": ["London", "Manchester", "Liverpool"],
    "France": ["Paris", "Lyon", "Marseille"]
};
let selectCountries = document.getElementById("countries");
let selectCities = document.getElementById("cities");

window.onload = function () {
    for (let country of countries) {
        let countryOption = document.createElement("option");
        countryOption.innerHTML = country;
        selectCountries.appendChild(countryOption);
    }
    selectCountries.onchange = function () {
        selectCities.length = 1;
        for (let city of cities_by_country[this.value]) {
            let cityOption = document.createElement("option");
            cityOption.innerHTML = city;
            selectCities.appendChild(cityOption);
        }
    }
}