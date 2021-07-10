"use strict";

// Maximize First Number
// ---------------------

/*
Problem:
--------

Write a function that makes the first number as large as possible by swapping 
out its digits for digits in the second number.

To illustrate:

maxPossible(9328, 456) ➞ 9658
// 9658 is the largest possible number built from swaps from 456.
// 3 replaced with 6 and 2 replaced with 5.

Examples:
---------

maxPossible(523, 76) ➞ 763

maxPossible(9132, 5564) ➞ 9655

maxPossible(8732, 91255) ➞ 9755

Notes:
------
- Each digit in the second number can only be used once.
- Zero to all digits in the second number may be used.

PEDAC
-----

Inputs: Two Integers
Output: One Integer

Rules:
  - Each digit in the second number can only be used once.
  - Zero to all digits in the second number may be used.
  - You take the largest digit from the second number and replace the first
  digit in the first number that is less than the largest digit from the
  second number

Example:

maxPossible(523, 76) ➞ 763
7 > 5, replace 5 with 7 => 723
6 > 2, replace 2 with 6 => 763
- all digits in second number used
=> 763

maxPossible(8732, 91255) ➞ 9755
sort 2nd num from largest to smallest => 95521
9 > 8, replace 8 with 9 => 9732 => use next digit in 2nd num => 5
5 < 7 => move to next digit in first number => 3
5 > 3, replace 3 with 5 => 9752 use next digit in 2nd num => 5
5 > 2, replace 2 with 5 => 9755

Mental Model:
sort the second number from largest to smallest digits. Create a loop that
will loop the number of times that is equal to the number of digits in the
first number. Set the current digit to the first number in the second num.
Compare this number with the digits in the first num. If the current digit
is greater than a digit in the first num, add the current digit to the result
and move to the next digit in the second number to compare against the digits
in the first num.

If the current digit in num2 is greater than a digit in num1, push that number
into the result. If the current digit is not greater than any of the digits
in num1, at the end of iterating over num1 digits, push in the digit from 
num1. Set the current digit to the next digit in num2. 

Algorithm:

- create an array of digits for both input numbers, but sort the second number
from largest to smallest.
- create a result array that will hold the digits for the final number
- create a loop that will the same number of times equal to the number
of digits in the second number
*/

function maxPossible(num1, num2) {
  const num1Digits = Array.from(String(num1), Number);
  const num2Digits = Array.from(String(num2), Number).sort((a, b) => b - a);
  const result = num1Digits.slice();

  for (let i = 0; i < num2Digits.length; i += 1) {
    let currentDigit = num2Digits[i];

    for (let j = i; j < num1Digits.length; j += 1) {
      if (currentDigit > result[j]) {
        result[j] = currentDigit
        break;
      }
    }
  }

  return parseInt(result.join(''), 10);
}

console.log(maxPossible(9328, 456) === 9658)
console.log(maxPossible(523, 76) === 763)
console.log(maxPossible(9132, 5564) === 9655)
console.log(maxPossible(8732, 91255) === 9755)
console.log(maxPossible(589, 777) === 789)
console.log(maxPossible(1, 0) === 1)
console.log(maxPossible(8, 9) === 9)
console.log(maxPossible(28, 19) === 98)
console.log(maxPossible(12345, 4) === 42345)