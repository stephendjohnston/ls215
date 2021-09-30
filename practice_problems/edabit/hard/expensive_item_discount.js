"use strict";

// Edabit > Hard > 25% Discount on Most Expensive Item

/*
You want to introduce a discount for your online store. Every customer gets a 25% discount on the most expensive item in the shopping cart. The discount will be calculated on just one item, even if the customer buys more than one of the most expensive item.

Create a function that takes an object and returns the total price after discount.

Examples:

twentyFiveOnOne([
  { name: "Iphone 20x", quantity: 1, price: 1350 },
  { name: "Samsung x30", quantity: 1, price: 1225 },
  { name: "Nokia 9250", quantity: 1, price: 800 },
  { name: "Tesla Model Y", quantity: 1, price: 72999 }
]) ➞ 58124.25

twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 2, price: 5.99 },
  { name: "sweat shirt", quantity: 1, price: 59.99 }
]) ➞ 86.96

Notes:

- The total returned price is calculated upon two decimals.

inputs: Array
- elements are objects with three properties
  - name: String
  - quantity: Number
  - price: Float

outputs: Number
- combined price of all items with a 25% discount on the highest priced item

Rules:
- the total returned price will have two decimal places
- if the input array is empty, return 0
- The discount will be calculated on just one item, even if the customer buys more than one of the most expensive item.
  - if the customer buys 3 of the most expensive item, apply the discount to the price of 1 of the 3 items.

Examples:

console.log(twentyFiveOnOne([
  { name: 'chocolate bar', quantity: 3, price: 1.63 },
  { name: 'chewing gum', quantity: 6, price: 0.25 },
  { name: 'lolly pop', quantity: 1, price: 0.15 }
]))// 6.13)

'chocolate bar' is the most expensive item, so take 1 of them and apply the 25% discount. 1.63 * .25 = 0.4075, so the now there are 2 items with a price of 1.63 and one item at 1.22 for a total of 4.48.


Mental Model:
We need to find the most expensive item in the array of objects. Extract the price and the alter the quantity by subtracting one from the value. Apply the discount to this item and save this new price to a variable. 

Iterate over the array of objects once again and get total price of the items remaining. Add this price with the discounted price to get the final result.

Data Structures:
Array
- input

Number
- the discounted item price
- the total price of all the items

Algorithm:
- create a variable to hold the value of the most expensive item
  - iterate over the array of objects using reduce
    - set the accumulator to 0
    - if the price of the current item is greater than the accumulator, set the accumulator to the price of this item
    - otherwise just return the accumulator
- set the return value to the most expensive item
- iterate over the array of objects using reduce
- set the accumulator to the price of the discounted expensive item
  - on each iteration, if the current price of an item is equal to the most expensive item price, alter the current item quantity by subtracting 1.
  - multiply the price by the quantity for each item and add it to the accumulator
- return this total price with 2 decimal places

*/
const DISCOUNT = 0.25;

function twentyFiveOnOne(cart) {
  let mostExpensive = cart.reduce((acc, item) => {
    return item.price > acc ? item.price : acc;
  }, 0);
  
  let discountedItem = mostExpensive - (mostExpensive * DISCOUNT);
  
  let totalPrice = cart.reduce((acc, item) => {
    if (item.price === mostExpensive) {
      item.quantity -= 1;
    }
    
    return acc + (item.price * item.quantity);
  }, discountedItem);
  
  return parseFloat(totalPrice.toFixed(2));
}

console.log(twentyFiveOnOne([
  { name: 'jogging pants', quantity: 1, price: 29.99 },
  { name: 'tennis socks', quantity: 2, price: 5.99 },
  { name: 'sweat shirt', quantity: 1, price: 59.99 }
]))// 86.96)

console.log(twentyFiveOnOne([
  { name: 'chocolate bar', quantity: 3, price: 1.63 },
  { name: 'chewing gum', quantity: 6, price: 0.25 },
  { name: 'lolly pop', quantity: 1, price: 0.15 }
]))// 6.13)

console.log(twentyFiveOnOne([
  { name: 'chair', quantity: 4, price: 125 },
  { name: 'table', quantity: 1, price: 450 },
  { name: 'couch', quantity: 1, price: 899.95 }
]))// 1624.96)

console.log(twentyFiveOnOne([
  { name: 'bag of potatoes', quantity: 4, price: 3.49 },
  { name: 'can of beans', quantity: 1, price: 1.25 },
  { name: 'cauliflower', quantity: 1, price: 2.64 }
]))// 16.98)

console.log(twentyFiveOnOne([
  { name: 'Iphone 20x', quantity: 1, price: 1350 },
  { name: 'Samsung x30', quantity: 1, price: 1225 },
  { name: 'Nokia 9250', quantity: 1, price: 800 },
  { name: 'Tesla Model Y', quantity: 1, price: 72999 }
]))// 58124.25)

console.log(twentyFiveOnOne([
  { name: 'E-book Surfing Solo', quantity: 1, price: 13.25 }
]))// 9.94)

console.log(twentyFiveOnOne([
  { name: 'Blue Horse Energy Drink', quantity: 12, price: 2.35 }
]))// 27.61)

console.log(twentyFiveOnOne([])) // 0