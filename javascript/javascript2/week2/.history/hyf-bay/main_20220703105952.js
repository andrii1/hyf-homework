console.log("Script loaded");
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", renderProducts);

const products = getAvailableProducts();
console.log(products);
const list = document.querySelector("#list");

function renderProducts(products) {
  // your code here
  const searchedProducts = products.map(
    (product, event) => product.name === event.target.value
  );
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

renderProducts(products); // This should create the ul and the li's with the individual products details
