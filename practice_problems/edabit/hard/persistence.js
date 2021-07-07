"use strict";

// Persistence
// -----------

/*
Problem:

The additive persistence of an integer, n, is the number of times you have 
to replace n with the sum of its digits until n becomes a single digit 
integer.

The multiplicative persistence of an integer, n, is the number of times you 
have to replace n with the product of its digits until n becomes a single 
digit integer.

Create two functions that take an integer as an argument and:

- Return its additive persistence.
- Return its multiplicative persistence.

Examples: Additive Persistence

additivePersistence(1679583) ➞ 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.

additivePersistence(123456) ➞ 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

additivePersistence(6) ➞ 0
// Because 6 is already a single-digit integer.

Examples: Multiplicative Persistence

multiplicativePersistence(77) ➞ 4
// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.

multiplicativePersistence(123456) ➞ 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

multiplicativePersistence(4) ➞ 0
// Because 4 is already a single-digit integer.

Notes
The input n is never negative.

PEDAC

Inputs: Integer
Output: Integer
  - a number the represents the number of operations it takes to get reduce
  the input to a single digit

Rules:
  - the input is never negative
  - if the input is a single digit, return 0
  - for additive
    - take each digit of the input and add the digits together to get the next
    number
  - for mutliplicative
    - take each digit of the input and multiply them to get the next number
  - everyone time you get a new number, increase a counter by
  - return the counter

Examples:

additivePersistence(123456) ➞ 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

multiplicativePersistence(123456) ➞ 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

Data Structure:

Array
String

Use an array of Strings as each new number will have to converted to a string
and then split into an array of digits, which will then need to be converted
to Numbers to perform the operation: addition, or multiplication

Mental Model:

Take the input integer and transform it to an array of numbers. Get the sum
or product of these numbers. Add 1 to the counter. Take the sum of product
and convery back to a string. If the length of the string === 1, return the
counter, if not, repeat the first steps of converting to array of numbers
and getting the sum or product until the number is one digit.

Algorithm:

- initialize counter
- convert number to string
- create while loop that iterates whiile numstring.length !== 1
- split string to array
- map each digit to number
- reduce the array to a sum or product
- convert back to string
- increase counter by 1
end loop and while loop condition is checked and process is repeated

*/

function additivePersistence(number) {
  let strNum = String(number);
  let count = 0;

  while (strNum.length !== 1) {
    let sum = [...strNum].map(Number).reduce((acc, val,) => acc + val, 0);
    strNum = String(sum);
    count += 1;
  }

  return count;
}

function multiplicativePersistence(number) {
  let strNum = String(number);
  let count = 0;

  while (strNum.length !== 1) {
    let product = [...strNum].map(Number).reduce((acc, val) => acc * val, 1);
    strNum = String(product);
    count += 1;
  }

  return count;
}

// ADDITIVE PERSISTENCE
console.log(additivePersistence(5) === 0);
console.log(additivePersistence(27) === 1);
console.log(additivePersistence(58) === 2);
console.log(additivePersistence(5789) === 3);
// MULTIPLICATIVE PERSISTENCE
console.log(multiplicativePersistence(7) === 0);
console.log(multiplicativePersistence(1234567890) === 1);
console.log(multiplicativePersistence(39) === 3);
console.log(multiplicativePersistence(6788) === 6);
console.log(multiplicativePersistence(277777788888899) === 11);