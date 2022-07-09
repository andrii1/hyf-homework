console.log("Script loaded");
const products = getAvailableProducts();
console.log(products);
const searchInput = document.getElementById("search");
const maximumPriceInput = document.getElementById("maximumPrice");
const buttonSortPrice = document.getElementById("price-sort");
searchInput.addEventListener("input", filterProducts);
maximumPriceInput.addEventListener("input", filterProductsByPrice);
buttonSortPrice.addEventListener("click", sortProductsByPrice);
function filterProducts(event) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(event.target.value)
  );
  renderProducts(filteredProducts);
}

function filterProductsByPrice(event) {
  const filteredProducts = products.filter(
    (product) => product.price < event.target.value
  );
  renderProducts(filteredProducts);
}
let clickCount = 0;
function sortProductsByPrice() {
  if (clickCount % 2 == 0) {
    const sortedProducts = products.sort((a, b) => a.price - b.price);
    renderProducts(sortedProducts);
  } else {
    const sortedProducts = products.sort((a, b) => b.price - a.price);
    renderProducts(sortedProducts);
  }

  clickCount++;
}

const list = document.querySelector("#list");

function renderProducts(products) {
  // your code here
  list.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    const listItem = document.createElement("li");
    const name = document.createElement("h2");
    const price = document.createElement("p");
    const rating = document.createElement("p");
    name.innerHTML = products[i].name;
    price.innerHTML = `price: ${products[i].price}`;
    rating.innerHTML = `rating: ${products[i].rating}`;
    list.appendChild(listItem);
    list.appendChild(name);
    list.appendChild(price);
    list.appendChild(rating);
  }
}

//renderProducts(products); // This should create the ul and the li's with the individual products details
