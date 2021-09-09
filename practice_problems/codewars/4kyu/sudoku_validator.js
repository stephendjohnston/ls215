"use strict";

// Sudoku Solution Validator

/*
Write a function validSolution/ValidateSolution/valid_solution() that 
accepts a 2D array representing a Sudoku board, and returns true if it is a 
valid solution, or false otherwise. The cells of the sudoku board may also 
contain 0's, which will represent empty cells. Boards containing one or more 
zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains 
integers from 0 to 9.

Examples:
---------

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false


PEDAC
-----

inputs: Array of arrays
- there will be 9 nested arrays
- each nested array will have a length of 9 containing any of the digits 
from 0-9

outputs: Boolean
- true if the sudoku board is valid
- false otherwise

Rules:
- a board is invalid if any row or column contains 1 or more zeros
OR
- if a row or column or 3x3 block does not consist of all of the numbers 1-9
- rows are each nested array
- columns are the numbers located at the same index of each nested array
- 3x3 blocks: eg. the first block would be the numbers in the first 3 nested
arrays from index 0-2 of each array
  - the next block to the right would be the same first 3 arrays but from
  indexes 3-5
  - the final block in that row would be the same arrays at indexes 6-8
- return true if every row, column, or block all contain the digits 1-9
- return false otherwise

Mental Model:
Check every nested array to see if all the numbers from 1-9 are included.
To do this, use filter and indexOf to get an array of unique values. If this
array of unique values is equal to 9, then it is a valid row.

Check every column (number at the same index of each nested array).
Get all the numbers at index 0 of each nested array. Build the array as
you go. If the build array already contains a number, then this solution
is invalid. If you go through each index without return false, then the
columns pass the validation.

Check every 3x3 block of numbers. 
Build an array for the first three 3x3 blocks. The first block will
start at array[0] and contain the numbers at indexes 0-2. The second
block will start at array[0] and contain the numbers at the indexes 3-5.
The third block will start at array[0] and contain the numbers at the
indexes 6-8. For each of these blocks, move to array[1] and get the same
indexes for each block respectively. So block 1 will be array[1] with indexes
0-2 etc. Each block will need to be checked every 3 arrays. eg block 1,2 and 3
are array[0], array[1] and array[2], if they include all the numbers 1-9,
continue to the next blocks, 4,5 and 5 which will be array[3]
, array[4] and array[5].


Algorithm:
create a function to check rows, columns and blocks.

Rows function: Check if every nested array contains all the numbers 1-9
- iterate over the array of arrays
  - for each nested array, use filter to return an array of the unique nums
    - arr.filter((num, idx) => arr.indexOf(num) === idx) === arr.length
      - if this returns true, then it is a valid row
      - if this returns false, then it is an invalid row

Columns Function: Check the same indexes of each array to see if they contain
all the numbers from 1-9.
- create a loop that will loop from 0-8
  - create an array to hold the values from each index 0-8
  - create another loop that will iterate over the main array's nested arrays
    - on each loop, mainarray[j][i] and add this value to previously created
    array
  - use rows are valid function to check if the column is valid
  - if the column is invalid, return false
- return true if all columns are valid

Blocks Function: Check if 3x3 blocks are valid
eg. first block is array[0], indexes 0-2, array[1], indexes 0-2
array[2] indexes 0-2

[5, 3, 4, 6, 7, 8, 9, 1, 2], 
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]

array[0] = [5, 3, 4, 6, 7, 8, 9, 1, 2]
at indexes 0-2 => 5, 3, 4
array[1] = [6, 7, 2, 1, 9, 5, 3, 4, 8]
0-2 => 6, 7, 2
array[2] = [1, 9, 8, 3, 4, 2, 5, 6, 7]
0-2 => 1, 9, 8
first block => [5, 3, 4, 6, 7, 2, 1, 9, 8] => valid block

array[3] = [8, 5, 9, 7, 6, 1, 4, 2, 3]
0-2 => 8, 5, 9
array[4] = [4, 2, 6, 8, 5, 3, 7, 9, 1]
0-2 => 4, 2, 6
array[5] = [7, 1, 3, 9, 2, 4, 8, 5, 6]
0-2 => 7, 1, 3
secondblock => [8, 5, 9, 4, 2, 6, 7, 1, 3] => valid block

- iterate 
*/


function validSolution(board) {
  return rowsAreValid(board) && columnsAreValid(board) && blocksAreValid(board);
}

function rowsAreValid(board) {
  for (let i = 0; i < board.length; i += 1) {
    let row = board[i];
    let rowFiltered = row.filter((num, idx) => row.indexOf(num) === idx);

    if (rowFiltered.length !== row.length) return false;
    if (rowFiltered.some(num => num === 0)) return false;
  }

  return true;
}

function columnsAreValid(board) {
  for (let i = 0; i < board.length; i += 1) {
    let column = [];

    for (let j = 0; j < board.length; j += 1) {
      let currentNum = board[j][i];

      if (column.includes(currentNum)) {
        return false;
      }

      column.push(currentNum);
    }
  }

  return true;
}

function blocksAreValid(board) {
  for (let i = 0; i < board.length; i += 3) {
    let block = [];

    for (let j = 0; j < board.length; j += 1) {
      let currentRow = board[j];
      block.push(...currentRow.slice(i, i + 3));

      if (block.length >= 9) {
        if (block.filter((num, idx) => block.indexOf(num) === idx).length === block.length) {
          block = [];
          continue;
        }

        return false;
      }
    }
  }

  return true;
}

// valid solution
console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                           [6, 7, 2, 1, 9, 5, 3, 4, 8],
                           [1, 9, 8, 3, 4, 2, 5, 6, 7],
                           [8, 5, 9, 7, 6, 1, 4, 2, 3],
                           [4, 2, 6, 8, 5, 3, 7, 9, 1],
                           [7, 1, 3, 9, 2, 4, 8, 5, 6],
                           [9, 6, 1, 5, 3, 7, 2, 8, 4],
                           [2, 8, 7, 4, 1, 9, 6, 3, 5],
                           [3, 4, 5, 2, 8, 6, 1, 7, 9]]) === true);

// one zero in first row
console.log(validSolution([[5, 3, 4, 6, 0, 8, 9, 1, 2], 
                           [6, 7, 2, 1, 9, 5, 3, 4, 8],
                           [1, 9, 8, 3, 4, 2, 5, 6, 7],
                           [8, 5, 9, 7, 6, 1, 4, 2, 3],
                           [4, 2, 6, 8, 5, 3, 7, 9, 1],
                           [7, 1, 3, 9, 2, 4, 8, 5, 6],
                           [9, 6, 1, 5, 3, 7, 2, 8, 4],
                           [2, 8, 7, 4, 1, 9, 6, 3, 5],
                           [3, 4, 5, 2, 8, 6, 1, 7, 9]]) === false);

// multiple zeroes
console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                           [6, 7, 2, 1, 9, 0, 3, 4, 8],
                           [1, 0, 0, 3, 4, 2, 5, 6, 0],
                           [8, 5, 9, 7, 6, 1, 0, 2, 0],
                           [4, 2, 6, 8, 5, 3, 7, 9, 1],
                           [7, 1, 3, 9, 2, 4, 8, 5, 6],
                           [9, 0, 1, 5, 3, 7, 2, 1, 4],
                           [2, 8, 7, 4, 1, 9, 6, 3, 5],
                           [3, 0, 0, 4, 8, 1, 1, 7, 9]]) === false);