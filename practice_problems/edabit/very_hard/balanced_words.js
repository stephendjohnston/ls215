"use strict";

// Balanced Words
// --------------

/*
Problem:

We can assign a value to each character in a word, based on their position 
in the alphabet (a = 1, b = 2, ... , z = 26). A balanced word is one where 
the sum of values on the left-hand side of the word equals the sum of values 
on the right-hand side. For odd length words, the middle character (balance 
point) is ignored.

Write a function that returns true if the word is balanced, and false if 
it's not.

Examples:

balanced("zips") ➞ true
// "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true

balanced("brake") ➞ false
// "brake" = "br|ke" = 2+18|11+5 = 20|16 = false

Inputs: string
  - one word
Outputs: boolean

Rules:
  - the value of a character is based on it's position in the alphabet
    - eg. a = 1, b = 2
  - A balanced word is one where the sum of values on the left sie of the
  word are equal to the sum of the values on the right side of the word
  - if the word has an odd number of letters, ignore the middle character
  - all words are lowercase

Data Structures:
String

Mental Model:

Take the string input and determine the middle index by dividing the string
length by 2. eg. 4 / 2 = 2 or 7 / 2 = 3.5 = 3. If the word is even, then
we can slice the string twice. First from index 0 to the middle index, and then
again from the middle index to the end. If the string length is odd, we can
again slice the string twice, from 0 to the middle, and then the middle
plus 1 to the end to avoid getting the middle character. put these
strings into a function that will return the sums and the compare the sums.

Algorithm:

- middle = Math.floor(string.length / 2);
- if the stringlength is even eg. string.length % 2 === 0
  - leftside = string.slice(0, middle)
  - rightside = string.slice(middle)
- if the string.length is odd eg. string.length % 2 === 1
  - left side = string.slice(0, middle)
  - right side = string.slice(middle + 1)
- pass the leftside and right side into a function to get the sum, separately
Function:
  - split the string into an array of chars and use reduce method
    - use letter.charCodeAt(0) to get the utf-code
    - subtract 96 from the utf code to get the value
    - add that value to the sum
  - return the sum
- compare the leftside and rightside

** I originally did charCodeAt - 96 so that a = 1, b = 2, but that's
uneccessary. 
*/

function balanced(string) {
  let middle = Math.floor(string.length / 2);
  let leftSideStr = string.slice(0, middle);
  let rightSideStr;

  if (string.length % 2 === 0) {
    rightSideStr = string.slice(middle)
  } else {
    rightSideStr = string.slice(middle + 1);
  }

  let leftSum = getSum(leftSideStr);
  let rightSum = getSum(rightSideStr);

  return leftSum === rightSum;
}

function getSum(str) {
  return [...str].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

console.log(balanced('at') === false);
console.log(balanced('forgetful') === false);
console.log(balanced('vegetation') === true);
console.log(balanced('disillusioned') === false);
console.log(balanced('abstract') === true);
console.log(balanced('clever') === false);
console.log(balanced('conditionalities') === true);
console.log(balanced('seasoning') === true);
console.log(balanced('uptight') === false);
console.log(balanced('ticket') === false);
console.log(balanced('calculate') === false);