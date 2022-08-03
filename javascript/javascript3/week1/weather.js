const city = document.getElementById("city");
const button = document.getElementById("button");
const displayWeather = document.getElementById("display-weather");

/*const cityDisplay = document.getElementById("city-display");
const icon = document.getElementById("wicon");
const windSpeed = document.getElementById("wind-speed");
const cloudly = document.getElementById("cloudly");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
*/

const getCity = () => {
  const cityName = city.value;
  if (cityName === "") {
    throw new Error("City name can't be empty");
  }
  console.log(cityName);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=055e3200b3b25407a6c7935c9b2a6788`
  )
    .then((response) => response.json())
    .then((weatherData) => {
      const cityDisplay = document.createElement("h2");
      const temperature = document.createElement("h2");
      const icon = document.createElement("img");
      const windSpeed = document.createElement("p");
      const cloudly = document.createElement("p");
      const sunriseSunset = document.createElement("p");
      displayWeather.innerHTML = `<h2 id="city-display"></h2>
      <h2 id="temperature"></h2>
      <div id="icon"><img id="wicon" src="" alt="Weather icon" /></div>
      <p>Wind speed: <span id="wind-speed"></span></p>
      <p id="cloudly"></p>
      <p>
        Sunrise: <span id="sunrise"></span>Sunset: <span id="sunset"></span>
      </p>`;
      cityDisplay.innerHTML = weatherData.name;
      temperature.innerHTML = weatherData.main.temp;
      windSpeed.innerHTML = `Wind speed: ${weatherData.wind.speed}`;
      cloudly.innerHTML = `Clouds: ${weatherData.clouds.all}`;
      sunriseSunset.innerHTML = `Sunrise: ${weatherData.sys.sunrise}, Sunset: ${weatherData.sys.sunset}`;
      console.log(weatherData.clouds.all);
      console.log(weatherData.sys.sunrise);
      console.log(weatherData.sys.sunset);
      icon.src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
      displayWeather.appendChild(cityDisplay);
      displayWeather.appendChild(temperature);
      displayWeather.appendChild(icon);
      displayWeather.appendChild(windSpeed);
      displayWeather.appendChild(cloudly);
      displayWeather.appendChild(sunriseSunset);
      console.log(weatherData);
      console.log(weatherData.name);
      console.log(weatherData.main.temp);
      console.log(weatherData.wind.speed);
      console.log(weatherData.clouds.all);
      console.log(weatherData.sys.sunrise);
      console.log(weatherData.sys.sunset);
      console.log(weatherData.coord.lat);
      console.log(weatherData.coord.lon);
      console.log(weatherData.weather[0].icon);
      // HERE IS WHERE YOU WRITE YOUR CODE!!!!!!!!
    });
};
button.addEventListener("click", getCity);

/*
The chosen city
Temperature
Icon for the weather type
Wind speed
How clowdy it is
When sunrise and sunset is
Optional a map showing where the city is located

*/
