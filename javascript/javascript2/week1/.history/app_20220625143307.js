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
let radios = document.getElementsByName("radio");
console.log(radios)

for (let i = 0, i < radios.length; i++) {
  if (radios[i].checked) {
    // do whatever you want with the checked radio
    alert(radios[i].value);

    // only one radio can be logically checked, don't check the rest
    break;
  }
}
function generateSpiritAnimal() {
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
  const text = input.value;
  display.innerHTML = `${text} - The ${
    animals[Math.floor(Math.random() * animals.length)]
  }`;
}

button.addEventListener("click", generateSpiritAnimal);
newAnimalButton.addEventListener("click", newSpiritAnimal);
