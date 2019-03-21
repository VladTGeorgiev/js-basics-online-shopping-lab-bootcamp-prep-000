var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  // The price of each item should be a randomly-generated integer between 1 and 100.
  var itemPrice = function randomPrice(min, max) {
    return Math.random() * (max - min) + min;
  }

  var itemName = function randomName (itemName) {
    return {
      itemName: itemName,
      itemPrice: randomPrice(1, 100)
    }
  }

  // The object should consist of two key-value pairs : { itemName: name of the item, itemPrice: price of the item, }
  var item = {itemName: itemName, itemPrice: itemPrice}

  /* As more items are added, the cart should start to look something like this: [ { itemName:"bananas", itemPrice: 17 },
  { itemName:"pancake batter",itemPrice: 5 }, { itemName:"eggs", itemPrice: 49 }]*/
  var arr = []
  for (var i = 0; i < arr.length; i++) {
   arr.push(`${itemName}: ${price}`)
  }

  // Upon the successful addition of a new item to the cart, the function should return <itemName> has been added to your cart.
  getCart().push(item)
  return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
