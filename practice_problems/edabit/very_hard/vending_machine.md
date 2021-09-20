# Problem

### Description

Your task is to create a function that simulates a vending machine.

Given an amount of `money` (in cents **¢** to make it simpler) and a `productNumber`, the vending machine should output the correct product name and give back the correct amount of change.

The coins used for the change are the following: `[500, 200, 100, 50, 20, 10]`

The return value is an object with 2 properties:

- `product`: the product name that the user selected.
- `change`: an array of coins (can be empty, must be sorted in descending order).

### Examples

```
vendingMachine(products, 200, 7) ➞ { product: "Crackers", change: [ 50, 20, 10 ] }

vendingMachine(products, 500, 0) ➞ "Enter a valid product number"

vendingMachine(products, 90, 1) ➞ "Not enough money for this product"
```

### Notes

- The products are fixed and you can find them in the **Tests** tab.
- If `productNumber` is invalid (out of range) you should return the *string*: "Enter a valid product number".
- If `money` is not enough to buy a certain product you should return the *string*: "Not enough money for this product".
- If there's no change, return an empty array as the `change`.

---



### Inputs/Outputs

**inputs:** Array, and two Numbers

- The array will be a list of Objects. Each object will have three key/value pairs:
  - number: With a value as Number representing the product number
  - price: With a value as Number represented as cents
  - name: With a value as a String describing the item
- The first Number will be the amount of cents you input into the machine
- The second number will be the product Number



**outputs:** Object or String

- If you input enough money for the product, return an object with two key/value pairs
  - The first pair will be product: "name of product"
  - The second pair will be change: Array of change you should receive for you purchase
    - an empty array if no change is given
- If an invalid product number is given return the string "Enter a valid product number"
- If you do not input enough money return the string "not enough money for this product"

### Rules

- Money will be represented in cents
- The coins used for the change are the following: `[500, 200, 100, 50, 20, 10]`
- Assume that change returned will all be valid numbers from this array
- The return value is an object with 2 properties:
  - `product`: the product name that the user selected.
  - `change`: an array of coins (can be empty, must be sorted in descending order).
- If an invalid product number is given return the string "Enter a valid product number"
- If you do not input enough money return the string "not enough money for this product"



### Examples / Test Cases

```javascript
vendingMachine(products, 200, 7) ➞ { product: "Crackers", change: [ 50, 20, 10 ] }

vendingMachine(products, 500, 0) ➞ "Enter a valid product number"

vendingMachine(products, 90, 1) ➞ "Not enough money for this product"
```



### Data Stuctures

Array

- The products input will be an array of objects
- The property `change` will have an array as a value
- The coins used for the change will represented in an array

Objects

- each product in the array of products will be an object with three key-value pairs
- the return value will be an object with two key-value pairs

String

- A string will be returned in the case of inadequate money input or invalid product Number

Number

- Numbers will be used for the money and the coins (change values)
- Numbers will be used to represent the Product Numbers



### Mental Model

Iterate over the products array and return the object that has a property value that is equal to the input product number. Take the object and get the price value and subtract the price from the money input. Take the result of this and iterate over the coins array. Compare the change with the amount in the coins array. While the change is greater than or equal to the current coin, add that coin amount to change array and subtract the coin value from the change value. Repeat until change is empty or until the end of the array. Return the name property of the item and the change array of values in an object.

### Algorithm

- create an empty array `change` 

- iterate over the array of products
  - on each iteration, check if the current object has `number` value that is equal to the input productNumber
    - if it does, return this object to a variable as `choice` 
    - If not, then this productNumber is invalid and the function should return a string
- get `itemPrice` from the object
- if `itemPrice` is greater than `money` return string
- set `customerChange` to `money` - `itemPrice` 
- Iterate over the `coins` array and on each iteration, check if the `customerChange` is greater than or equal to the current coin
  - if it is create a while loop that will subtract the current coin amount from the `customerChange`
    - Add current coin to `change` array
    - Subtract current coin from `customerChange`
  - Continue until `customerChange` is zero or the end of the array
- return an object with product name and the change array

### Code

```javascript
function vendingMachine(products, money, productNumber) {
  let coins = [500, 200, 100, 50, 20, 10];
  let choice = getProductSelection(products, productNumber);

  if (!choice) return "Enter a valid product number";
  if (choice.price > money) return "Not enough money for this product";

  return { 
    product: choice.name, 
    change: getCustomerChange(coins, money - choice.price)
  }
}

function getProductSelection(products, productNumber) {
  return products.filter(product => product.number === productNumber)[0];
}

function getCustomerChange(coins, change) {
  let changeArr = [];

  coins.forEach(coin => {
    while (change >= coin) {
      changeArr.push(coin);
      change -= coin;
    }
  });

  return changeArr;
}

const products = [
  { number: 1, price: 100, name: 'Orange juice' },
  { number: 2, price: 200, name: 'Soda' },
  { number: 3, price: 150, name: 'Chocolate snack' },
  { number: 4, price: 250, name: 'Cookies' },
  { number: 5, price: 180, name: 'Gummy bears' },
  { number: 6, price: 500, name: 'Condoms' },
  { number: 7, price: 120, name: 'Crackers' },
  { number: 8, price: 220, name: 'Potato chips' },
  { number: 9, price: 80,  name: 'Small snack' },
];

// Tests
console.log(vendingMachine(products, 500, 8))// { product: 'Potato chips', change: [ 200, 50, 20, 10 ] });
console.log(vendingMachine(products, 500, 1))// { product: 'Orange juice', change: [ 200, 200 ] });
console.log(vendingMachine(products, 200, 7))// { product: 'Crackers', change: [ 50, 20, 10 ] });
console.log(vendingMachine(products, 100, 9))// { product: 'Small snack', change: [ 20 ] });
console.log(vendingMachine(products, 1000, 6))// { product: 'Condoms', change: [ 500 ] });
console.log(vendingMachine(products, 250, 4))// { product: 'Cookies', change: [] });
console.log(vendingMachine(products, 500, 0))// 'Enter a valid product number');
console.log(vendingMachine(products, 90, 1))// 'Not enough money for this product');
console.log(vendingMachine(products, 0, 0))// 'Enter a valid product number');
```



