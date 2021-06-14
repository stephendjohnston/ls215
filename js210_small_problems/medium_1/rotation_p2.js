"use strict";

// Rotation Part 2
// ---------------

/*
Problem:

Write a function that rotates the last count digits of a number. To perform 
the rotation, move the first of the digits that you want to rotate to the 
end and shift the remaining digits to the left.

Input:
  - Digits: Number
  - Rotations: Number
Output: Number

What does rotation mean?
Example:
rotateRightmostDigits(735291, 3);      // 735912
- the rotations number is 3
- counting backwards from the end of the number
  - the last number (1) is one from the end
  - 9 is 2 places from the end
  - and 2 is three places from the end
- so we want to take 291 and rotate 2 to the end to get 912
- so the rotations means: counting back from the last number, the index of
the number we want to rotate.

Rules:
  - return the input digits, rotated

Data Structure:

String: transform number to string
Array: transform the string to array of string numbers
Number: return the rotated Number

Algorithm:
- create an array of strings where each digit in the number is an element
=> String(number).split('') => ['7', '3', '5', '2', '9', '1']
- I now need to get the digits to rotate:
  - slice the array based on the negative Number of rotations input
  - stringArr.slice(-3)
  => ['2', '9', '1']
  - use the rotateArray method to rotate the elements
  => ['9', '1', '2']
  - concat this array onto the digits that were not rotated
    - to get the digits that were not rotated slice the stringArr
    from 0, -rotations or -3
    - stringArr.slice(0, -3)
    => ['7', '3', '5',]
  - concat the first half with the rotated elements
  - notRotated.concat(rotated)
  => ['7', '3', '5', '9', '1', '2']
- join the elements and use Number to transform into a number
*/

function rotateArray(array) {
  return array.slice(1).concat(array[0]);
}

function rotateRightmostDigits(digits, rotations) {
  let stringArr = String(digits).split('');
  let rotated = rotateArray(stringArr.slice(-rotations));
  let resultArr = stringArr.slice(0, -rotations).concat(rotated);

  return Number(resultArr.join(''));
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917