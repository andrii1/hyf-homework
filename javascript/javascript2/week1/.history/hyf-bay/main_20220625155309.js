console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);
const list = document.createElement("ul");

function renderProducts(products) {
  // your code here
  for (let i = 0; i < products.length; i++) {
    products[i];
  }
}

renderProducts(products); // This should create the ul and the li's with the individual products details
