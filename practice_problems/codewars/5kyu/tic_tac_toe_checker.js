"use strict";

// Tic Tac Toe Checker
// -------------------

/*
If we were to set up a Tic-Tac-Toe game, we would want to know whether the 
board's current state is solved, wouldn't we? Our goal is to create a 
function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 
0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]

We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).

You may assume that the board passed in is valid in the context of a game 
of Tic-Tac-Toe.


PEDAC
-----

inputs: Array of arrays
- tic tac toe board
- each nested array will contain 3 elements: 0, 1 or 2
outputs: Number
- -1 if the game has not finished
- 1 if "X" won
- 2 if "O" won
- 0 if it's a tie

Rules:
- Assume that the board passed in is a valid board
- 0's represent empty space
- 1's represent 'X'
- 2's represent 'O'
- a game is won if:
  - a row is all 1's or 2's
  - the same index in each subarray has the 1's or 2's
  - there is an "X" at a different index of each subarray
  - there is an "O" at a different index of each subarray
- if none of these conditions are true, and a zero exists on the
board then return -1
- otherwise it's a tie

Examples:

Board not finished:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
-> -1

Win of same indexes different subarrays: index 1 of each subarray

[[0, 1, 1],
 [0, 1, 2],
 [2, 1, 2]]
-> 1

Win of all same row: subarray at index 2 of main array has all 2's

[[1, 0, 1],
 [0, 1, 1],
 [2, 2, 2]]
-> 2

Win of all different indexes: there is 1 at a different index of each subarray

[[2, 0, 1],
 [0, 1, 2],
 [1, 1, 0]]
-> 2

Tie:

[[2, 1, 1],
 [1, 2, 2],
 [2, 2, 1]]
-> 0


Create a function for each condition:
Horizontal - Same Row: if a subarrays contains all 1's or all 2's, return
that number, otherwise false

Vertical - same index, different array: if there is a 1 at the same index of each subarray, return 1
if there is a 2 at the same index of each subarray, return 2, otherwise false

Diagonal:
Different row, same index: if there is a 1 at a different index of each
subarray, return 1
if there is a 2 at a different index of each subarray, return 2
otherwise false

Unfinished board: the board contains a 0
- return -1

Tie: if none of the other conditions are true

Mental model:
save each return value of each function to a variable. if the return value
=== 1, return 1, if the return value === 2, return 2, if the return
value === false, move to the next function check

Algorithm:

horizontalWin: check if each subarray contains all 1's or all 2's
- for loop that will iterate the length of the main array, which in this
case will be 3 every time
- on each iteration check if every element in the subarray === 1
- check if every element === 2
  - if either return true, return the appropriate number
- return false otherwise

Vertical Win: the same element at the same index of each subarray
- iterate over the array of arrays. On each iteration, get the index
of each 1 in the row, if there is no 1, return false.
  - if there is a 1, push the index to an array of indexes
- if the array of indexes is equal to 3, check if all the numbers
in the array are the same, if they are return the number 1
- if the array is > 3, check if there is 3 of the same number
  - if there is, return that number
- otherwise return false.

Diagonal Win:
Same as vertical Win, but check if all the numbers are different
instead of the same

Board unfinished: Iterate over the array of arrays, if any of the subarrays
contain a 0, return -1.

return 0 if none of the other conditions are true.

**This one took me a long time
*/

function isHorizontal(board) {
  for (let i = 0; i < board.length; i += 1) {
    let currentRow = board[i];

    if (currentRow.every(num => num === 1)) return 1;
    if (currentRow.every(num => num === 2)) return 2;
  }

  return false;
}

function isVertical(board) {
  for (let i = 0; i < board.length; i += 1) {
    let indexes = [];

    for (let j = 0; j < board.length; j += 1) {
      indexes.push(board[j][i]);
    }

    if (indexes.every(num => num === 1)) return 1;
    if (indexes.every(num => num === 2)) return 2;
  }

  return false;  
}

function isDiagonal(board) {
  let row1 = board[0];
  let row2 = board[1];
  let row3 = board[2];

  if (row1[0] === 1 && row2[1] === 1 && row3[2] === 1 ||
    row1[2] === 1 && row2[1] === 1 && row3[0] === 1) {
    return 1;
  }

  if (row1[0] === 2 && row2[1] === 2 && row3[2] === 2 ||
    row1[2] === 2 && row2[1] === 2 && row3[0] === 2) {
    return 2;
  }

  return false
}

function unfinishedBoard(board) {
  let notFinished;

  for (let i = 0; i < board.length; i += 1) {
    let currentRow = board[i];

    notFinished = currentRow.some(num => num === 0);
    if (notFinished) return -1;
  }

  return false;
}

function isSolved(board) {
  if (unfinishedBoard(board)) {
    return isHorizontal(board) || isVertical(board) || isDiagonal(board)
           || unfinishedBoard(board);
  }

  return 0;
}

// Unfinished board
console.log(isSolved([[0, 0, 1], [0, 1, 2], [2, 1, 0]])) // -1

// "X" wins vertical
console.log(isSolved([[0, 1, 1], [0, 1, 2], [2, 1, 2]])) // 1

// "O" wins horizontal
console.log(isSolved([[1, 0, 1], [0, 1, 1], [2, 2, 2]])) // 2

// "X" wins diagonal
console.log(isSolved([[2, 0, 1], [0, 1, 2], [1, 1, 2]])) // 1

// "O" wins diagonal
console.log(isSolved([[2, 0, 1], [0, 2, 1], [1, 1, 2]])) // 2

// Tie
console.log(isSolved([[2, 2, 1], [1, 2, 2], [2, 1, 1]])) // 0
