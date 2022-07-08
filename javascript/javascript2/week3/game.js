const button = document.querySelector("#button-start-game");
const input = document.querySelector("#input-time");
const boxWinner = document.querySelector("#box-winner");
const showCounterS = document.querySelector("#counter-s");
const showCounterL = document.querySelector("#counter-l");

let confettiSettingsS = { target: "canvas-s" };
let confettiS = new ConfettiGenerator(confettiSettingsS);

let confettiSettingsL = { target: "canvas-l" };
let confettiL = new ConfettiGenerator(confettiSettingsL);

let countS = 0;
let countL = 0;
let gameStarted = false;

//What if a user starts pressing a key before the game is started, what should happen?

window.addEventListener("keydown", showMessage);

function showMessage(event) {
  if (event.key === "s" && gameStarted === false) {
    alert("enter time to start a game");
  } else if (event.key === "l" && gameStarted === false) {
    alert("enter time to start a game");
  }
}

function countKeyPressed(event) {
  if (event.key) {
    if (event.key === "s") {
      countS++;

      showCounterS.innerText = countS;
    } else if (event.key === "l") {
      countL++;

      showCounterL.innerText = countL;
    }
  }
}
function startGame() {
  //What if no time was specified for the game?
  if (input.value === "") {
    alert("Enter time to start");
    throw new Error("Enter time to start");
  }
  //If input is not a number
  if (isNaN(input.value)) {
    alert("Time should be in seconds - number");
    throw new Error("Time should be in seconds - number");
  }
  gameStarted = true;
  boxWinner.innerText = "";
  showCounterS.innerText = "";
  showCounterL.innerText = "";

  countS = 0;
  countL = 0;
  window.addEventListener("keydown", countKeyPressed);

  let timeMs = input.value * 1000;

  setTimeout(() => {
    if (countL > countS) {
      boxWinner.innerText = "Player L won!";

      confettiL.render();
    } else if (countS > countL) {
      boxWinner.innerText = "Player S won!";

      confettiS.render();
    } else if (countS === 0 && countL === 0) {
      //What if there were no key presses before the game ends?
      boxWinner.innerText = "You should have pressed some keys!";
    } else if (countS === countL) {
      //What if the game is a draw? Are both winners? None winners? Maybe indicate to the user that is was a draw.
      boxWinner.innerText = "It is a tie";
    }
    input.value = "";
    showCounterS.innerText = "";
    showCounterL.innerText = "";
    //restart a game
    button.innerText = "Start a new game";
  }, timeMs);
}
button.addEventListener("click", startGame);
