"use strict";

// Infection of the Ones
// ---------------------

/*
Write a function that replaces every row and column that contains at least 
one 1 into a row/column that is filled entirely with 1s.

Examples:
---------

onesInfection([
  [0, 0, 1],
  [0, 0, 0],
  [0, 0, 0]
]) ➞ [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1]
]

onesInfection([
  [1, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]
]) ➞ [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 0]
]

onesInfection([
  [0, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 0, 0]
]) ➞ [
  [1, 1, 1, 1],
  [0, 1, 0, 1],
  [1, 1, 1, 1]
]

Notes:
- You must mutate the original array.
- Input matrices will have at least row and one column.

Bonus: Solve this without using any higher-order functions.


PEDAC
-----

Inputs: Array
- contains arrays
  - arrays contain numbers
  - numbers are either 0 or 1
  - arrays will have same length as other arrays
Outputs: Array
  - will be mutate input array
  - contains arrays
    - arrays will contain numbers
    - either 1 or 0
  
Rules:
- mutate input array
- input array will contain at least one subarray with at least one element
- every row that contains a 1 should have all elements replace with 1's
- every column that contains a 1 should have all elements in that column
replaced with 1's


Examples:
onesInfection([
  [0, 0, 1],
  [0, 0, 0],
  [0, 0, 0]
]) ➞ [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1]
]

// row 1 (array index 0) contains a 1 so all elements in first subarray
// are changed to 1's
// column 3 (subarray index 2) contains a 1, so all elements in index 2 of
// each subarray are changed to 1's

onesInfection([
  [1, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]
]) ➞ [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 0]
]

// row 1 (array index 0) contains ones, so that whole row will be changed
// contain all 1's
// row 2 (array index 1) contains a 1, so this row will be converted to all
// 1's
// Column 1, 2, 3 all contain 1's so the elements at indexes at 0,1,2 of 
// the subarrays will be converted to 1's
// The only element not changed is the element in the last row and last column


onesInfection([
  [0, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 0, 0]
]) ➞ [
  [1, 1, 1, 1],
  [0, 1, 0, 1],
  [1, 1, 1, 1]
]

// Row 1 (array index 0) contains 1's so that whole row will be converted
// to 1's
// Row 3 (array index 2) contains a 1, so whole row converted to 1's
// Columns 2 and 4 (subarray indexes 0 and 3) contain 1's so those columns
// will all be converted to 1's

onesInfection([
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]) ➞ [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

// No 1's, so original array is returned

onesInfection([
  [0, 1],
  [0, 0],
  [0, 0]
]) ➞ [
  [1, 1],
  [0, 1],
  [0, 1]
]

Mental Model:
Create a copy of the input array and it's subarrays. Map over the input array.
Iterate over each subarray. Get an array of column indexes of all the indexes
that contain 1's. If a subarray contains a 1, iterate over that array and
change each element to a 1. If the subarray does not contain a 1, iterate
over the subarray and for every index of that subarray that is included in
the array of column indexes, change that element at that index to a 1.

Data Structure:

Array
  - contains arrays
  - subarrays contain numbers


Algorithm:

Create an empty array that will hold column indexes.
- iterate array input array using forEach
  - on each iteration, iteration over each subarray using forEach
    - on each iteration, if the current element is a 1, push the current
    index to the columns array

forEach over input array
  - array.forEach(subarray)
  If the current subarray includes 1, map over subarray and change each
  element to a 1
    - subarray.map(num => 1)
  if the current subarray does not include a 1, iterate over the subarray using
  map
    - if the the current index is in the columns index, change that element to 
    a 1

*/

function onesInfection(array) {
  const columnIndexes = [];

  array.forEach(subarray => {
    subarray.forEach((num, idx) => {
      if (num === 1) {
        columnIndexes.push(idx);
      }
    });
  });

  array.forEach(subarray => {
    if (subarray.includes(1)) {
      subarray.forEach((num, idx) => {
        subarray[idx] = 1;
      });
    } else {
      subarray.forEach((num, idx) => {
        if (columnIndexes.includes(idx)) {
          subarray[idx] = 1;
        }
      });
    }
  });

  return array;
}


// Input arrays of various types 
const i1 = [
[0, 0, 1], 
[0, 0, 0], 
[0, 0, 0]
]
const i2 = [
[1, 0, 1, 0], 
[0, 1, 0, 0], 
[0, 0, 0, 0]
]

const i3 = [
[0, 1, 0, 1], 
[0, 0, 0, 0], 
[0, 1, 0, 0]
]

const i4 = [
[0, 1, 0, 1, 0], 
[0, 0, 0, 0, 0], 
[0, 1, 1, 1, 0]
]

const i5 = [
[1, 0, 1, 0], 
[0, 0, 0, 0], 
[0, 0, 0, 0]
]

const i6 = [
[0, 0, 0, 1], 
[0, 0, 0, 0], 
[0, 0, 0, 0]
]

const i7 = [
[0, 1, 1], 
[0, 0, 0], 
[1, 0, 0]
]

const i8 = [
[0, 0, 0], 
[0, 0, 0], 
[0, 0, 0]
]
const i9 = [
[0, 0, 0], 
[1, 0, 0]
]
const i10 = [
[0]
]
const i11 = [
[1]
]
const i12 = [
[1, 0]
]

console.log(onesInfection(i1) === i1) //[
// [1, 1, 1], 
// [0, 0, 1], 
// [0, 0, 1]
// ])

console.log(onesInfection(i2) === i2)// === [
// [1, 1, 1, 1], 
// [1, 1, 1, 1], 
// [1, 1, 1, 0]
// ]

console.log(onesInfection(i3))// [
// [1, 1, 1, 1], 
// [0, 1, 0, 1], 
// [1, 1, 1, 1]
// ])

console.log(onesInfection(i4))// [
// [1, 1, 1, 1, 1], 
// [0, 1, 1, 1, 0], 
// [1, 1, 1, 1, 1]
// ])

console.log(onesInfection(i5))// [
// [1, 1, 1, 1], 
// [1, 0, 1, 0], 
// [1, 0, 1, 0]
// ])

console.log(onesInfection(i6))// [
// [1, 1, 1, 1], 
// [0, 0, 0, 1], 
// [0, 0, 0, 1]
// ])

console.log(onesInfection(i7))// [
// [1, 1, 1], 
// [1, 1, 1], 
// [1, 1, 1]
// ])

console.log(onesInfection(i8))// [
// [0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]
// ])

console.log(onesInfection(i9))// [
// [1, 0, 0], 
// [1, 1, 1]
// ])

console.log(onesInfection(i10))// [
// [0]
// ])

console.log(onesInfection(i11))// [
// [1]
// ])

console.log(onesInfection(i12))// [
// [1, 1]
// ])
