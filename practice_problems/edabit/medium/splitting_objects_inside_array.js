"use strict";

function splitBunches(bunches) {
  let result = [];

  bunches.forEach(bunch => {
    let max = bunch.quantity
    for (let i = 0; i < max; i += 1) {
      bunch.quantity = 1;
      result.push(bunch);
    }
  });

  return result;
}

console.log(splitBunches([{ name: 'bananas', quantity: 1 }]))// [{ name: 'bananas', quantity: 1 }])
console.log(splitBunches([{ name: 'bananas', quantity: 2 }]))// [{ name: 'bananas', quantity: 1 }, { name: 'bananas', quantity: 1 }])
console.log(splitBunches([{ name: 'bananas', quantity: 2 }, { name: 'grapes', quantity: 2 }]))
// // [{ name: 'bananas', quantity: 1 }, { name: 'bananas', quantity: 1 }, { name: 'grapes', quantity: 1 }, { name: 'grapes', quantity: 1 }])
console.log(splitBunches([{ name: 'cherry tomatoes', quantity: 3}, { name: 'bananas', quantity: 1 }, { name: 'grapes', quantity: 2 }, { name: 'cherry tomatoes', quantity: 3}]))
// // [{ name: 'cherry tomatoes', quantity: 1}, { name: 'cherry tomatoes', quantity: 1}, { name: 'cherry tomatoes', quantity: 1}, { name: 'bananas', quantity: 1 }, { name: 'grapes', quantity: 1 }, { name: 'grapes', quantity: 1 }, { name: 'cherry tomatoes', quantity: 1}, { name: 'cherry tomatoes', quantity: 1}, { name: 'cherry tomatoes', quantity: 1}])