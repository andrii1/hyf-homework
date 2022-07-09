console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);
const list = document.querySelector("list");

function renderProducts(products) {
  // your code here
  for (let i = 0; i < products.length; i++) {
    myNewChildName.innerHTML = products[i].name;
    myNewChildPrice.innerHTML = products[i].price;
    myNewChildRating.innerHTML = products[i].rating;

    const listItem = document.createElement("li");
    const name = document.createElement("h2");
    const price = document.createElement("p");
    const rating = document.createElement("p");
    list.appendChild(listItem);
  }
}

renderProducts(products); // This should create the ul and the li's with the individual products details
