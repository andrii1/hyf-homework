console.log("Script loaded");
const products = getAvailableProducts();
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", filterProducts);
function filterProducts(event) {
  return;
}

console.log(products);
const list = document.querySelector("#list");

function renderProducts(products) {
  // your code here

  for (let i = 0; i < searchedProducts.length; i++) {
    const listItem = document.createElement("li");
    const name = document.createElement("h2");
    const price = document.createElement("p");
    const rating = document.createElement("p");
    name.innerHTML = searchedProducts[i].name;
    price.innerHTML = `price: ${searchedProducts[i].price}`;
    rating.innerHTML = `rating: ${searchedProducts[i].rating}`;
    list.appendChild(listItem);
    list.appendChild(name);
    list.appendChild(price);
    list.appendChild(rating);
  }
}

//renderProducts(products); // This should create the ul and the li's with the individual products details
