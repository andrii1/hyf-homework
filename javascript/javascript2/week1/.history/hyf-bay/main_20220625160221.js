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
    list.appendChild("li");
    li.products[i];
  }
}

renderProducts(products); // This should create the ul and the li's with the individual products details
