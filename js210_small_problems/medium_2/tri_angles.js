"use strict";

// Tri-Angles
// ----------

/*
Problem:
Write a function that takes the three angles of a triangle as arguments and 
returns one of the following four strings representing the triangle's 
classification: 'right', 'acute', 'obtuse', or 'invalid'.

Inputs: 3 Numbers as degrees
Output: String representing type of triangle (4 options)
  - Right, Acute, Obtuse, or invalid

Rules:
- a valid triangle is:
  - Sum of all the angles === 180 degrees
  - every angle > 0
- Right:
  - One angle is 90 degrees
- Acute:
  - All three angles are less than 90 degrees
- Obtuse:
  - One angle is > 90 degrees
- All inputs will be integer values (no floating point numbers)
- All inputs will be in degrees

Mental Model:
Take the angle arguments and determine if the angles are all greater than 0
and the sum is === 180 degrees. If one angle is 90 degrees, return 'right'.
If all angles are less than 90, return 'acute'. If one angle is greater
than 90, return 'obtuse'. Otherwise return invalid.

Examples:

triangle(60, 70, 50);       // "acute"
- all angles < 90
triangle(30, 90, 60);       // "right"
- one angle === 90
triangle(120, 50, 10);      // "obtuse"
- one angle > 90
triangle(0, 90, 90);        // "invalid"
- one angle is 0
triangle(50, 50, 50);       // "invalid"
- sum of angles is not equal to 180

Data Structure:

Number


Algorithm:

First determine if the angles given make up a valid triangle:
  - if every angle > 0 and the sum of the angles === 180 then the triangle
  is valid
    - determine the type of triangle:
      - iterate over the values
        - if one value is 90 than return 'right'
      - if all the values are less than 90, return 'acute'
      - if one value is > 90 return 'obtuse'
  - else
    - return 'invalid'
*/

function triangle(angle1, angle2, angle3) {
  const angles = [angle1, angle2, angle3];
  if (isValidTriangle(angles)) {
    return typeOfTriangle(angles)
  } else {
    return 'invalid';
  }
}

function isValidTriangle(angles) {
  return angles.every(angle => angle > 0) &&
    (angles.reduce((acc, val) => acc + val)) === 180;
}

function typeOfTriangle(angles) {
  if (angles.some(angle => angle === 90)) {
    return 'right';
  } else if (angles.some(angle => angle > 90)) {
    return 'obtuse';
  } else if (angles.every(angle => angle < 90)) {
    return 'acute';
  }
}

// LS solution which is essentially the same, just cleaner

function triangle(angle1, angle2, angle3) {
  const angles = [angle1, angle2, angle3];
  if (isValid(angles)) {
    return getTriangleType(angles);
  } else {
    return "invalid";
  }
}

function isValid(angles) {
  const totalAngle = angles.reduce((total, angle) => total + angle);

  const allNonZero = angles.every(angle => angle > 0);

  return totalAngle === 180 && allNonZero;
}

function getTriangleType(angles) {
  if (angles.some(testRightTriangle)) {
    return "right";
  } else if (angles.every(testAcuteTriangle)) {
    return "acute";
  } else {
    return "obtuse";
  }
}

function testRightTriangle(angle) {
  return angle === 90;
}

function testAcuteTriangle(angle) {
  return angle < 90;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"