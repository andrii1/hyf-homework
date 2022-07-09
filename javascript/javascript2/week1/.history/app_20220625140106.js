const animals = [
  "spirit cat",
  "moon dog",
  "crying snake",
  "dangerous lion",
  "yellow tiger",
  "sun bear",
  "jupiter crocodile",
  "mars shark",
  "venus whale",
  "saturn crocodile",
];
const input = document.getElementById("input");
const button = document.getElementById("button");
const display = document.getElementById("display");
const newAnimalButton = document.getElementById("new-animal");
function displayText() {
  const text = input.value;
  if (typeof text !== "string" || text === "") {
    throw new Error("Name must be a non-empty string");
  }

  display.innerHTML = `${text} - The ${
    animals[Math.floor(Math.random() * animals.length)]
  }`;
}

function newSpiritAnimal() {
  const animal = display.innerHTML;
  if (animal === "") {
    throw new Error("Generate animal first!");
  }

  display.innerHTML = `${text} - The ${
    animals[Math.floor(Math.random() * animals.length)]
  }`;
}

button.addEventListener("click", displayText);
newAnimalButton.addEventListener("click", newSpiritAnimal);
