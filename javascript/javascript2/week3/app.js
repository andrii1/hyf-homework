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

buttonLogLocation.addEventListener("click", function () {
  // get the current position
  navigator.geolocation.getCurrentPosition(onSuccess);
});

function onSuccess(position) {
  const { latitude, longitude } = position.coords;
  console.log(latitude);
  divCoordinates.textContent = `This is the latitude ${latitude}, this is the longitude ${longitude})`;
}
