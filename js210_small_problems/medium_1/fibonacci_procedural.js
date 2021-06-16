"use strict";

function fibonacci(num) {
  if (num <= 2) {
    return 1;
  }

  let firstNum = 1;
  let secondNum = 1;
  let nextNum;

  for (let count = 2; count < num; count += 1) {
    nextNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = nextNum;
  }

  return nextNum;
}

// LS fancy huh

function fibonacci(nth) {
  let previousTwo = [1, 1];

  for (let counter = 3; counter <= nth; counter += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765