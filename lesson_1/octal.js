/*
Problem:

take a number string and convert the octal number to a decimal

Algorithm:

To go from Octal to Decimal:

  233                          // octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8   + 3*1
= 128   + 24    + 3
= 155                          // decimal


- Convert the string into a number
- declare an empty array
- create a for loop that will loop the number of times equal to the input 
string length - 1.
- 

*/

// Solution 1:

function octalToDecimal(numberString) {
  let number = Number(numberString);
  let decimal = 0;

  for (let i = 0; i < numberString.length; i += 1) {
    let remainder = number % 10;
    number = parseInt(number / 10, 10);
    decimal += remainder * (8**i);
  }

  return decimal;
}

// Solution 2:

function octalToDecimal(numberString) {
  let numberArrayReversed = numberString.split('').map(num => Number(num)).reverse();

  return numberArrayReversed.reduce((acc, val, index) => {
    return acc + (val * (8**index));
  }, 0);
}

// LS Solution:

function octalToDecimal(numberString) {
  let decimalParts = numberString.split('').map((digitChar, index) => {
    return Number(digitChar) * Math.pow(8, numberString.length - index - 1);
  });

  return decimalParts.reduce((sum, number) => sum + number);
}

// LS Alternative Solution;

function octalToDecimal(numberString) {
  return numberString.split('').reduce((sum, digitChar, index) => {
    return sum + Number(digitChar) * Math.pow(8, numberString.length - index - 1);
  }, 0);
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9