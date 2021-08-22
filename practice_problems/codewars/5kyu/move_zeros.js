"use strict";

// Move Zeros to the End
// ---------------------

/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


PEDAC
-----

Inputs: Array
- elements may be of any type
outputs: Array
- same elements in same order as input except that any zeros in the array
are moved to the end of the array

Rules:
- Move all zeros in the input array to the end of the array
- if there are no zeros, return the same array
- if there are no elements, return an empty array
- preserve the order of all other elements that are not zero
- zeros are all Number zeros
  - string "0" does not count as zero

Examples:

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
-> zero at index 2 and index 5 are moved to the end of the array while
all other elements stay in same order

Mental Model:

Filter over input array and select any element that is 0. Filter
over array a second time and get every element that is not 0. Now we have two
arrays, one with 0's and one with every other element. concat the array
with other elements with the array of zeros.
*/

function moveZeros(array) {
  let zeros = array.filter(el => el === 0);
  let nonZeros = array.filter(el => el !== 0);

  return nonZeros.concat(zeros);
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]
