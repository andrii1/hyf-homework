console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);
const list = document.querySelector("list");
const listItem = document.querySelector("li");

function renderProducts(products) {
  // your code here
  for (let i = 0; i < products.length; i++) {
    myNewChildName.innerHTML = products[i].name;
    myNewChildPrice.innerHTML = products[i].price;
    myNewChildRating.innerHTML = products[i].rating;
    list.appendChild("li");
    const newItem = list.createElement("li");
    const myNewChildId = document.createElement("td");
    const myNewChildName = document.createElement("td");
    const myNewChildPrice = document.createElement("td");
    const myNewChildRating = document.createElement("td");
  }
}

renderProducts(products); // This should create the ul and the li's with the individual products details
