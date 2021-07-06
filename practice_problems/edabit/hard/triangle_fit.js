"use strict";

// Does Triangle Fit?
// ------------------

/*
Problem:

Create a function that takes the dimensions of two triangles (as arrays) and 
checks if the first triangle fits into the second one.

doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true
doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true
doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false
doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false

- Triangle fits if it has the same or smaller size as the hole.
- The function should return false if the triangle with that dimensions is not 
possible.

Inputs: Two arrays
  - first array is the triangle
  - second array is hole that first triangle must through
Output: Boolean
  - true if triangle fits through hole
  - false if triangle does not fit

Rules:
- Triangle fits through hole if it has the same or smaller size
- Return false if the triangle with that dimensions is not possible
  - I'm going to assume that this means we have to check to make sure
  that the integers in the array represent the lengths of the sides
  of the triangle which means that we have to validate that the given
  array does indeed represent an a triangle.
  - for a triangle to be valid, the sum of two sides must be greater than
  the third side. If this is true for all three combinations, then it is
  a valid triangle
  - if the triangle is not valid, or the hole is not valid return false
- if both are valid, find the total sum of the triangle and the hole
  - if the sum of the triangle is <= hole then return true?
  - otherwise return false

Examples:

doesTriangleFit([1, 1, 1], [1, 1, 1]);    // true, "Same triangle"
- valid triangle and hole
- sum of triangle === sum of hole
doesTriangleFit([1, 1, 1], [2, 2, 2]);    // true, "Smaller triangle"
- valid triangle and hole
- 3 < 6
doesTriangleFit([1, 6, 8], [1, 6, 8]);    // false, "Not a triangle"
- invalid triangle
  - 1 + 6 < 8

Data StructureS:

Array

Mental Model:

Determine if the inputs are valid by making sure that the sum of any two sides
is greater than the third side. A + B > C, A + C > B, B + C > A. 
Get the sum of the triangle and the sum of the hole. If the sum of the
triangle sides is less than or equal to the sum of the hole, return
true. Otherwise return false.

Algorithm:

Triangle validation:
  - if (array[0] + array[1] > array[2]) && (array[0] + array[2] > array[1])
  && (array[1] + array[2] > array[0])
    - return true

Imagine a cookie cutter and the dough the you cut out, and putting the dough
back into the cookie cutter. They are both flat. 
This is assuming that the triangle has to fit through the hole flat, like
putting the dough back through the cookie cutter. 
*/

function doesTriangleFit(triangle, hole) {
  if (!(triangleValidator(triangle) && triangleValidator(hole))) {
    return false;
  }

  // let getSum = (sum, val) => sum + val;
  // return triangle.reduce(getSum) <= hole.reduce(getSum);
  return triangle[0] <= hole[0] &&
         triangle[1] <= hole[1] &&
         triangle[2] <= hole[2];
}

function triangleValidator(triangle) {
  return (triangle[0] + triangle[1] > triangle[2]) &&
         (triangle[0] + triangle[2] > triangle[1]) &&
         (triangle[1] + triangle[2] > triangle[0]);
}

console.log(doesTriangleFit([1, 1, 1], [1, 1, 1]));    // true, "Same triangle"
console.log(doesTriangleFit([1, 1, 1], [2, 2, 2]));    // true, "Smaller triangle"
console.log(doesTriangleFit([1, 6, 8], [1, 6, 8]));    // false, "Not a triangle"
console.log(doesTriangleFit([12, 63, 42], [1, 6, 8])); // false, "too small hole"
console.log(doesTriangleFit([3, 6, 8], [23, 63, 42])); // true, "Hole is too big"
console.log(doesTriangleFit([3, 6, 8], [1, 10, 8]));   // false, "impossible hole"
console.log(doesTriangleFit([7, 4, 9], [8, 7, 5]));    // My own test case