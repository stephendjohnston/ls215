"use strict";

// Advanced Array Sort
// -------------------

/*
Problem:
--------

Create a function that takes in an array of numbers or strings and returns 
an array with the items from the original array stored in subarrays. Items 
of the same value should be in the same subarray.

Examples
--------

advancedSort([2, 1, 2, 1]) ➞ [[2, 2], [1, 1]]

advancedSort([5, 4, 5, 5, 4, 3]) ➞ [[5, 5, 5], [4, 4], [3]]

advancedSort(["b", "a", "b", "a", "c"]) ➞ [["b", "b"], ["a", "a"], ["c"]]

Notes:
------
The subarrays should be returned in the order of each element's first 
appearance in the given array.

PEDAC
-----

Inputs: Array
  - may contain numbers AND strings
Outputs: Array of arrays
  - each nested array will contain elements of the same value

Rules:
- Items of the same value should be in the same subarray
- subarrays should be returned in the order of each element's first 
appearance in the given array.
- input arrays may contain digits and strings

Example:
advancedSort([5, 4, 5, 5, 4, 3]) ➞ [[5, 5, 5], [4, 4], [3]]
- 5 appears first so iterate over the array and splice all 5's and add them
to an array. after iteration, add that array to main array
- after removing all of the 5's, 4 will be at the beginning of the array
- repeat the same process as for the 5's

Mental Model:

Iterate over the array, take the first element of the array and push it to
an array. Take all other values that are equal to the first value and add them
to the array. Delete each value as you add it. Push this array into a main array.
Repeat the process with all other values.

Algorithm:
- Initialize a mainArray to empty
- create a while loop that will continue to loop while the input array length
> 0
  - get the length of the input array
  - initialize an subArray
  - set compareValue to the first value of the input array and then remove it
  - create a for loop that will loop the number of times equal to the input
  array. (this will change as we remove values)
    - on each loop compare the compareValue with the current value from the input
      - if they are equal, delete the value and add it to the subArray
      - if they are not equal, continue to next iteration
  - at the end of the for loop, push the subarray into the mainArray
- return the mainArray

*/

function advancedSort(array) {
  const mainArray = [];

  while (array.length > 0) {
    let subArray = [];
    let compareValue = array[0];

    for (let i = 0; i < array.length; i += 1) {
      if (compareValue === array[i]) {
        subArray.push(array[i]);
      }
    }
    
    array = array.filter(val => val !== compareValue);
    mainArray.push(subArray);
  }

  return mainArray;
}

console.log(advancedSort([1,2,1,2]))                  // [[1,1],[2,2]])
console.log(advancedSort([2,1,2,1]))                  // [[2,2],[1,1]])
console.log(advancedSort([3,2,1,3,2,1]))              // [[3,3],[2,2],[1,1]])
console.log(advancedSort([5,5,4,3,4,4]))              // [[5,5],[4,4,4],[3]])
console.log(advancedSort([80,80,4,60,60,3]))          // [[80,80],[4],[60,60],[3]])
console.log(advancedSort(['c','c','b','c','b',1,1]))  // [['c','c','c'],['b','b'],[1,1]])
console.log(advancedSort([1234, 1235, 1234, 1235, 1236, 1235])) //[[1234, 1234],[1235, 1235, 1235],[1236]])
console.log(advancedSort(['1234', '1235', '1234', '1235', '1236', '1235'])) // [['1234', '1234'],['1235', '1235', '1235'],['1236']])