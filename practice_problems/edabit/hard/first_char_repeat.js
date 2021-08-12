"use strict";

// Find the First Character that Repeats
// -------------------------------------

/*
Create a function that takes a string and returns the first character that 
repeats. If there is no repeat of a character, return "-1".

Examples:
---------
firstRepeat("legolas") ➞ "l"

firstRepeat("Gandalf") ➞ "a"

firstRepeat("Balrog") ➞ "-1"

firstRepeat("Isildur") ➞ "-1"
// Case sensitive "I" not equal to "i"

Notes:
- Tests are case sensitive.


PEDAC
-----

inputs: String
- lower and uppercase chars
- one word
- only contains alpha chars
Outputs: String
- the letter that repeats
- or '-1' if no letter repeats

Rules:
- input is one string of only alpha chars
- input may contain upper and lowercase chars
- return the first letter in the string that repeats
- return '-1' if there are no repeating chars

Examples:

firstRepeat("legolas") ➞ "l"

firstRepeat("Gandalf") ➞ "a"

firstRepeat("Balrog") ➞ "-1"

firstRepeat("Isildur") ➞ "-1"
// Case sensitive "I" not equal to "i"

firstRepeat("people") -> "p"
// both 'p' and 'e' repeat, but both occurrences of 'p' appear before both
// appearances of 'e'.

Mental Model:
Create an empty object that will hold the existence of chars.
Split the input string into an array of chars. Use a for loop to iterate
over the array of chars. On each iteration, check if the current char
exists in the object. If it does, return the current char. If it does not,
add that char to the object as the key with a value of true. After the for
loop terminates and no repeating characters have been found, return '-1'.

Data Structure:
Array
- string chars
Object
- keys: alpha chars
- values: boolean true

Algorithm:
- create an empty object 'charsFound'
- create a for loop that will iterate up to the length of the string
  - on each iteration, check if the object contains the current char
  as a key
    - charsFound[currentChar]
      - returns undefined if the char does not exist in the obj
      - returns true if the char does exist in the obj
    - if undefined is returned, add that char to the object
      - charsFound[currentChar] = true
    - if true is returned
      - return current char
- if for loop terminates return '-1'
*/

function firstRepeat(string) {
  const charsFound = {};
  const strArr = string.split('');

  for (let i = 0; i < strArr.length; i += 1) {
    let currentChar = strArr[i];
    if (charsFound[currentChar]) {
      return currentChar;
    } else {
      charsFound[currentChar] = true;
    }
  }

  return '-1';
}

console.log(firstRepeat("legolas") === "l")
console.log(firstRepeat("Balrog") === "-1")
console.log(firstRepeat("Isildur") === "-1")
console.log(firstRepeat("Gollum") === "l")
console.log(firstRepeat("Galadriel") === "a")
console.log(firstRepeat("pippin") === "p")
console.log(firstRepeat("Saruman") === "a")
