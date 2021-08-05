"use strict";

// Word to Bitstring to Boolean Array
// ----------------------------------

/*
Create a function that converts a word to a bitstring and then to a boolean 
array based on the following criteria:

1. Locate the position of the letter in the English alphabet (from 1 to 26).
2. Odd positions will be represented as 1 and even positions will be represented 
as 0.
3. Convert the represented positions to boolean values, 1 for true and 0 for 
false.
4. Store the conversions into an array.

Examples:
---------

toBoolArray("deep") ➞ [false, true, true, false]
// deep converts to 0110
// d is the 4th alphabet - 0
// e is the 5th alphabet - 1
// e is the 5th alphabet - 1
// p is the 16th alphabet - 0

toBoolArray("loves") ➞ [false, true, false, true, true]

toBoolArray("tesh") ➞ [false, true, true, false]

Notes:
- The letter A is at position 1 and Z at 26.
- All input strings are in lowercase letters of the English alphabet.


PEDAC
-----

Inputs: strings
  - strings will contain alpha chars only
  - if anything else, return empty array
outputs: Array
  -  contains booleans

Rules:
- Get the index of the char in alphabet
  - if the index is odd, it will be represented as 1
  - if the index is even, it will be represented as 0
- return an array of booleans
  - 1's will be converted to true
  - 0's will be converted to false
- letter A is at position 1 and Z at position 26
- all input strings will be lowercase

Examples:

toBoolArray("deep") ➞ [false, true, true, false]
// deep converts to 0110
// d is the 4th alphabet - 0
// e is the 5th alphabet - 1
// e is the 5th alphabet - 1
// p is the 16th alphabet - 0

Mental Model:
Create a string that has all the letters of the alphabt with 'a' starting
at index 1. Split the input string into an array of chars. Map over the array
of chars. For each char, get the index of that chars position in the alphabet.
If the index % 2 === 1 then the index is odd and will return a true boolean.
If the index % 2 === 0 then the index is even and will return a false boolean.

Algorithm:

validate input
- if the string is empty, or if the input is not a string
  - return empty array
- create a string of the alpha chars with 'a' starting at index 1
- split the string into an array of chars
- map over the array of chars
  - get the index of the current char
    - alpha.indexOf(char)
    - if the index is odd, index % 2 === 1, return true
    - if the index is even, index % 2 === 0, return false
*/

function  toBoolArray(string) {
  if (typeof string !== 'string' || string.length === 0) return [];
  let alphabet = ' abcdefghijklmnopqrstuvwxyz';

  return string.split('').map(char => {
    let index = alphabet.indexOf(char);

    if (index % 2 === 1) {
      return true;
    } else {
      return false;
    }
  });
}

console.log(toBoolArray("deep"))// ➞ [false, true, true, false]
console.log(toBoolArray("loves"))// ➞ [false, true, false, true, true]
console.log(toBoolArray("tesh"))// ➞ [false, true, true, false]
console.log(toBoolArray(""))// []
console.log(toBoolArray(null))// []
console.log(toBoolArray(undefined))// []
console.log(toBoolArray(53322))// []
