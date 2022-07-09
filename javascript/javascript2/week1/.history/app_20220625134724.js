const animals = [
  "cat",
  "dog",
  "snake",
  "lion",
  "tiger",
  "bear",
  "crocodile",
  "shark",
  "whale",
  "crocodile",
];
const input = document.getElementById("input");
const button = document.getElementById("button");
const display = document.getElementById("display");
function displayText() {
  const text = input.value;
  display.innerHTML = `${text} - The ${animals[Math.floor(Math.random() * animals.length)];}`;
}

button.addEventListener("click", displayText);
