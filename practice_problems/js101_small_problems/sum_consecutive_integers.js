"use strict";

function computeSum(targetNumber) {
  let result = 0;

  for (let i = 1; i <= targetNumber; i += 1) {
    result += i;
  }

  return result;
}

function computeProduct(targetNumber) {
  let result = 1;

  for (let i = 1; i <= targetNumber; i += 1) {
    result *= i;
  }

  return result;
}

function invalidInput(targetNumber) {
  return (/[^1-9]/g).test(targetNumber);
}

let rlSync = require('readline-sync');

do {
  console.log('Please enter an integer greater than 0: ');
  var input = parseInt(rlSync.prompt(), 10);
} while (invalidInput(input))

do {
  console.log('Enter "s" to compute the sum, or "p" to compute the product.');
  var choice = rlSync.prompt();
} while (choice !== 's' && choice !== 'p')

let sum;

if (choice === 's') {
  sum = computeSum(input);
  console.log(`The sum of the integers between 1 and ${input} is ${sum}.`);
} else {
  sum = computeProduct(input);
  console.log(`The sum of the integers between 1 and ${input} is ${sum}`);
}