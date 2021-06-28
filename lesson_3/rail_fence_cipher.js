"use strict";

// Rail Fence Cipher

// Encode
/*
Input: string (can be lowercase or uppercase) & number (rails)
  - case sensitive: must return same case
Output: string
  - encoded version of input string
  - same number of characters
  - same case
  - different order based on number of rails

Rules:
  - Empty string inputs return empty strings
  - If there are more rails than letters, return the input string
  - If there is only one rail, return input string
  - 

Matrix:
0: W . . . E . . . C . . . R . . . L . . . T . . . E
1: . E . R . D . S . O . E . E . F . E . A . O . C .
2: . . A . . . I . . . V . . . D . . . E . . . N . .

mainArray = [[], [], []]
mainArray[0][0] = 'W';
mainArray[1][1]
mainArray[2][2]
mainArray[1][3]
mainArray[0][4]

create an array of arrays which will act as the matrix:
- the outer array will have a length equal to the number of rails
  - these rails will represent the rows in our matrix
  - the message.length will represent the number of columns in each row
  e.g. the above message with 3 rails will be an array with the three
  nested arrays, each of which will have a length of 25. (index 0 - 24)

For encode, the pattern to input the characters and the pattern to input
'?' are the same pattern. 
*/

function encode(message, rails) {
  if (rails === 1) return message;
  let matrix = createMatrix(rails, message.length);

  zigZag(matrix, message, rails);

  return matrix.flat().join('');
}


function createMatrix(rows, columns) {
  let result = [];

  for (let i = 0; i < rows; i += 1) {
    result.push(new Array(columns));
  }

  return result;
}

console.log(encode('', 4) === '');
console.log(encode('One rail, only one rail', 1) === 'One rail, only one rail');
console.log(encode('XOXOXOXOXOXOXOXOXO', 2) === 'XXXXXXXXXOOOOOOOOO');
console.log(encode('More rails than letters', 24) === 'More rails than letters');
console.log(encode('EXERCISES', 4) === 'ESXIEECSR');
console.log(encode('WEAREDISCOVEREDFLEEATONCE', 3) === 'WECRLTEERDSOEEFEAOCAIVDEN');

// Decode
function zigZag(matrix, message, rails) {
  const MAX_RAIL = rails - 1;
  let row = 0;
  let goingUp = true;

  for (let column = 0; column < matrix[0].length; column += 1) {
    matrix[row][column] = message[column];
    if (goingUp) {
      row += 1;
      if (row === MAX_RAIL) goingUp = false;
    } else if (!goingUp) {
      row -= 1;
      if (row === 0) goingUp = true;
    }
  }

}

function decode(message, rails) {
  if (rails === 1) return message;
  const MAX_RAIL = rails - 1;
  let matrix = createMatrix(rails, message.length);
  let charArray = message.split('');

  zigZag(matrix, message, rails);

  for (let curRow = 0; curRow < matrix.length; curRow += 1) {
    for (let column = 0; column < matrix[curRow].length; column += 1) {
      if ((matrix[curRow][column]) !== undefined) {
        matrix[curRow][column] = charArray.shift();
      }
    }
  }

  let result = '';
  let row = 0;
  let goingUp = true;
  for (let column = 0; column < matrix[0].length; column += 1) {
    result += matrix[row][column];

    if (goingUp) {
      row += 1;
      if (row === MAX_RAIL) goingUp = false;
    } else if (!goingUp) {
      row -= 1;
      if (row === 0) goingUp = true;
    }
  }

  return result;
}

console.log(decode('', 4) === '');
console.log(decode('ABCDEFGHIJKLMNOP', 1) === 'ABCDEFGHIJKLMNOP');
console.log(decode('XXXXXXXXXOOOOOOOOO', 2) === 'XOXOXOXOXOXOXOXOXO');
console.log(decode('TEITELHDVLSNHDTISEIIEA', 3) === 'THEDEVILISINTHEDETAILS');
console.log(decode('ESXIEECSR', 4) === 'EXERCISES');