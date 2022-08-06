const gifsText = document.getElementById("gifs-text");
const button = document.getElementById("button");
const numberOfGifs = document.getElementById("gifs-number");
const images = document.getElementById("images");

const displayGifs = (searchInput, number) => {
  if (searchInput === "") {
    throw new Error("Search can't be empty");
  }
  let fetchUrl;
  if (number != "") {
    fetchUrl = `https://api.giphy.com/v1/gifs/search?api_key=2UAzeprGyPLG4DO2jegU595ZK2Af2uP6&q=${searchInput}&limit=${number}`;
  } else {
    fetchUrl = `https://api.giphy.com/v1/gifs/search?api_key=2UAzeprGyPLG4DO2jegU595ZK2Af2uP6&q=${searchInput}`;
  }
  fetch(fetchUrl)
    .then((response) => response.json())
    .then((responseData) => {
      images.innerHTML = "";
      responseData.data.forEach((element) => {
        const imageGif = document.createElement("img");
        imageGif.className = "gif-image";
        imageGif.src = `https://media.giphy.com/media/${element.id}/giphy.gif`;
        images.appendChild(imageGif);
      });
    });
};
button.addEventListener("click", function () {
  const searchInput = gifsText.value;
  displayGifs(searchInput);
});

numberOfGifs.addEventListener("change", (event) => {
  const searchInput = gifsText.value;
  displayGifs(searchInput, event.target.value);
});
