"use strict";

// String Incrementer
// ------------------

/*
Problem:
--------

Write a function which increments a string to create a new string.

If the string ends with a number, the number should be incremented by 1.
If the string doesn't end with a number, 1 should be added to the new string.
If the number has leading zeros, the amount of digits should be considered.

Examples:
---------

incrementString("foo") ➞ "foo1"

incrementString("foobar0009") ➞ "foobar0010"

incrementString("foo099") ➞ "foo100"


PEDAC
-----

Inputs: String
- if empty, return empty string
- if non-string, return empty string
- if contains only alpha chars, add 1 to end of string
- if contains alpha and number chars, increment number part by 1 and
return alpha chars with new number
- include leading zeroes
Output: String
- alpha chars and number chars

Rules:
- return empty string if input is empty or not a string
- if string ends with a number, increment number by 1 and concat the number
with the string and return as whole string
- if the string doesn't end with a number, 1 should be added to the string
- if the number has leading zeroes, eg. 0009 become -> 0010.

Examples:
No number on end of string
incrementString("foo") ➞ "foo1"
- add 1 to string and return string

Number on end with leading zeroes
incrementString("foobar0009") ➞ "foobar0010"
- isolate the number chars, iterate backwards over the string, if the char is
9, change it to zero and 1 to the next number

Number on end with leading zeroes
incrementString("foo099") ➞ "foo100"
- isolate number chars, isolate number chars 1-9, increment that number by 1
add it back to the string of zeroes, if the new number str size is bigger
than the old string size, chop off the first char until the length of new is
equal to the length of the old.

Data Structures:
String

Mental Model:

use regex to match with alpha chars and number chars and set them to separate
variables. If the number variable length === 0, add 1 to the string and return
the string. 
Take the number chars, use regex to match for numbers 1-9. Take those numbers
and add 1, then join that number back with other number chars. If the size
of this new string is bigger than the old string of number chars, chop off
the first digit of the new number char until it has the same size as the old
number chars length. Add the number chars to the string and return the string.

Algorithm:
- if string.length === 0 || typeof string !== string
  - return '';
- let alphaChars = string.match(/[a-z]/g)
- let numChars = string.match(/[0-9]/g)
- if numChars.length === 0
  - return alphaChars.join('') + '1';
- get numbers 1-9
  - get length of all numbers(0-9)
  - numChars.join('').match(/[1-9]/g)
  - if this length === 0
    - convert numChars to number, add 1, convert back to string and add
    to alphaChars and return
  - Take the numbers matched 1-9, add 1 to the number, convert back to string
    - add back to leading 0's
    - if new numStr.length > oldNumStr.length trim the new string
      - otherwise return with alphaChars

*/

function incrementString(string) {
  if (string.length === 0 || typeof string !== 'string') {
    return '';
  }

  let alphaChars = string.match(/[a-z]/g);
  let numChars = string.match(/[0-9]/g);

  if (!numChars) return string + '1';

  let strNum = String(Number(numChars.join('')) + 1);

  while (strNum.length < numChars.length) {
    strNum = '0' + strNum;
  }

  return alphaChars.join('') + strNum;
}

console.log(incrementString("foo"))// "foo1")
console.log(incrementString("foobar01002"))// "foobar01003")
console.log(incrementString("foobar00599"))// "foobar00600")
console.log(incrementString("foo099"))// "foo100")
console.log(incrementString("foo09999"))// "foo10000")