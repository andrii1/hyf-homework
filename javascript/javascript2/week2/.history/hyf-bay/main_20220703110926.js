console.log("Script loaded");
const products = getAvailableProducts();
console.log(products);
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", filterProducts);
function filterProducts(event) {
  const filteredProducts = products.filter((product) =>
    product.name.includes(event.target.value)
  );
  renderProducts(filteredProducts);
}

const list = document.querySelector("#list");

function renderProducts(products) {
  // your code here

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
