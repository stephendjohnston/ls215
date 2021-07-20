"use strict";

// Identical Row and Column
// ------------------------

/*
Problem:
--------

Write a function that returns true if there exists a row that is identical 
to a column in a 2-D matrix, otherwise false.

To illustrate:

[
  [1, 2, 3, 4],
  [2, 4, 9, 8],
  [5, 9, 7, 7],
  [6, 8, 1, 0]
]

// 2nd row + 2nd column are identical: [2, 4, 9, 8]

Examples:
---------

hasIdentical([
  [4, 4, 4, 4],
  [2, 4, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
]) ➞ true

hasIdentical([
  [4, 4, 9, 4],
  [2, 1, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
]) ➞ false

hasIdentical([
  [4, 4]
  [2, 1]
]) ➞ false

hasIdentical([
  [4, 2]
  [2, 1]
]) ➞ true

Notes:
------
- Non-square matrices should return false.


PEDAC
-----

Inputs: Array of arrays
  - elements of nested arrays will be numbers
Outputs: Boolean
  - true if identical row and column found
  - false otherwise

Rules:
- Non-square matrices should return false
- a square matrice has and equal number of nested arrays equal the length
of the nested arrays
  - eg. 3 nested arrays all with a length of 3 => valid
  - 3 nested arrays all with a lengt of 4 => invalid
- return true if there is a nested array that has the same elements in the
same order as the elements at the same index of the different nested arrays.
  - eg. index 0 of all the nested arrays has the same elements in the same
  order as the nested array at index 3 of the main array


Examples:
hasIdentical([
  [4, 4, 4, 4],
  [2, 4, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
]) ➞ true

- is square => 4 nested arrays all with length of 4
- inputarr at index 0 = [4, 4, 4 ,4]
- column 1 at each index => 4 => [4, 4, 4, 4]
- both have the same elements and since they are all the same value, the
order is not relevant in this case

hasIdentical([
  [4, 4, 9, 4],
  [2, 1, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
]) ➞ false

- is square
- no identical match

hasIdentical([
  [1, 3, 9],
  [4, 5, 6, 2],
  [3, 4, 2],
]) => false

- is not square

hasIdentical([
  [4, 2, 4, 6, 1], 
  [2, 4, 9, 4, 5], 
  [5, 1, 7, 1, 9], 
  [6, 4, 1, 0, 33], 
  [5, 5, 5, 33, 5]
  ]) => true

- is square => 5 nested arrays all with length 5
- nested array at index 3 => [6, 4, 1, 0, 33]
- index 3 of each nested array is => [6, 4, 1, 0, 33]
  - same elements in same order

Mental Model:
Determine if the matrice is square. Get the length of the input array, the
number of nested arrays. Iterate over input array and compare the length
of the input array with length of each nested array. If they are all
the same, continue, otherwise return false.
Create an array of arrays where each nested array will represent the columns
of the input nested arrays. Index 0 of each nested array will be the first
array of column values, index 1 then second and so on. 
Create an array of arrays with same number of nested arrays as the input array.
Create a loop that will loop the number of times equal to the input array
length. Iterate over the input array. get the array at the current index of
the inner loop, and the value at the index of the outer loop. push these
values to the a nested array in the result array at the same index of
the inner loop. 
Determine if there are identical arrays. Check each nested array of the input
array against each nested array of the columns that was just created.

Algorithm:
- check if input is square
  - get length of input array
  - iterate over input array and check if each nested array equals length
  of array
  - return false if not square
- Create an array of arrays equal to the length of the input array
  - loop equal to the length of the input array
  - on each loop, push in an array into a main array : columns
- Build the array of columns by iterating over the input array
  - inputArr.forEach((row, col) =>)
    - iterate over the inputarray again
    - inputArr.forEach((arr, idx))
      - columns[idx].push(arr[col])
- iterate over the input array and compare each input array with each
columns array
  - iterate over columns array and check if current array has the same
  elements in the same order as the input nested array
    - iterate over current column array
      - if current num of column array !== current num of input array
        - continue
      - return true if all nums match


*/

function isSquare(array, size) {
  return size === array.filter(subArr => subArr.length === size).length;
}

function createArrays(size) {
  let array = [];

  for (let i = 0; i < size; i += 1) {
    array.push([]);
  }

  return array;
}

function populateColumnsArray(input, columns) {
  input.forEach((_, col) => {
    input.forEach((subArr, idx) => {
      columns[col].push(subArr[col]);
    });
  });
}

function arraysAreEqual(row, column) {
  for (let i = 0; i < row.length; i += 1) {
    if (row[i] !== column[i]) return false;
  }

  return true;
}

function hasIdentical(array) {
  const arrayLength = array.length;

  if (!isSquare(array, arrayLength)) {
    return false;
  }

  const columns = createArrays(arrayLength);
  populateColumnsArray(array, columns);

  for (let i = 0; i < array.length; i += 1) {
    let subArr = array[i];
    for (let j = 0; j < subArr.length; j += 1) {
      if (arraysAreEqual(subArr, columns[j])) return true;
    }
  }

  return false;
}

console.log(hasIdentical([
  [4, 4, 4, 4], 
  [2, 4, 9, 8], 
  [5, 4, 7, 7], 
  [6, 4, 1, 0]
]) === true)

console.log(hasIdentical([
  [4, 2, 4, 6, 1], 
  [2, 4, 9, 4, 5], 
  [5, 1, 7, 1, 9], 
  [6, 4, 1, 0, 33], 
  [5, 5, 5, 33, 5]
]) === true)

console.log(hasIdentical([
  [4, 2],
  [2, 1]
]) === true)

console.log(hasIdentical([
  [4, 4, 9, 4], 
  [2, 1, 9, 8], 
  [5, 4, 7, 7], 
  [6, 4, 1, 0]
]) === false)

console.log(hasIdentical([
  [4, 4],
  [2, 1]
]) === false)

console.log(hasIdentical([
  [4, 4, 3],
  [2, 1, 9], 
  [3, 8, 1]
]) === false)

console.log(hasIdentical([
  [4, 4, 4],
  [2, 1, 4]
]) === false)

console.log(hasIdentical([
  [4, 4, 4]
]) === false)