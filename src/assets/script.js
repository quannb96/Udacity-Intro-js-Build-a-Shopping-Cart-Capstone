/* start original Udacity project here: */

/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
/* <<< end original Udacity project */

/* start my code here: */
const products = [
/* <<< end my code */

/* start original Udacity project here: */
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/
/* <<< end original Udacity project */

/* start my code here: */

  {
    name: "Carton of Cherries",
    price: 4,
    quantity: 0,
    productId: 0,
    image: "../images/cherry.jpg",
  },

  {
    name: "Carton of Strawberries",
    price: 5,
    quantity: 0,
    productId: 1,
    image: "../images/strawberry.jpg",
  },

  {
    name: "Carton of Oranges",
    price: 10,
    quantity: 0,
    productId: 2,
    image: "../images/orange.jpg",
  },
];
/* <<< end my code */

/* start original Udacity project here: */
/* Declare an empty array named cart to hold the items in the cart */
/* <<< end original Udacity project */

/* start my code here: */
const cart = [];

// common function: find index of product in array based on the productId
const findProductIndex = (products, productId) => {
  return products.findIndex((product) => product.productId === productId);
};
/* <<< end my code */

/* start original Udacity project here: */
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/ /* <<< end original Udacity project */

/* start my code here: */

const addProductToCart = (productId) => {
  // Find the product based on the productId, in the products array
  const productIndex = findProductIndex(products, productId);

  // If the product is not found, do nothing
  if (productIndex === -1) {
    return;
  }

  // Increase the quantity of the product in the cart
  products[productIndex].quantity += 1;

  // Find the product based on the productId, in the cart
  const cartProductIndex = findProductIndex(cart, productId);

  // If the product is not in the cart, add it to the cart
  if (cartProductIndex === -1) {
    cart.push(products[productIndex]);
  }
};
/* <<< end my code */

/* start original Udacity project here: */
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
/* <<< end original Udacity project */

/* start my code here: */
const increaseQuantity = (productId) => {
  // Find the product based on the productId, in the products array
  const productIndex = findProductIndex(products, productId);

  // If the product is found, increase its quantity by one
  if (productIndex !== -1) {
    products[productIndex].quantity += 1;
  }
};
/* <<< end my code */

/* start original Udacity project here: */
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
/* <<< end original Udacity project */

/* start my code here: */
const decreaseQuantity = (productId) => {
  // Find the product based on the productId, in the products array
  const productIndex = findProductIndex(products, productId);
  // If the product is found in the cart, decrease the quantity of the product
  if (productIndex !== -1) {
    products[productIndex].quantity -= 1;
  }
  // If the quantity becomes 0, remove the product from the cart
  if (products[productIndex].quantity === 0) {
    removeProductFromCart(productId);
  }
};
/* <<< end my code */

/* start original Udacity project here: */
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
/* <<< end original Udacity project */

/* start my code here: */
const removeProductFromCart = (productId) => {
  // Find the product based on the productId, in the cart
  const productIndex = findProductIndex(cart, productId);

  if (productIndex !== -1) {
    cart[productIndex].quantity = 0;
    cart.splice(productIndex, 1);
  }
};
/* <<< end my code */

/* start original Udacity project here: */
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
/* <<< end original Udacity project */

/* start my code here: */
const cartTotal = () => {
  // Using forEach lop for the cart and calculate total price
  let totalPrice = 0;

  cart.forEach((product) => {
    totalPrice += product.quantity * product.price;
  });

  return totalPrice;
};
/* <<< end my code */

/* start original Udacity project here: */
/* Create a function called emptyCart that empties the products from the cart */
/* <<< end original Udacity project */
/* start my code here: */
const emptyCart = () => {
  cart = [];
};
/* <<< end my code */

/* start original Udacity project here: */
/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
/* <<< end original Udacity project */

/* start my code here: */
let totalPaid = 0;

const pay = (amount) => {
  totalPaid += amount;
  remain = totalPaid - cartTotal();
  if (remain >= 0) {
    totalPaid = 0;
  }
  return remain;
};
/* <<< end my code */

/* start original Udacity project here: */
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};
/* <<< end original Udacity project */
