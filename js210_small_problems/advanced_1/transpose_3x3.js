"use strict";

// Transpose 3x3
// -------------

/*
Problem:

Write a function that takes an array of arrays that represents a 3x3 matrix 
and returns the transpose of the matrix. 
The transpose of a 3x3 matrix is the matrix that results from exchanging 
the rows and columns of the original matrix.

Input: Array of 3 nested arrays that each contain 3 elements
Output: New array of 3 nested arrays of the elements from the input array

Rules:
- do not mutate the input array
  - return a new Array
- What does it mean to transpose?
  - The rows become the columns and columns become the rows
    - The elements in the first row(array) become elements at index 0
    of each nested array
    - the elements in the second row(array) become the elements at index 1
    of each nested array
    - the elements in the third row(array) become the elements at index 2
    of each nested array

Example:

1  5  8  =>  1  4  3
4  7  2  =>  5  7  9
3  9  6  =>  8  2  6

row 1 of 1 5 8 becomes column 1
row 2 of 4 7 2 becomes column 2
row 3 of 3 9 6 becomes column 3

Data Structure:

Array of arrays
  - 3 nested arrays

Mental Model: Using the example above

Take a matrix(array of nested arrays) and iterate over each nested array.
For the first nested array, on each iteration we want to push the first value
into the first row and column of our new matrix. 2nd iteration: push the value
into the second row and first column. 3rd iteration: push the value into
the third row and first column. 
2nd Nested array:
first value goes into first row and second column. second value goes into
second row and second column. third value goes into third row and second
column.
3rd nested array. values go 3rd column of each row.

Algorithm: 

- create a new array of 3 nested arrays.
- create a for loop that will iterate 3 times(one for each nested array)
- the index of this loop will be used to access each nested array
  - create an inner for loop that will iterate 3 times(one for each value)
  - the index of this loop will be used to access each value of the nested
  arrays
    - for the first nested array we want to add a value to our new matrix
    at row 1, 2,3 all in column 1
    - for the 2nd, add a value at row 1,2,3 all in column 2
    - same for 3.

*/

// hello there
function transpose(matrix) {
  const newMatrix = [[], [], []];

  for (let subArrIdx = 0; subArrIdx < matrix.length; subArrIdx += 1) {
    let subArray = matrix[subArrIdx];
    for (let colIdx = 0; colIdx < subArray.length; colIdx += 1) {
      newMatrix[colIdx].push(subArray[colIdx]);
    }
  }

  return newMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]