"use strict";

// Spaces Apart
// ------------

/*
Problem:

Create a function that takes an arr and returns the sum of the numbers 
between two "1"s.

Examples:

spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]) ➞ 14

spaceApart(["1", 9, 20, 38, "1"]) ➞ 67

spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]) ➞ "invalid"

Notes:

Return "invalid" if:
 - A negative number exists inside arr.
 - The number of "1"s does not equal 2.
- Ignore any other string inside arr.
- Note that "1" is not 1.


PEDAC
-----

Inputs: Array
  - contains numbers or strings
Outputs: number or string
  - sum of numbers between two '1's
  OR
  - 'invalid' for invalid inputs

Rules:
- return 'invalid' if:
  - a negative number is in the input array
  - the number of "1"s is less than 2 or greater than 2
  - if the input is not an array
- ignore any strings that are not '1'
- "1" is not the same as 1
- get the sum of the Numbers that are between two '1's

Examples:

spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]) ➞ 14
- ["1", 4, 3, 2, 3, 2, "1"] - count the sum of numbers between the '1's
-> 4 + 3 + 2 + 3 + 2 = 14

spaceApart(["1", 9, 20, 38, "1"]) ➞ 67
-> 9 + 20 + 38 = 67

spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]) ➞ "invalid"
-> -1 within array = 'invalid'

spaceApart([]) -> 'invalid'
- does not contain correct number of '1's

spaceApart([["1", 9, 20, 38, "1", 5, "1"]]) - "invalid"
- has more than two "1"s

spaceApart([1, 0, 1, "1", "4", 3, "2", 3, 2, "1"]) -> 8
- ignore strings in between "1"s

spaceApart([1, 0, 1, 4, 3, 2, 3, 2, "1"]) -> "invalid"
- has less than two "1"s

Mental Model:
Validate input. Count how many "1"s are in the input array, it the count does
not equal 2, return "invalid". Check if every element is >= 0, if it returns false
return "invalid". If the length of the input array === 0, return "invalid".

Get the index of the first "1" using indexOf and set to startIndex. Get
the last index of "1" using lastIndexOf and set to endIndex. Slice the array
from startIndex + 1 to endIndex and reduce the Numbers to a sum and
return the sum.

Algorithm:

- if array.length === 0, return "invalid"
- count the number of "1"s
  - array.filter(el => el === "1").length
  - if the length !== 2, return "invalid"
- check if every element is >= 0
  - array.every(el => el >= 0)
  - if it returns false, return "invalid"
- get the index of the first "1" and set to startIndex
  - array.indexOf("1")
- get the index of the last "1" from the array and set that index
to endIndex
  - use lastIndexOf('1')
- slice the input array from startIndex to endIndex and use reduce
to get the sum of the numbers
  - array.slice(start, end).reduce((acc , val) => {
    if (typeof val === "number") {
      return acc + val;
    }

    return acc;
  })

*/

function validateInput(input) {
  return Array.isArray(input) && input.length !== 0 && !input.some(el => el < 0)
         && input.filter(el => el === "1").length === 2;
}

function spaceApart(array) {
  if (!validateInput(array)) return "invalid";

  let startIndex = array.indexOf('1');
  let endIndex = array.lastIndexOf('1');

  return array.slice(startIndex, endIndex).reduce((acc, val) => {
    if (typeof val === 'number') return acc + val;
    return acc;
  }, 0);
}

console.log(spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]))// 14)
console.log(spaceApart(["1", 9, 20, 38, "1"]))// 67)
console.log(spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]))// "invalid")
console.log(spaceApart(["1"]))// "invalid")
console.log(spaceApart([4, 3, "1", "2", 4, "1", "2", "9"]))// 4
console.log(spaceApart(["1", -593, 1, "1", 4, 3, 2, 33, 2]))// "invalid"
console.log(spaceApart(["2", "a", 1, "1", 1, 3, 49, "1"]))// 53
console.log(spaceApart(["1", 593, 1, "1", 4, 3, -2, 33, 2]))// "invalid"
