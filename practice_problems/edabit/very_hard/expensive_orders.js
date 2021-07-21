"use strict";

// Write a function that has two parameters: orders and cost. 
// Return any orders that are greater than the cost.
// Examples
// expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)
// ➞ { "a": 3000, "c": 1050 }
// expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)
// ➞ { "Gucci Fur": 24600 }

/*
Inputs: objects
Outputs: objects

Rules:
  - if input is invalid, return empty object
  - if input is valid, return properties that have values greater than the 
  input cost
  - if no input cost given, return empty object


Example:

// expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)
// ➞ { "a": 3000, "c": 1050 }
=> ['a', 'b', 'c']
orders['a'] = 3000 > 1000 true
newObject['a'] = orders['a']



Data Structures: 
  - Object
  
Mental Model: 

If cost input is undefined, return empty object. If typeof orders is not
an object, return an empty object.

create an empty object. Create an array of the keys of the input object.
Iterate over the array of keys. Use the keys to get the value of each
property and compare with the cost input. If the value of the property
is greater than the cost input, add that property to the new object.


Algorithm:

- creat empty object
- if typeof orders !== 'object' return empty object
- if cost input is undefined, return empty object
- create an array of keys
  - Object.keys(orders)
- iterate over keys using forEach method
  - if current value is greater than the cost value
    - newObject[key] = order[key]
- return newObject

*/

function validInput(orders, cost) {
  return (typeof orders === 'object' && !Array.isArray(orders) && orders !== null) && typeof cost === 'number';
}

function expensiveOrders(orders, cost) {
  const expensive = {};
  if (!validInput(orders, cost)) {
    return expensive;
  }

   Object.keys(orders).forEach(order => {
    if (orders[order] > cost) {
      expensive[order] = orders[order];
    }
  });

  return expensive;
}

console.log(expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000))
// ➞ { "a": 3000, "c": 1050 }
console.log(expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000))
// ➞ { "Gucci Fur": 24600 }
console.log(expensiveOrders()) // {}
console.log(expensiveOrders({a: 5000, b: 2000}, "hello")) // {}
console.log(expensiveOrders([1, 2, 3], 1000)) // {}
console.log(expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 5000)) // {}
console.log(expensiveOrders(null, 5000)) // {}