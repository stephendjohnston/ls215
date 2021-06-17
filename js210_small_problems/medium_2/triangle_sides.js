"use strict";

// Triangle Sides
// --------------

/*
Problem:

Write a function that takes the lengths of the three sides of a triangle as 
arguments and returns one of the following four strings representing the 
triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

A triangle is classified as follows:

    Equilateral: All three sides are of equal length.
    Isosceles: Two sides are of equal length, while the third is different.
    Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides must 
be greater than the length of the longest side, and every side must have a 
length greater than 0. If either of these conditions is not satisfied, the 
triangle is invalid.

Input: Numbers (integer or floating point)
  - lengths of each side of the triangle
Output: String
  - type of triangle

Rules:
  - to be a valid triangle:
    - the sum of the lengths of the two shortest sides must be greater
    than the length of the longest side
    - every side must be greater than 0
  - Equilateral Triangle:
    - all 3 sides are equal length
  - Isosceles:
    - Two sides are of equal length, while the third is different
  - Scalene: 
    - All three sides are of different lengths

Mental Model:
Take three input numbers and determine what type of triangle they represent
by comparing the lengths. If any length is 0, then return invalid. If all 
3 lengths are the same then it is an equilateral triangle. If 2 sides are equal
then it is an isosceles triangle. If they are all different lengths, the sum
of the 2 shorter lengths must be greater than the third length which will
return a Scalene triangle. If they are not greater than the third length
then the trianlge is invalid.

Examples:
triangle(3, 3, 3);        // "equilateral"
- all sides are equal
triangle(3, 3, 1.5);      // "isosceles"
- 2 sides are equal
triangle(3, 4, 5);        // "scalene"
- sum of 2 shorter lengths is greater than third length
triangle(0, 3, 3);        // "invalid"
- one side is 0
triangle(3, 1, 1);        // "invalid"
- sum of 2 shorter lengths is not greater than 3.

Data Structure:

Number
Array?

Algorithm:
Use some method to check if any side is 0
How to compare the numbers?
*/

function triangle(...sides) {
  if (sides.includes(0)) {
    return 'invalid';
  }
  
  if (isEquilateral(sides)) {
    return 'equilateral';
  } else if (isIsosceles(sides)) {
    return 'isosceles';
  } else if (isScalene(sides)) {
    return 'scalene';
  } else {
    return 'invalid';
  }
}

function isEquilateral(sides) {
  return sides.slice(1).every(side => sides[0] === side);
}

function isIsosceles(sides) {
  if (sides[0] === sides[1]) {
    return sides[0] + sides[1] > sides[2];
  } else if (sides[0] === sides[2]) {
    return sides[0] + sides[2] > sides[1];
  } else if (sides[1] === sides[2]) {
    return sides[1] + sides[2] > sides[0];
  }
}

function isScalene(sides) {
  let unique = sides.filter((side, idx, arr) => {
    return arr.indexOf(side) === idx;
  });

  return unique.length === sides.length;
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(3, 4, 3));        // "isosceles"