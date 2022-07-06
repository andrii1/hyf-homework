const button = document.querySelector("button");
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
