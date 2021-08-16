"use strict";

// Two Distinct Elements
// ---------------------

/*
In each input array, every number repeats at least once, except for two. 
Write a function that returns the two unique numbers.

Examples:
---------

returnUnique([1, 9, 8, 8, 7, 6, 1, 6]) ➞ [9, 7]

returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) ➞ [2, 1]

returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) ➞ [5, 6]

Notes:
- Keep the same ordering in the output.


PEDAC
-----

inputs: array
- contains digits
outputs: array
- contains two digits

Rules:
- if the array is empty , return empty array
- if the input is a string of numbers, convert to array of Numbers
- if input is a number, convert the number to an array of digits
- if the input is anything else, return empty array
- the input array may contain any type of element, treat them the 
same as numbers
- return the two elements as an array from the input array that are unique
  - unique = appear once

Examples:
returnUnique([]) // []
returnUnique('12345124') // [3, 5]
returnUnique(12345124) // [3, 5]
returnUnique([1, 2, 3, 4, 5, 1, 2, 4]) // [3, 5]
returnUnique(null) // []
returnUnique(undefined) // []
returnUnique({}) // []
returnUnique(NaN) // []
returnUnique('hello world') // []
returnUnique(true) // []

Mental model:
Validate input: if the input is a anything other than an array, number, or string of numbers, return empty array. 
If the input is a number, convert to array of digits
If the input a string of numbers, convert to array of Numbers
If the input is a string of alphaChars, return empty array
create an empty object. Iterate over the array of elements. Add each element to the object and set a count to 1. If the element already exists in the object, increment the value by 1.
Get the keys of the object. Iterate over the key. get the value of each property using the key. If the value === 1, return that key.

Algorithm:
Input validation:
- if input is not an array, number, or string of numbers, return empty array
- if the input is a string of numbers, convert to array of digits
  - input.split('').map(Number)
- if the input is a number, convert to array of digits
  - String(input).split('').map(Number)
- create an empty array 'unique'
- use a for loop to iterate over each element
  - on each loop, set the currentEl to array[i]
  - get the count of the currentEl from the array
    - array.filter(el => el === currentEl).length
  - if the count === 1, push the currentEl to the unique array
- return the unique array
*/

function returnUnique(array) {
  const unique = [];

  if ((typeof array === 'object' && !Array.isArray(array)) || array === null || array === undefined || Number.isNaN(array) || typeof array === 'boolean') {
    return unique;
  } else if (typeof array === 'string' && array.match(/[a-z]/gi)) {
    return unique;
  } else if (typeof array === 'string') {
    array = array.split('').map(Number);
  } else if (typeof array === 'number') {
    array = String(array).split('').map(Number);
  }
  
  for (let i = 0; i < array.length; i += 1) {
    let currentElement = array[i];
    let count = array.filter(el => el === currentElement).length;
    
    if (count === 1) unique.push(currentElement);
  }
  
  return unique;
}

console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6]))// ➞ [9, 7]
console.log(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]))// ➞ [2, 1]
console.log(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]))// //➞ [5, 6]
console.log(returnUnique([])) // []
console.log(returnUnique('12345124')) // [3, 5]
console.log(returnUnique(12345124)) // [3, 5]
console.log(returnUnique([1, 2, 3, 4, 5, 1, 2, 4])) // [3, 5]
console.log(returnUnique(null)) // []
console.log(returnUnique(undefined)) // []
console.log(returnUnique({})) // []
console.log(returnUnique(NaN)) // []
console.log(returnUnique('hello world')) // []
console.log(returnUnique(true)) // []
