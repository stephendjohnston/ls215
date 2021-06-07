"use strict";

/*
Given an number input, find the index at which the first fibonacci number
occurs with that number of digits.

- write function that calculates fibonacci numbers
- on each new fibo number calculated, check if the number of digits
in that number are equal to the input number

Fibonacci Sequence
- initialize firstNum = 1;
- initialize secondNum = 1;
- initialize nextNum;
- create a loop that will break when the fibo number has the same number of
digits === input.
- on each iteration nextNum = firstNum + secondNum;
- check if String(nextNum length) === input
- firstNum = secondNum;
- secondNum = nextNum;
*/

function findFibonacciIndexByLength(num) {
  let firstNum = 1n;
  let secondNum = 1n;
  let nextNum = firstNum + secondNum;
  let index = 2n;

  while (String(nextNum).length < num) {
    nextNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = nextNum;
    index += 1n;
  }

  console.log(index);
  return index;
}

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.