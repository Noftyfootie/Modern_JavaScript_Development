'use strict';

const shoppingCart = [
  { product: 'bread', quantity: 6 },
  { product: 'pizza', quantity: 2 },
  { product: 'milk', quantity: 4 },
  { product: 'water', quantity: 10 },
];

const limits = {
  lisbon: 5,
  others: 7,
};

let description;

const check = function (city) {
  if (!shoppingCart.length) return;

  const allowed = limits[city] ?? limits.others;

  for (const item of shoppingCart) {
    if (item.quantity > allowed) {
      item.quantity = allowed;
    }
  }
};

check('others');

console.log(shoppingCart);

const createDescription = function () {
  if (!shoppingCart.length) return 'Cart is empty';

  const { product, quantity } = shoppingCart[0];

  return shoppingCart.length > 1
    ? `Order with ${quantity} ${product}, etc...`
    : `Order with ${quantity} ${product}.`;
};

description = createDescription();

console.log(description);
