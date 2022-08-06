const city = document.getElementById("city");
const button = document.getElementById("button");
const displayWeather = document.getElementById("display-weather");
const buttonWeatherCurrentLocation = document.getElementById(
  "button-current-location"
);
const cityDisplay = document.createElement("h2");
const temperature = document.createElement("h2");
const icon = document.createElement("img");
const windSpeed = document.createElement("p");
const cloudly = document.createElement("p");
const sunriseSunset = document.createElement("p");
const celsiusButton = document.createElement("button");

function timeConverter(timestamp) {
  let a = new Date(timestamp * 1000);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  let sec = a.getSeconds();
  let time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}

const getCity = () => {
  const cityName = city.value;
  if (cityName === "") {
    throw new Error("City name can't be empty");
  }
  displayWeather.innerHTML = "";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=055e3200b3b25407a6c7935c9b2a6788`
  )
    .then((response) => response.json())
    .then((weatherData) => {
      cityDisplay.innerHTML = weatherData.name;
      console.log(weatherData);
      temperature.innerHTML = `${weatherData.main.temp} K`;
      windSpeed.innerHTML = `Wind speed: ${weatherData.wind.speed}`;
      cloudly.innerHTML = `Clouds: ${weatherData.clouds.all}`;
      const dateSunrise = timeConverter(weatherData.sys.sunrise);
      const dateSunset = timeConverter(weatherData.sys.sunset);
      sunriseSunset.innerHTML = `Sunrise: ${dateSunrise}, Sunset: ${dateSunset}`;
      icon.src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
      celsiusButton.id = "celsius-button";
      celsiusButton.innerHTML = "in Celsius";
      displayWeather.appendChild(cityDisplay);
      displayWeather.appendChild(celsiusButton);
      displayWeather.appendChild(temperature);

      displayWeather.appendChild(icon);
      displayWeather.appendChild(windSpeed);
      displayWeather.appendChild(cloudly);
      displayWeather.appendChild(sunriseSunset);
      //Additional feature: change to Celsius
      document.addEventListener("click", function (e) {
        if (e.target && e.target.id == "celsius-button") {
          const numberTemp = parseInt(weatherData.main.temp);
          const temperatureInCelsius = numberTemp - 273.15;
          temperature.innerHTML = `${temperatureInCelsius.toFixed(2)} °C`;
        }
      });
    });
};

// Use my current position
const getWeatherInCurrentLocation = () => {
  displayWeather.innerHTML = "";

  navigator.geolocation.getCurrentPosition((pos) => {
    latitude = pos.coords.latitude;
    longitude = pos.coords.longitude;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=055e3200b3b25407a6c7935c9b2a6788`
    )
      .then((response) => response.json())
      .then((weatherData) => {
        cityDisplay.innerHTML = weatherData.name;
        console.log(weatherData);
        temperature.innerHTML = `${weatherData.main.temp} K`;
        windSpeed.innerHTML = `Wind speed: ${weatherData.wind.speed}`;
        cloudly.innerHTML = `Clouds: ${weatherData.clouds.all}`;
        const dateSunrise = timeConverter(weatherData.sys.sunrise);
        const dateSunset = timeConverter(weatherData.sys.sunset);
        sunriseSunset.innerHTML = `Sunrise: ${dateSunrise}, Sunset: ${dateSunset}`;
        icon.src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
        celsiusButton.id = "celsius-button";
        celsiusButton.innerHTML = "in Celsius";
        displayWeather.appendChild(cityDisplay);
        displayWeather.appendChild(celsiusButton);
        displayWeather.appendChild(temperature);

        displayWeather.appendChild(icon);
        displayWeather.appendChild(windSpeed);
        displayWeather.appendChild(cloudly);
        displayWeather.appendChild(sunriseSunset);
        //Additional feature: change to Celsius
        document.addEventListener("click", function (e) {
          if (e.target && e.target.id == "celsius-button") {
            const numberTemp = parseInt(weatherData.main.temp);
            const temperatureInCelsius = numberTemp - 273.15;
            temperature.innerHTML = `${temperatureInCelsius.toFixed(2)} °C`;
          }
        });
      });
  });
};
button.addEventListener("click", getCity);
buttonWeatherCurrentLocation.addEventListener(
  "click",
  getWeatherInCurrentLocation
);
