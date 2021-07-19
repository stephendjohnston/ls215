"use strict";

// Calculate Depth of Array
// ------------------------

/*
Problem:

Given an array, write a function to calculate it's depth. Assume that a 
normal array has a depth of 1.

Examples:
---------

depth([1, 2, 3, 4]) ➞ 1

depth([1, [2, 3, 4]]) ➞ 2

depth([1, [2, [3, 4]]]) ➞ 3

depth([1, [2, [3, [4]]]]) ➞ 4


PEDAC
-----

Inputs: Array
Outputs: Number

Rules:
- happy path: input will be array of numbers
- if the input is anything other than an array, return 0
- return the number of arrays total. eg. an array with 4 numbers has a depth
of 1
- an array that has an array for an element means that there is another level
of depth eg. [1, [2]] has depth 2

Examples:
depth([1, 2, 3, 4]) ➞ 1
  - single array => depth of 1
depth([1, [2, 3, 4]]) ➞ 2
  - nested array =>depth of 2
depth([1, [2, [3, 4]]]) ➞ 3
  - nested array in nested array => depth of 3
depth([1, [2, [3, [4]]]]) ➞ 4
  - nested array in nested array in nested array in outermost array => depth of 4
depth('String') => 0
  - not an array
depth(undefined) => 0
  - not an array

Mental Model:
Check for valid input. Input must be an array. Create a while loop that 
will loop while there are still nested arrays in the outermost array.
On each loop, use flat() to shallow the nested arrays. Increment a counter
on each loop to keep track of the depth. Return the depth counter.

Algorithm:
- use Array.isArray(array) to check if input is valid, if it is not.
return 0
- create a while loop that has a condition that the input array has a 
nested array as an element, using some method
  - if the condition returns true, increament a depth counter by 1 and
  use flat() on the array
- return the depth counter 
*/

function depth(array) {
  if (!Array.isArray(array)) return 0;

  let depthCount = 1;

  while (array.some(el => Array.isArray(el))) {
    array = array.flat();
    depthCount += 1;
  }

  return depthCount;
}

console.log(depth([1, 2, 3, 4]) === 1)
console.log(depth([1, [2, 3, 4]]) === 2)
console.log(depth([1, [2, [3, 4]]]) === 3)
console.log(depth([1, [2, [3, [4]]]]) === 4)
console.log(depth([1, [2, [3, [4]]], 4]) === 4)
console.log(depth([1, [2], 3, [4], 5, [6]]) === 2)
console.log(depth([1, 2, 3, 4, [[5]], [6], 7]) === 3)