"use strict";

// Bingo Check
// -----------

/*
Problem:

Create a function that takes a 5x5 3D array and returns true if it has at 
least one Bingo, and false if it doesn't.

Examples:
---------

bingoCheck([
  [45, "x", 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, 39, 44],
  [21, "x", 24, 30, 52]
]) ➞ true

bingoCheck([
  ["x", 43, 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, 65, "x", 83, 54],
  [67, 98, 39, "x", 44],
  [21, 59, 24, 30, "x"]
]) ➞ true

bingoCheck([
  ["x", "x", "x", "x", "x"],
  [64, 12, 47, 32, 90],
  [37, 16, 68, 83, 54],
  [67, 19, 98, 39, 44],
  [21, 75, 24, 30, 52]
]) ➞ true

bingoCheck([
  [45, "x", 31, 74, 87],
  [64, 78, 47, "x", 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, "x", 44],
  [21, "x", 24, 30, 52]
]) ➞ false

Notes:
- Only check for diagnols, horizontals and verticals.


PEDAC
-----

Inputs: Array of arrays (bingo board)
- each subarray will have 5 elements
  - the elements will be numbers or 'x'
Output: Boolean

Rules:
- valid bingos:
  - horizontal: a subarray contains all 'x'
  - vertical: in each subarray there is an 'x' at the same index
    - 3,3,3,3,3
  - diagonal: in each subarray there is an 'x' at a different index
    - 1,2,3,4,5
- false otherwise

Examples:

bingoCheck([
  [45, "x", 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, 39, 44],
  [21, "x", 24, 30, 52]
]) ➞ true

-> Vertical: 'x' at the same index in each subarray (index 1)

bingoCheck([
  ["x", 43, 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, 65, "x", 83, 54],
  [67, 98, 39, "x", 44],
  [21, 59, 24, 30, "x"]
]) ➞ true

-> Diagonal: indexes [0, 1, 2, 3, 4] => all different

bingoCheck([
  ["x", "x", "x", "x", "x"],
  [64, 12, 47, 32, 90],
  [37, 16, 68, 83, 54],
  [67, 19, 98, 39, 44],
  [21, 75, 24, 30, 52]
]) ➞ true

-> Horizontal: All the elements in subarray (index 0) 1 are 'x'

bingoCheck([
  [45, "x", 31, 74, 87],
  [64, 78, 47, "x", 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, "x", 44],
  [21, "x", 24, 30, 52]
]) ➞ false

-> Does not satisfy any bingo conditions

Mental Model:

Create an empty array to hold the indexes of 'x'. Iterate over the input
array using for loop. On each iteration, check if every element in the
subarray === 'x', return true if it does. Get the index of the 'x' in the
subarray. Add that index to the index array. Continue same pattern for all
subarrays.
If every number in the index array is the same, return true. If every
number in the index array is differnt, return true. Return false otherwise.


Algorithm:
- create empty 'indexArray'
- use for loop to iterate over input array
  - on each loop if every element is 'x' return true
  - get indexOf('x') and add index to index array
- use filter and indexOf to get only unique values. 
  - if the length of the returned array is 1, then return true
  because this means that all the indexes were the same
  - if the length of the return array is 5, return true because
  this means that all the indexes were different
*/

function bingoCheck(bingoCard) {
  const xIndexes = [];

  for (let i = 0; i < bingoCard.length; i += 1) {
    let currentRow = bingoCard[i];

    if (currentRow.every(el => el === 'x')) {
      return true;
    }

    xIndexes.push(currentRow.indexOf('x'));
  }

  if (xIndexes.some(el => el === -1)) return false;
  let xIndexesLength = xIndexes.filter((el, idx) => xIndexes.indexOf(el) === idx).length;

  if (xIndexesLength === 1 || xIndexesLength === 5) {
    return true; 
  }

  return false;
}

console.log(bingoCheck([
  [45, "x", 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, 39, 44],
  [21, "x", 24, 30, 52]
]))// true

console.log(bingoCheck([
  ["x", 43, 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, 65, "x", 83, 54],
  [67, 98, 39, "x", 44],
  [21, 59, 24, 30, "x"]
]))// true

console.log(bingoCheck([
  [37, 16, 84, 51, 33],
  [64, 12, 47, 32, 90],
  ["x", "x", "x", "x", "x"],
  [67, 19, 98, 39, 44],
  [21, 75, 24, 30, 52]
]))// true

console.log(bingoCheck([
  [45, "x", 31, 74, 87],
  [64, 78, "x", "x", 90],
  [37, "x", 68, "x", 54],
  [67, "x", 98, "x", "x"],
  [21, "x", 24, 30, 52]
]))// false

console.log(bingoCheck([
  [45, 46, 31, 74, "x"],
  [64, 78, 80, "x", 90],
  [37, 81, "x", 55, 54],
  [67, "x", 98, 34, 77],
  ["x", 33, 24, 30, 52]
]))// true

console.log(bingoCheck([
  [45, 46, 31, 74, "x"],
  [64, 78, 80, "x", 90],
  [37, 81, 45, 55, 54],
  [67, "x", 98, 34, 77],
  ["x", 33, 24, 30, 52]
]))// false