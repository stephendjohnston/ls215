"use strict";

// Two Sum

/*
Write a function that takes an array of numbers (integers for the tests) and 
a target number. It should find two different items in the array that, when 
added together, give the target value. The indices of these items should 
then be returned in a tuple like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any 
valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or 
greater, and all of the items will be numbers; target will always be the 
sum of two different items from that array).

twoSum [1, 2, 3] 4 === (0, 2)


inputs: Array and Number
- input will always be valid
- Array length >= 2
- all elements will be numbers
- the target will always be the sum of two different elements from array

outputs: Array
- contains the indexes of the numbers that sum to equal the target


Rules:
- inputs will always be valid
- there will always be two numbers that sum to equal the target
- 
*/

function numericalCompare(a, b) {
  return a - b;
}

function twoSum(numbers, target) {
  let indexes = [];

  for (let i = 0; i < numbers.length; i += 1) {
    let firstNum = numbers[i];
    for (let j = i + 1; j < numbers.length; j += 1) {
      let secondNum = numbers[j];
      if (firstNum + secondNum === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([1,2,3], 4).sort(numericalCompare))// [0,2])
console.log(twoSum([1234,5678,9012], 14690).sort(numericalCompare))// [1,2])
console.log(twoSum([2,2,3], 4).sort(numericalCompare))// [0,1]