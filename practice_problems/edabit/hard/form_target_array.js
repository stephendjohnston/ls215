"use strict";

// Concatenate to Form Target Array
// --------------------------------

/*
Create a function that returns true if smaller arrays can concatenate to form the 
target array and false otherwise.

Examples:
---------
canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true

canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true

canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// Duplicate 7s not found in target array.

canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// Missing 6 from target array.

Notes:
- Arrays do not have to be sorted (see example #2).
- Arrays should concatenate to create the final array exactly 
(see examples #3 and #4).


PEDAC
-----

Inputs: Array of arrays, and target array
- subarrays will contain numbers
Outputs: Boolean
- true if the subarrays can concatenate to form the target array
- false otherwise

Rules:
- If the subarrays can concatenate to form the target array, return true
  - the concatenated arrays must contain the exact same digits as the target
  array
  - the digits don't have to appear in the saem order
- target array may contain duplicate digits
- the subarrays may be different lengths
- the subarrays will only contain digits
- the main array may contain non-arrays
- if either input is not an array, return false
- if both inputs are empty arrays, or if all of the subarrays are empty and
the target array is empty, return true

Examples:

canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true
-> smaller arrays form target array
canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true
-> smaller arrays form target array even out of order
canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// Duplicate 7s not found in target array.
canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// Missing 6 from target array.
canConcatenate([[2, 1, 3], '5674', [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) -> true
-> ignore elements that are not arrays
canConcatenate(undefined, [1, 2, 3]) -> false
-> input is not an array
canConcatenate([[1,2,3], [4], [5, 6,]], null) -> false
-> target array is not an array
canConcatenate([[], [], []], []) -> true
-> empty array of empty arrays and empty target array
canConcatenate([], []) -> true
-> empty array and empty target array

Mental model:
join the subarrays of the main array and check if the joined array has
exactly the same digits as the target array. 
Iterate over the main array. If a element is not an array, go to next
iteration. If the element is an array, concat the array to a result array.
Sort the joined array and the target array. If they are different lengths,
return false. Iterate over the joined array. On each iteration, if the current
element is equal to the element at the same index of the target array, go to next
iteration, if they are not equal, return false.

Data Structure:
Arrays

Algorithm:
- create a 'result' array
- iterate over the main array using forEach
  - if the current element is not an array, do nothing
  - if the current element is an array, concat result array with current array
- if result array length !== target array length, return false
- iterate over joined array
  - if the current element does not equal the element at the same index
  of the target array, return false
- return true


*/

function validateInput(input1, input2) {
  return !Array.isArray(input1) || !Array.isArray(input2);
}

function canConcatenate(mainArray, target) {
  if (validateInput(mainArray, target)) return false;
  if (mainArray.length === 0 && target.length === 0) return true;
  
  const result = mainArray.reduce((acc, el) => {
    if (Array.isArray(el)) {
      return acc.concat(el);
    }

    return acc;
  });

  if (result.length !== target.length) {
    return false;
  }

  result.sort((a, b) => a - b);
  target.sort((a, b) => a - b);

  for (let i = 0; i < result.length; i += 1) {
    if (result[i] !== target[i]) {
      return false;
    }
  }

  return true;
}

console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) === true)
console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [1, 2, 3, 4, 5, 6, 7]) === true)
console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) === true)
console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) === false)
console.log(canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) === false)
console.log(canConcatenate([[1, 4], [3]], [1, 3, 4]) === true)
console.log(canConcatenate([[1, 4], [3]], [1, 2, 3, 4]) === false)
console.log(canConcatenate([[1, 4], [3]], [4, 3, 1]) === true)
console.log(canConcatenate([[1, 4], [2, 3]], [4, 3, 1, 2]) === true)
console.log(canConcatenate([[1], [2], [3, 4]], [4, 3, 1, 2]) === true)
console.log(canConcatenate([[1], [2], [3], [4]], [4, 3, 1, 2]) === true)
console.log(canConcatenate([[2, 1, 3], '5674', [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) === false)
console.log(canConcatenate(undefined, [1, 2, 3]) === false)
console.log(canConcatenate([[1,2,3], [4], [5, 6,]], null) === false)
console.log(canConcatenate([[], [], []], []) === true)
console.log(canConcatenate([], []) === true)
