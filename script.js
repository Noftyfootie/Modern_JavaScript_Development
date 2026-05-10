// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log('Importing module');
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');

import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

// import add, { addToCart, totalPrice as price, tq } from './ShoppingCart.js';
// add('Pizza', 2);
// console.log(price);
// import add, { cart } from './ShoppingCart.js';
// add('Pizza', 2);
// add('Bread', 5);
// add('Apples', 8);
// add('Bannana', 6);

// console.log(cart);

// Top-await level (ES2022)
/*
console.log('start fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
console.log('Something');


const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`,
    );
  };

  const orderStockt = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to supplier (shipping cost is ${shippingCost})`,
    );
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('Apple', 4);
ShoppingCart2.addToCart('Pizza', 8);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shoppingCost);

/*
// CommonJS module
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`,
    );
  };

  const { addToCart } = require('./shoppingCart.js');
  */
