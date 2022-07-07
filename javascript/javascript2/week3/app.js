const button = document.querySelector("#button");
const buttonLogLocation = document.querySelector("#log-location");
const divCoordinates = document.querySelector("#coordinates");
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(logAfterTwoSeconds, 2500);
});
function logAfterTwoSeconds() {
  console.log("Called after 2.5 seconds");
}
function logTextAfterSpecificTime(delay, stringToLog) {
  const delayMs = delay * 1000;
  setTimeout(function () {
    console.log(stringToLog);
  }, delayMs);
}

logTextAfterSpecificTime(5, "log this text after 5 seconds");

button.addEventListener("click", function () {
  logTextAfterSpecificTime(5, "called after 5 sec");
});

const saturnLogger = () => {
  console.log("Saturn");
};
const earthLogger = () => {
  console.log("Earth");
};

const planetLogFunction = (functionname) => {
  functionname();
};

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

buttonLogLocation.addEventListener("click", function () {
  // get the current position
  navigator.geolocation.getCurrentPosition(onSuccess);
});

function onSuccess(position) {
  let { latitude, longitude } = position.coords;
  console.log(latitude);
  divCoordinates.textContent = `This is the latitude ${latitude}, this is the longitude ${longitude})`;
}

//
let map;

function initMap() {
  const getCoords = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      latitude = pos.coords.latitude;
      longitude = pos.coords.longitude;
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latitude, lng: longitude },
        zoom: 8,
      });
      let marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
      });
    });
  };

  getCoords();
}

window.initMap = initMap;
