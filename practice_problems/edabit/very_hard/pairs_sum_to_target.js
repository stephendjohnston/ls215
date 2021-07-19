"use strict";

// All Pairs that Sum to Target
// ----------------------------

/*
Problem:
--------

Create a function that returns all pairs of numbers in an array that sum to 
a target. Sort the pairs in ascending order with respect to the smaller 
number, then order each pair in this order: [smaller, larger].

Examples:
---------

allPairs([2, 4, 5, 3], 7) ➞ [[2, 5], [3, 4]]
// 2 + 5 = 7, 3 + 4 = 7

allPairs([5, 3, 9, 2, 1], 3) ➞ [[1, 2]]

allPairs([4, 5, 1, 3, 6, 8], 9) ➞ [[1, 8], [3, 6], [4, 5]]
// Sorted: 1 < 3 < 4; each pair is ordered [smaller, larger]

Notes:
------

- If no pairs are found, return an empty array [].
- You are only allowed to use each number once in a pair.

PEDAC
-----

Inputs: Array of numbers
Outputs: Array of Arrays of numbers
  - each sub array will contain pairs of values
  - sub-arrays will be sorted in ascending order

Rules:
- if no pairs are found, return empty array
- you are only allowed to use each number once
- the return array will be sorted in ascending order based on
the first value of each sub array
- assume you cannot mutate original array

Example:

allPairs([4, 5, 1, 3, 6, 8], 9) ➞ [[1, 8], [3, 6], [4, 5]]
- target = 9
  - 4 + 5 = 9 => [4, 5]
  - 1 + 8 = 9 => [1 + 8]
  - 3 + 6 = 9 => [3 + 6]
=> [[1, 8], [3 + 6], [4, 5]]

Mental Model:

initialize an empty array. Create a copy of the input array. Sort the array
in ascending order. Iterate over the array. Check the first value with all other values
in the array. If the first value plus another value === target value, then
push an array with those 2 values into the empty array. Then check the second
value against all other values and so on. Return the result array

Algorithm:

- initialize empty array
- create copy of array with slice
- sort the array in ascending order
- create a loop that will iterate up the input array length
  - let currentVal = the value at the index of this loop of the input array
    - eg. currentVal = array[0]
  - create an inner loop that will start at the outer loop index and iterate
  up to the input array length
    - if the current val + other val === target
      - push [currentval, otherval]
- return result array
*/

function allPairs(numbers, target) {
  const pairs = [];
  let numbersCopy = numbers.slice();
  numbersCopy.sort((a, b) => a - b);

  numbersCopy.forEach((currentVal, idx) => {
    for (let i = idx + 1; i < numbersCopy.length; i += 1) {
      let otherVal = numbersCopy[i];
      if (currentVal + otherVal === target) {
        pairs.push([currentVal, otherVal]);
      }
    }
  })

  return pairs;
}

console.log((allPairs([2, 4, 5, 3], 7))) // [[2, 5], [3, 4]])
console.log((allPairs([5, 3, 9, 2, 1], 3))) // [[1, 2]])
console.log((allPairs([4, 5, 1, 3, 6, 8], 9))) // [[1, 8], [3, 6], [4, 5]])
console.log((allPairs([5, 2], 14))) // [])
console.log((allPairs([5, 5, 2], 14))) // [])
console.log((allPairs([8, 7, 7, 2, 4, 6], 14))) // [[6, 8], [7, 7]])
console.log((allPairs([8, 7, 2, 4, 6], 14))) // [[6, 8]])
console.log((allPairs([1, 3, 5, 4, 0], 4))) // [[0, 4], [1, 3]])
console.log((allPairs([1, 3, 5, 4, 0, 2], 4))) // [[0, 4], [1, 3]])
console.log((allPairs([1, 3, 5, 4, 0, 2, 2], 4))) // [[0, 4], [1, 3], [2, 2]])