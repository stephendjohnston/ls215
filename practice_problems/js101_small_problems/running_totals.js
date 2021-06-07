"use strict";

function runningTotal(numbers) {
  let total = 0;
  let result = [];

  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
    result.push(total);
  }

  return result;
}

// Using map

function runningTotal(numbers) {
  let total = 0;
  return numbers.map(num => total += num);
}

// Using reduce

function runningTotal(numbers) {
  let total = 0;
  return numbers.reduce((acc, val) => {
    return acc.concat(total += val);
  }, []);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []