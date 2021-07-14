"use strict";

function countRepetitions(array) {
  const count = {};

  array.forEach(element => {
    count[element] = (count[element] || 0) + 1;
  });

  let keyValuePairs = [];

  for (const key in count) {
    keyValuePairs.push([key, count[key]]);
  }

  let sortedKeyValues = keyValuePairs.sort((a, b) => b[1] - a[1]);

  let result = {};

  sortedKeyValues.forEach(arr => {
    result[arr[0]] = arr[1];
  });

  return result
}

console.log(countRepetitions(["cat", "dog", "cat", "cow", "cow", "cow"])) // { cow: 3, cat: 2, dog: 1 }
console.log(countRepetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0])) // { 0: 6, 5: 3, 12: 2, 1: 1 }
console.log(countRepetitions([Infinity, null, Infinity, "😀", null, null])) // { null: 3, Infinity: 2, "😀": 1 }