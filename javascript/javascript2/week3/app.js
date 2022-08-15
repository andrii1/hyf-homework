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

// 6
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

//7
const runAfterDelay = (delay, callback) => {
  setTimeout(callback, delay);
};

runAfterDelay(5000, function () {
  console.log("logging text");
});

//8
document.addEventListener("click", onClickCheck);

let lastClicked;
function onClickCheck() {
  timeNow = new Date().getTime();
  /*
  testing in console
  console.log(lastClicked);
  console.log(timeNow);
  console.log(timeNow - lastClicked);
  */
  if (timeNow < lastClicked + 500) {
    // Execute the link action
    console.log("double click!");
  } else {
    console.log("not double click!");
  }

  lastClicked = timeNow;
}

//9
const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
  if (typeof shouldTellFunnyJoke !== "boolean") {
    throw new Error(`${shouldTellFunnyJoke} should be boolean`);
  }
  logFunnyJoke = () => {
    console.log(
      `And the bartender says, "Success, but you're not ready!" So a JavaScript function walks into a bar.`
    );
  };

  logBadJoke = () => {
    console.log(`Bad JavaScript joke`);
  };

  if (shouldTellFunnyJoke === true) {
    logFunnyJoke();
  } else if (shouldTellFunnyJoke === false) {
    logBadJoke();
  }
};

jokeCreator(true);
jokeCreator(false);
