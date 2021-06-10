"use strict";

function sumOfSums(numbers) {
  return numbers.reverse().reduce((sum, num, idx) => {
    return sum + (num * (idx + 1));
  }, 0);
}

// OR

function sumOfSums(numbers) {
  let sum = 0;
  let runningTotal = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    runningTotal += numbers[i];
    sum += runningTotal;
  }

  return sum;
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35