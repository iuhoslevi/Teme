document.addEventListener("DOMContentLoaded", function () {
  function runWeatherApp() {
    let weatherKey = "02e77d365cd44ea0a86182627230601";
    let weatherBaseUrl = "https://api.weatherapi.com/v1";

    let searchButtonEl = document.querySelector("#search-button");
    searchButtonEl.addEventListener("click", onSearchButtonClick);
    let citySearchEl = document.querySelector("#city-search");
    let temperatureContainerEl = document.querySelector(
      "#temperature-container"
    );
    let cityNameEl = document.querySelector("#city-name");

    function onSearchButtonClick() {
      let city = citySearchEl.value;
      let queryParams = "key=" + weatherKey + "&q=" + city;
      fetch(weatherBaseUrl + "/current.json?" + queryParams)
        .then(function (response) {
          return response.json();
        })
        .then(function (weather) {
          let myWeather = weather || {};
          let currentWeather = myWeather.current || {};
          let temperature = currentWeather.temp_c || null;
          let cityName = myWeather.location.name || null;
          if (temperature !== null) {
            temperatureContainerEl.style.display = "block";
            cityNameEl.innerHTML = cityName;
            let temperatureEl = document.querySelector("#temperature");
            temperatureEl.innerHTML = temperature;
          } else {
            temperatureContainerEl.style.display = "none";
            alert("Could not find weather for " + city + ".");
          }
        });
    }
  }
  runWeatherApp();
});
