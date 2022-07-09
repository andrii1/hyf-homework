console.log("Script loaded");
const products = getAvailableProducts();
console.log(products);
let clickCount = 0;
let clickCountRating = 0;
const searchInput = document.getElementById("search");
const maximumPriceInput = document.getElementById("maximumPrice");
const buttonSortPrice = document.getElementById("price-sort");
const buttonSortRating = document.getElementById("rating-sort");
const productsCount = document.getElementById("count-products");
productsCount.innerText = `${products.length} available`;
searchInput.addEventListener("input", filterProducts);
maximumPriceInput.addEventListener("input", filterProductsByPrice);
buttonSortPrice.addEventListener("click", sortProductsByPrice);
buttonSortRating.addEventListener("click", sortProductsByRating);
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

function sortProductsByRating() {
  if (clickCountRating % 2 == 0) {
    const sortedProducts = products.sort((a, b) => a.rating - b.rating);
    renderProducts(sortedProducts);
  } else {
    const sortedProducts = products.sort((a, b) => b.rating - a.rating);
    renderProducts(sortedProducts);
  }

  clickCountRating++;
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
    const addToCart = document.createElement("button");
    name.innerHTML = products[i].name;
    price.innerHTML = `price: ${products[i].price}`;
    rating.innerHTML = `rating: ${products[i].rating}`;
    addToCart.innerHTML = `Add to Cart!`;
    list.appendChild(listItem);
    list.appendChild(name);
    list.appendChild(price);
    list.appendChild(rating);
    list.appendChild(addToCart);
  }
}

//renderProducts(products); // This should create the ul and the li's with the individual products details
