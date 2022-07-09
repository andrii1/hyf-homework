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
const radios = document.getElementsByName("radio");

for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener("change", differentOptions);
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
function differentOptions() {
  if (radios[i].checked && radios[i].value === "clicking-button") {
    alert(radios[i].value);
    button.addEventListener("click", generateSpiritAnimal);
  } else if (radios[i].checked && radios[i].value === "hovering") {
    //if (input.value != "") {
    input.addEventListener("mouseleave", generateSpiritAnimal);
    //}
  } else if (radios[i].checked && radios[i].value === "writing-text") {
    input.addEventListener("input", generateSpiritAnimal);
  }
}

newAnimalButton.addEventListener("click", newSpiritAnimal);
