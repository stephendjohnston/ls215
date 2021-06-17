"use strict";

// Sum Square - Square Sum
// -----------------------

/*
Problem:
Write a function that computes the difference between the square of the sum 
of the first n positive integers and the sum of the squares of the first n 
positive integers.

Input: Number
Output: Number

Rules:
- compute the square of the sum of the first n positive integers up to and inlcuding
the input number
- compute the sum of the squares of the first positive integers up to and including
the input number

Example:
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
 => square of the sums - the sum of squares = output

Date Structure:
Array:

Mental Model:
create an array of all the numbers from 1 up to and including the input
number. Get the sum of the array and square it get the squareOfSum. Take
the same numbers and map over the array to square each number. Take this
new array of squared numbers and get the sum to get the sumOfSquares

Algorithm:
- use a for loop to create array of positive integers
  - start from 1 and break loop when the number gets === the input
  - on each iteration, add the current number to an array
- take the array reduce the array to the sum and then square the sum
- take the same numbers and map over each value, squaring each value
  - get the sum of this array of squared values
- subtract the sumOfSquares from the squareOfSums


*/

function sumSquareDifference(number) {
  const numbersArray = [];

  for (let i = 1; i <= number; i += 1) {
    numbersArray.push(i);
  }

  let squareOfSums = getSquareOfSums(numbersArray);
  let sumOfSquares = getSumOfSquares(numbersArray);

  return squareOfSums - sumOfSquares;
}

function getSquareOfSums(numArray) {
  let sumOfNumbers = numArray.reduce((acc, num) => acc + num);
  return sumOfNumbers**2;
}

function getSumOfSquares(numArray) {
  let squaredNumbers = numArray.map(num => num**2);
  return squaredNumbers.reduce((acc, num) => acc + num);
}

// LS Solution: and I thought my answer was good...

function sumSquareDifference(n) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let i = 1; i <= n; i += 1) {
    sum += i;
    sumOfSquares += i ** 2;
  }

  return sum ** 2 - sumOfSquares;
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150