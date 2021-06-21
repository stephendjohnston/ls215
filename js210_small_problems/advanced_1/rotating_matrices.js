"use strict";

// Rotating Matrices
// -----------------

/*
Problem:

Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 
90-degrees as described above, and returns the result as a new matrix. 
The function should not mutate the original matrix.

Input: array of arrays
Output: new Array of arrays

Rules:
  - do not mutate original matrix(array)
  - A 90-degree rotation of a matrix produces a new matrix in which each 
  side of the matrix is rotated clockwise by 90 degrees
    - the number of sub arrays in the input will represent the number of 
    elements that will appear in the new sub arrays in the output
    - the number of elements in the sub arrays of the input will represent
    the number of subarrays that will be in the output
      - eg. 2 sub arrays and 3 elements in each translates to: an array
      with 3 sub arrays each containing 2 elements

Examples:

1  5  8   =>   3  4  1

4  7  2   =>   9  7  5

3  9  6   =>   6  2  8

- There are three sub arrays with three elements so there will be the same
number of each in our output
- In this example the elements in the first row all get rotated to the last
index of each subsequent row.
  FIRST SUB ARRAY
  - element (1) at Row 0, column 0 gets moved to Row 0 Column 2
  - element (5) at Row 0, Column 1 gets moved to Row 1 Column 2
  - element (8) at Row 0, Column 2 gets moved to Row 2 Column 2
  SECOND SUB ARRAY
  - element (4) at Row 1, Column 0 gets moved to Row 0 Column 1
  - element (7) at Row 1, Column 1 gets moved to Row 1 Column 1
  - element (2) at Row 1, Column 2 gets moved to Row 2 Column 1
  THIRD SUB ARRAY
  - element (3) at Row 2, Column 0 gets moved to Row 0 Column 0
  - element (9) at Row 2, Column 1 gets moved to Row 1 Column 0
  - element (6) at Row 2, Column 2 gets moved to Row 2 Column 0

Another Example:

3  4  1   =>   9  3
9  7  5   =>   7  4
          =>   5  1

FIRST SUB ARRAY
- element (3) at Row 0, Column 0 gets moved to Row 0, Column 1
- element (4) at Row 0, Column 1 gets moved to Row 1, Column 1
- element (1) at Row 0, Column 2 gets moved to Row 2, Column 1
SECOND SUB ARRAY
- element (9) at Row 1, Column 0 gets moved to Row 0, Column 0
- element (7) at Row 1, Column 1 gets moved to Row 1, Column 0
- element (5) at Row 1, Column 2 gets moved to Row 2, Column 0

The pattern:

Iterating over each element of a sub array to insert it into its new
position. For the first row, the elements will be inserted into the last
index of each sub array of our new matrix
- for the second row:
  - the elements will be inserted into the max index - 1 of each
  sub array of our new matrix
- for the third row:
  - the elements will be inserted in the max index - 2 of each
  sub array of our new matrix

Data Structure:

Array of arrays

Algorithm:

Create the template of the new Matrix
  - to get the number of sub arrays for our new matrix, determine
  the length of the the sub arrays => array[0].length = number of rows
  - create a for loop to push the appropriate number of arrays into an
  outer array

Determine the size of new sub array sizes
  - matrix.length = 2 => 2 - 1 = index 1

Rotating Elements:
- iterate over the sub arrays (outer loop)
  - Iterate over each element of the sub arrays
    - on each iteration:
      - use the current index at the current element to access the new sub 
      array and use new subarray length to access the specific index
        - emptyArray[lastIndex] = current element

*/

function rotate90(matrix) {
  const rotated = [];
  let maxIndex = matrix.length - 1;

  for (let i = 0; i < matrix[0].length; i += 1) {
    rotated.push([]);
  }

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1) {
      rotated[colIdx][maxIndex] = matrix[rowIdx][colIdx];
    }
    maxIndex -= 1;
  }

  return rotated;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

// LS Solution Discussion
/*
Rotating a matrix is similar to transposing a matrix. The main difference 
is that the elements of each row are arranged in a different order. For 
example:

Given the matrix: [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

Transposing:
  - first row of transposed matrix --> [1, 4, 3]

Rotating:
  - first row has same elements, but in reverse order --> [3, 4, 1]

Since the transposing and rotating give the same elements just in
different order, I could've just used another loop to iterate over
each sub array and used the reverse method to reverse the order
which would have given me the rotated results.
*/