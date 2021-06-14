"use strict";

// Rotation Part 3
// ---------------

/*
Problem:

Write a function that takes an integer as an argument and returns the maximum 
rotation of that integer. You can (and probably should) use the 
rotateRightmostDigits function from the previous exercise.

Input: Number
Output: Number rotated max amount of times

Rules:
  - rotation starts with all digits
  - after each rotation, rotation starts at next digit in number keeping
  the previous digits in place.

Mental Model:
rotate the number and after each rotation, start the next rotation
one digit place to the right, until you are rotating the last 2 digits
then return that number.

Example:
maxRotation(735291);          // 321579
1. rotate whole number => 352917 (first digit moves to the end)
2. rotate from 2nd digit => 329175 (2 moved to end)
3. rotate from 3rd digit => 321759 (9 moved to end)
4. rotate from 4th digit => 321597 (7 moved to end)
5. rotate 5th (2nd last and final) digit => 321579


Algorithm:
We need a loop to keep rotating until we've rotated the last 2 digits.
From the example above, for a number with 6 digits, there are 5 iterations.
Starting from 0 up to String(number).length - 1 === 5
- create a loop that will iterate from 0 < length - 1
  - on each loop, we need to pass the apprpriate numbers to the rotateRightmostDigits
  method.
    - first loop will pass the whole number
    => rotateRightMostDigits(735291) => 352917
    - second loop will pass number from index 1
    => rotateRightMostDigits(52917) => 3 + 29175 => 329175
    etc..
  - to get the first numbers that will not be rotated
    - convert the number to a string and slice(0, i)
      - first loop will be: slice(0, 0) => []
    - numbers to rotate will be slice(i)
      - slice(0) => 735291
  - add the numbers back together as a string
  - loop until all max rotations reached

*/

function rotateArray(array) {
  return array.slice(1).concat(array[0]);
}

function rotateRightmostDigits(digits, count) {
  let stringNumber = String(digits);
  let rotated = rotateArray(stringNumber.slice(-count));
  let resultString = stringNumber.slice(0, -count) + rotated;
  
  return Number(resultString);
}

function maxRotation(number) {
  let count = String(number).length;

  while (count > 1) {
    number = rotateRightmostDigits(number, count);
    count -= 1;
  }

  return number;
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845