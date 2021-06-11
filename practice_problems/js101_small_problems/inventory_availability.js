"use strict";

/*
use transactionsFor to return an array of all the object for the item of
interest
  - each item have a movement key that has a value of 'in' of 'out'
    - 'in' means +quantity and 'out' means - quantity
  - each item has a quantity key that has number value
  - we need to get the sum total of quantity for item of interest
  - itemId 101 has three transactions
    - 2 of the transactions have 'in' and a quanitity of 5 and 12
      - this means there are + 17 quantity
    - the 3rd transaction has 'out' and a quantity of 18
      - this means there is - 18 quantity
    - 17 - 18 = -1
    - this item in unavailable

we have an array of each transaction for the specified item
  - use reduce to get the sum total of quantity
  - on each iteration
    - if item.movement === 'in'
      - sum += item.quantity
    - if item.movement === 'out'
      - sum -= item.quantity
  - return sum > 0;
*/

function transactionsFor(itemID, transactions) {
  return transactions.filter(itemObj => itemObj.id === itemID);
}

function isItemAvailable(itemID, transactions) {
  let items = transactionsFor(itemID, transactions);

  let quantity = items.reduce((total, item) => {
    if (item.movement === 'in') return total + item.quantity;
    if (item.movement === 'out') return total - item.quantity;
  }, 0);

  return quantity > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true