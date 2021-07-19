"use strict";

// Complete the Word
// -----------------

/*
Problem:
--------

An input string can be completed if additional letters can be added and no 
letters need to be taken away to match the word. Furthermore, the order of 
the letters in the input string must be the same as the order of letters in 
the final word.

Create a function that, given an input string, determines if the word can be 
completed.

Examples
canComplete("butl", "beautiful") ➞ true
// We can add "ea" between "b" and "u", and "ifu" between "t" and "l".

canComplete("butlz", "beautiful") ➞ false
// "z" does not exist in the word beautiful.

canComplete("tulb", "beautiful") ➞ false
// Although "t", "u", "l" and "b" all exist in "beautiful", they are 
incorrectly ordered.

canComplete("bbutl", "beautiful") ➞ false
// Too many "b"s, beautiful has only 1.

Notes:
------
- Both string input and word will be lowercased.


PEDAC
-----

Inputs: Two strings
Outputs: Boolean

Rules:
  -  input string can be completed if additional letters can be added and no 
  letters need to be taken away to match the word.
  -  the order of the letters in the input string must be the same as the 
  order of letters in the final word
  - if the inputs are not strings, return false
  - first input must contain the first and last letter of the second string
  otherwise it is false


Examples:

canComplete("butl", "beautiful") ➞ true
// We can add "ea" between "b" and "u", and "ifu" between "t" and "l".

canComplete(['hel'], 'shell') => false
// array as input

canComplete("butlz", "beautiful") ➞ false
// "z" does not exist in the word beautiful.

Mental Model:

This is a problem of validation. We can check to see if the first input string
has any letters that aren't in the second string. If it does, return false.
We can then check the order of the characters by getting an array if indexes
of the letters in the first string and where they appear in the second string.
If the array of indexes are not in ascending order, then the letters are not
in order. We also have to check to make sure that that first string does not
contain any extra of the same character. If it does, then return false. 


Algorithm:
Check to see if first string has any characters that are not in second string
  - 

Build the first string and see if it is equal to the second string
- iterate over the second string
- check characters in each string at the same index
*/

function outOfOrder(indexes) {
  if (indexes[0] === -1) return true;

  for (let i = 0; i < indexes.length - 1; i += 1) {
    if (indexes[i] > indexes[i + 1]) {
      return true;
    }
  }

  return false;
}

function hasExtraLetters(indexes, unique) {
  return indexes.length !== unique.length;
}

function validInput(string1, string2) {
  return (typeof string1 === 'string' && typeof string2 === 'string') &&
         (string1.length > 0 && string2.length > 0);
}

function canComplete(string1, string2) {
  if (!validInput(string1, string2)) return false; // checks that both inputs are strings

  let indexes = [...string1].map((char, idx) => {
    return string2.indexOf(char);
  })

  let unique = indexes.filter((num, idx, arr) => arr.indexOf(num) === idx);
  if (hasExtraLetters(indexes, unique)) return false; // checks to make sure first string does not have extra letters
  if (outOfOrder(indexes)) return false; // checks order of letters

  return true;
}

console.log(canComplete([], 'beautiful') === false)
console.log(canComplete(' ', 'beautiful') === false)
console.log(canComplete('butl', 'beautiful') === true)
console.log(canComplete('butlz', 'beautiful') === false)// "'z' does not exist in the word `beautiful`")
console.log(canComplete('tulb', 'beautiful') === false)// "although 't', 'u', 'l' and 'b' incorrectly ordered")
console.log(canComplete('bbutl', 'beautiful') === false)// "too many 'b's, beautiful has only 1")
console.log(canComplete('sg', 'something') === true)
console.log(canComplete('wsg', 'something') === false) // first and last do not match
console.log(canComplete('sgi', 'something') === false)// "out of order")
console.log(canComplete('sing', 'something') === true)
console.log(canComplete('siing', 'something') === false)// , "too many i's")