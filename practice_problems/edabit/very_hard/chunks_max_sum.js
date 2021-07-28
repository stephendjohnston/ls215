"use strict";

// Dividing into Chunks of Maximum Sum N
// -------------------------------------

/*
Problem:

Write a function that divides an array into chunks such that the sum of each 
chunk is <= n. Start from the left side of the array and move to the right.

Examples:

divide([1, 2, 3, 4, 1, 0, 2, 2], 5)
➞ [[1, 2], [3], [4, 1, 0], [2, 2]]

divide([1, 0, 1, 1, -1, 0, 0], 1)
➞ [[1, 0], [1], [1, -1, 0, 0]]

divide([2, 1, 0, -1, 0, 0, 2, 1, 3], 3)
➞ [[2, 1, 0, -1, 0, 0], [2, 1], [3]]

Notes:
- The max of the array will always be smaller than or equal to n.
- Use the greedy approach when solving the problem (e.g. fit as many 
elements you can into a chunk as long as you satisfy the sum constraint).


PEDAC
-----

Inputs: Array and Number
  - contains numbers
  - pos and neg
  - Number is a sum constraint
Outputs: Array of arrays
  - each nested array contains numbers that are less than or equal to sum 
  constraint

Rules:
  - given n as the sum constraint, add numbers to a nested array so that the
  sum of their values do not exceed the sum constraint. 
    - sum can be less than or equal to sum constraint
  - fit as many elements into a chunk as long as it does not exceed the sum
  constraint
    - go in order of the elements of the array to add in to nested array
    - do not traverse array looking for elements to fit in the first array
    - take the elements as they come
  - all inputs will be valid arrays of number
  - no floating points
  - may contain negative numbers
  - all numbers in array will be less than or equal to sum constraint

Examples:

divide([1, 2, 3, 4, 1, 0, 2, 2], 5)
➞ [[1, 2], [3], [4, 1, 0], [2, 2]]
-> 1 + 2 + 3 = 6 > 5, so 1 and 2 are added to first nested array
-> 3 + 4 = 7 > 5, so 3 is added to next nested array
-> 4 + 1 + 0 + 2 = 7 > 5, so 4, 1, 0 are added to third array
-> 2 + 2 < 5 and last elements, added to last nested array


Mental Model:

create a result array.
create a sub array and add the first element of the input array
Create a sum variable and set it to 0.
Iterate over the input array using forEach. On each iteration, if the
sum of the subarray plus the current value is less than the sum constraint,
add the current value to the subarray. If the sum is more than the sum
constraint, push the subarray to the result. set the subarray to empty array
push the current value to the now empty array.

Algorithm:
- create result array []
- create subarray []
- add first element of input to subarray
  - subarray.push(input.unshift())
- iterate over input array using forEach
  - if sum of subarray plus the current element is less than the
  sum constraint
    - push that element to the subarray
  - if the sum of the subarray plus the current element is greater
  than the sum constraint
    - push that subarray to result array
    - set subarray to []
    - push current element to subarray
return result array

*/


function divide(array, maxSum) {
  const result = [];
  let subarray = [];
  
  array.forEach(num => {
    if (subArraySum(subarray) + num <= maxSum) {
      subarray.push(num);
    } else {
      result.push(subarray);
      subarray = [];
      subarray.push(num);
    }
  });

  result.push(subarray);
  return result;
}

function subArraySum(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5))// [[1, 2], [3], [4, 1, 0], [2, 2]])
console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 4))// [[1, 2], [3], [4], [1, 0, 2], [2]])
console.log(divide([1, 3, 2, -1, 2, 1, 1, 3, 1], 3))// [[1], [3], [2, -1, 2], [1, 1], [3], [1]])
console.log(divide([1, 2, 2, -1, 2, 0, 1, 0, 1], 2))// [[1], [2], [2, -1], [2, 0], [1, 0, 1]])
console.log(divide([1, 2, 2, -1, 2, 0, 1, 0, 1], 3))// [[1, 2], [2, -1, 2, 0], [1, 0, 1]])
console.log(divide([1, 2, 2, -1, 2, 0, 1, 0, 1], 5))// [[1, 2, 2, -1], [2, 0, 1, 0, 1]])
console.log(divide([2, 1, 0, -1, 0, 0, 2, 1, 3], 3))// [[2, 1, 0, -1, 0, 0], [2, 1], [3]])
console.log(divide([2, 1, 0, -1, 0, 0, 2, 1, 3], 4))// [[2, 1, 0, -1, 0, 0, 2], [1, 3]])
console.log(divide([1, 0, 1, 1, -1, 0, 0], 1))// [[1, 0], [1], [1, -1, 0, 0]])
console.log(divide([1, 0, 1, 1, -1, 0, 0], 2))// [[1, 0, 1], [1, -1, 0, 0]])
console.log(divide([1, 0, 1, 1, -1, 0, 0], 3))// [[1, 0, 1, 1, -1, 0, 0]])
