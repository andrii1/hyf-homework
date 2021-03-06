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
const radioElements = document.getElementById("radios");
radioElements.addEventListener("change", (event) => {
  switch (event.target.value) {
    case "clicking-button":
      button.addEventListener("click", generateSpiritAnimal);
      break;
    case "hovering":
      input.addEventListener("mouseleave", generateSpiritAnimal);
      break;
    case "writing-text":
      input.addEventListener("input", generateSpiritAnimal);
      break;
  }
  console.log(event.target.value);
});

/*
//Alternative way with radio boxes
for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener("change", function () {
    if (radios[i].checked && radios[i].value === "clicking-button") {

      button.addEventListener("click", generateSpiritAnimal);
    } else if (radios[i].checked && radios[i].value === "hovering") {

      input.addEventListener("mouseleave", generateSpiritAnimal);

    } else if (radios[i].checked && radios[i].value === "writing-text") {
      input.addEventListener("input", generateSpiritAnimal);
    }
  });
}
*/
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

newAnimalButton.addEventListener("click", newSpiritAnimal);
