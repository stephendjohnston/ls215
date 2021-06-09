"use strict";

function multiplyAllPairs(list1, list2) {
  let result = list1.map(num1 => {
    return list2.map(num2 => num2 * num1);
  }).flat();

  return result.sort((a, b) => a - b);
}

// OR

function multiplyAllPairs(list1, list2) {
  const result = [];

  list1.forEach(number1 => {
    list2.forEach(number2 => {
      result.push(number1 * number2);
    });
  });

  return result.sort((a, b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]