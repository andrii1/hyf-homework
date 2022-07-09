const animals = ["cat", "dog", "snake", ""];
const input = document.getElementById("input");
const button = document.getElementById("button");
const display = document.getElementById("display");
function displayText() {
  const text = input.value;
  display.innerHTML = `${text} - The fullmoon wolf`;
}

button.addEventListener("click", displayText);
