class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  //currencyconverter
  convertToCurrency(currency) {
    fetch(
      `https://v6.exchangerate-api.com/v6/5b946308252733231c2f83fe/latest/${currency}`
    )
      .then((response) => response.json())
      .then((data) => {
        const conversionRate = data.conversion_rates.DKK;
        return this.price / conversionRate;
      });
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
    // Implement functionality here
  }

  removeProduct(product) {
    // Implement functionality here
    const index = this.products.indexOf(product);
    if (index > -1) {
      // only splice array when item is found
      this.products.splice(index, 1);
    }
  }

  searchProduct(productName) {
    // Implement functionality here
    const result = this.products.filter((product) => {
      return product.name === productName;
    });
  }

  getTotal() {
    // Implement functionality here
    const sum = this.products.reduce((accumulator, object) => {
      return accumulator + object.price;
    }, 0);
    const renderedProducts = document.getElementById("products");
    const p = document.createElement("p");
    p.innerHTML = `Total sum: ${sum}`;
    renderedProducts.appendChild(p);
  }

  renderProducts() {
    // Implement functionality here

    const renderedProducts = document.getElementById("products");
    this.products.forEach((product) => {
      const ul = document.createElement("ul");
      const li = document.createElement("li");
      li.innerHTML = `${product.name} ${product.price}`;
      ul.appendChild(li);
      renderedProducts.appendChild(ul);
    });
  }

  getUser(user) {
    return new Promise((resolve) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
        .then((response) => response.json())
        .then((data) => {
          const renderedProducts = document.getElementById("products");
          const p = document.createElement("p");
          p.innerHTML = data.username;
          renderedProducts.appendChild(p);
        });
    });
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);

shoppingCart.searchProduct("flat-screen");
shoppingCart
  .getUser(1)
  .then(shoppingCart.renderProducts())
  .then(shoppingCart.getTotal());
const plant = new Product("plant", 50);
plant.convertToCurrency("USD");
plant.convertToCurrency("UAH");
plant.convertToCurrency("CHF");
