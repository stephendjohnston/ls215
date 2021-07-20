"use strict";

// Vertical Text
// -------------

/*
Problem:
--------

Create a function that converts a string into a matrix of characters that 
can be read vertically. Add spaces when characters are missing.

Examples:
---------

verticalText("Holy bananas") ➞ [
  ["H", "b"],
  ["o", "a"],
  ["l", "n"],
  ["y", "a"],
  [" ", "n"],
  [" ", "a"],
  [" ", "s"]
]

verticalText("Hello fellas") ➞ [
  ["H", "f"],
  ["e", "e"],
  ["l", "l"],
  ["l", "l"],
  ["o", "a"],
  [" ", "s"]
]


PEDAC
-----

Inputs: String
Outputs: Array of arrays
  - nested arrays will contain strings

Rules:
  - if input is invalid(not a string), return empty array
  - for every word in the string, there will be a column in the array
    - one word with 6 chars will mean 6 nested arrays with one char in
    each nested array
    - two words with 6 and 8 chars will mean 8 nested arrays with 2 chars
    in each nested array.
    - where ever there is no letter character, a space character will be used
    instead
  - each word will be separated by a space

Examples:

verticalText("Holy bananas") ➞ [
  ["H", "b"],
  ["o", "a"],
  ["l", "n"],
  ["y", "a"],
  [" ", "n"],
  [" ", "a"],
  [" ", "s"]
]

=> 2 words means 2 columns. The longest word is 7 characters meaning 7 rows
or 7 nested arrays
- split the string on spaces to get an array of words
- determine the longer of the two words and loop that many times
- push the character at the current index of each word to a new array
- if a character is undefined, when we get 'n' in bananas, there will be 
no chars left in holy so it will return undefined
  - replace undefined with space char

verticalText(45643) => []

verticalText('Hello there sir') => [
  ['H', 't', 's'],
  ['e', 'h', 'i'],
  ['l', 'e', 'r'],
  ['l', 'r', ' '],
  ['o', 'e', ' '],
]

=> 3 words, 3 columns
=> longest word 5 chars, 5 nested arrays
- index 0 of each word => ['H', 't', 's']
- index 1 of each word => ['e', 'h', 'i']
- index 3 of each word => ['l', 'r', ' '] space because no index 3 of sir

Mental Model:

Create an empty array that will hold the nested arrays.
split the string into array of words. Create a loop that will loop equal to
the length of the longest word. On every loop, push the letter at the current
loop value of each word into an array. Check to see if any values are undefined.
If a value is undefined, replace with space char. Push that array into result
array. 

Data Structures:
Array
  - main array will contain nested arrays
  - nested arrays will contain string characters

Algorithm:
- const result = [];
- const wordsArray = inputArr.split(' ');
- Find the longest string
  - use reduce to determine longest string
    - wordsArray.reduce((longest, word) => longest.length > word.length ? longest.length : word.length)
- create for loop that iterates to longest word length
  - create a an empty array that will hold the chars
    - iterate over the words array and take the char at the current index of
    the loop and push it to the empty char array
  - check for undefined values and replace with ' '
    - iterate over char array, if the value === undefined, replace
    with " "
- push char array to result array
- return result array
*/

function verticalText(text) {
  if (typeof text !== 'string') return [];
  const matrixArray = [];
  const wordsArray = text.split(' ');

  for (let i = 0; i < iterations(wordsArray); i += 1) {
    let nestedArray = [];
    wordsArray.forEach(word => {
      if (word[i] === undefined) {
        nestedArray.push(' ');
      } else {
        nestedArray.push(word[i]);
      }
    });

    matrixArray.push(nestedArray);
  }

  return matrixArray;
}

const iterations = array => array.reduce((previous, next) => {
    return previous.length > next.length ? previous : next;
  }).length

console.log(verticalText(5232432)) // []
console.log(verticalText("Holy bananas"))// [['H', 'b'], ['o', 'a'], ['l', 'n'], ['y', 'a'], [' ', 'n'], [' ', 'a'], [' ', 's']])
console.log(verticalText("Hello fellas"))// [['H', 'f'], ['e', 'e'], ['l', 'l'], ['l', 'l'], ['o', 'a'], [' ', 's']])
console.log(verticalText("I hope you have a great day"))// [['I', 'h', 'y', 'h', 'a', 'g', 'd'], [' ', 'o', 'o', 'a', ' ', 'r', 'a'], [' ', 'p', 'u', 'v', ' ', 'e', 'y'], [' ', 'e', ' ', 'e', ' ', 'a', ' '], [' ', ' ', ' ', ' ', ' ', 't', ' ']])
console.log(verticalText("Piri piri over there"))// [['P', 'p', 'o', 't'], ['i', 'i', 'v', 'h'], ['r', 'r', 'e', 'e'], ['i', 'i', 'r', 'r'], [' ', ' ', ' ', 'e']])
console.log(verticalText("Skill the baboon king"))// [['S', 't', 'b', 'k'], ['k', 'h', 'a', 'i'], ['i', 'e', 'b', 'n'], ['l', ' ', 'o', 'g'], ['l', ' ', 'o', ' '], [' ', ' ', 'n', ' ']])
console.log(verticalText("He took one for the team"))// [['H', 't', 'o', 'f', 't', 't'], ['e', 'o', 'n', 'o', 'h', 'e'], [' ', 'o', 'e', 'r', 'e', 'a'], [' ', 'k', ' ', ' ', ' ', 'm']])
console.log(verticalText("Schneid! 700 in to the face!"))// [['S', '7', 'i', 't', 't', 'f'], ['c', '0', 'n', 'o', 'h', 'a'], ['h', '0', ' ', ' ', 'e', 'c'], ['n', ' ', ' ', ' ', ' ', 'e'], ['e', ' ', ' ', ' ', ' ', '!'], ['i', ' ', ' ', ' ', ' ', ' '], ['d', ' ', ' ', ' ', ' ', ' '], ['!', ' ', ' ', ' ', ' ', ' ']])
console.log(verticalText("I hope you are ready for your daily dose of skill"))// [['I', 'h', 'y', 'a', 'r', 'f', 'y', 'd', 'd', 'o', 's'], [' ', 'o', 'o', 'r', 'e', 'o', 'o', 'a', 'o', 'f', 'k'], [' ', 'p', 'u', 'e', 'a', 'r', 'u', 'i', 's', ' ', 'i'], [' ', 'e', ' ', ' ', 'd', ' ', 'r', 'l', 'e', ' ', 'l'], [' ', ' ', ' ', ' ', 'y', ' ', ' ', 'y', ' ', ' ', 'l']])
console.log(verticalText("0 11 222 3333 44444 6666666 77777777 888888888 9999999999"))// [['0', '1', '2', '3', '4', '6', '7', '8', '9'], [' ', '1', '2', '3', '4', '6', '7', '8', '9'], [' ', ' ', '2', '3', '4', '6', '7', '8', '9'], [' ', ' ', ' ', '3', '4', '6', '7', '8', '9'], [' ', ' ', ' ', ' ', '4', '6', '7', '8', '9'], [' ', ' ', ' ', ' ', ' ', '6', '7', '8', '9'], [' ', ' ', ' ', ' ', ' ', '6', '7', '8', '9'], [' ', ' ', ' ', ' ', ' ', ' ', '7', '8', '9'], [' ', ' ', ' ', ' ', ' ', ' ', ' ', '8', '9'], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '9']])