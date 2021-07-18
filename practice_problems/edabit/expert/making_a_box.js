"use strict";

// Making a Box
// ------------

/*
Problem:

Create a function that creates a box based on dimension n.

Inputs: Integer
  - length and width of box
Outputs: Array of strings
  - each string will be part of the box
  - the first and last string will be the top and bottom of the box and
  will be all '#' characters
  - the strings in between will be the sides and will have '#' characters
  as the first and last character with spaces in between

Rules:
  - n represents the number of strings in the return array and it
  represents then length of each string.
    - the first and last string will contain all '#' chars
    - the middle strings will contain '#' chars on the ends with
    spaces in between
  - a box size of 2 will only contain '#' chars
  - a box size of 1 will only contain 1 '#' char

Example:
makeBox(4) => 

[
    "####",
    "#  #",
    "#  #",
    "####"
])

- first string is 4 '#'
- second string is 2 '#' and 2 spaces
- third string is 2 '#' and 2 spaces
- fourth string is 4 '#'

Mental model:

create an empty array. create two variables: one will represent the top and
bottom of the box and the other will represent the middle sections of the box.
For the top and bottom, create a string that will have n '#' chars. For the
middle, the string will be a '#' char + n- 2 spaces + '#' char. Create a for
loop that will iterate from 0 up to n. If the current index is 0, or n - 1, push
the topBottom into the array. Otherwise push the middle section into the array

Algorithm:

- initialize empty array
- initialize topBottom = '#'.repeat(n);
- initialize middle = '#' + ' '.repeat(n - 2) + '#';
- create for loop
  - if index === 0 or n - 1
    - push topBottom to result
  - otherwise push middle
- return result;

*/

function makeBox(n) {
  if (n === 1) return ['#'];
  const box = [];
  const topBottom = '#'.repeat(n);
  const middle = '#' + ' '.repeat(n - 2) + '#';

  for (let i = 0; i < n; i += 1) {
    if (i === 0 || i === n - 1) {
      box.push(topBottom);
    } else {
      box.push(middle);
    }
  }

  return box;
}

console.log(makeBox(5))// === [
//     "#####",
//     "#   #",
//     "#   #",
//     "#   #",
//     "#####"
// ])

console.log(makeBox(6))
// [
//     "######",
//     "#    #",
//     "#    #",
//     "#    #",
//     "#    #",
//     "######"
// ]

console.log(makeBox(4))
// [
//     "####",
//     "#  #",
//     "#  #",
//     "####"
// ]

console.log(makeBox(2))
// [
//     "##",
//     "##"
// ]

console.log(makeBox(1))
// [
//     "#"
// ]