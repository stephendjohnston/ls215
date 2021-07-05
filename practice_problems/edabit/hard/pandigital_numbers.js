"use strict";

// Pandigital Numbers
// ------------------

/*
Problem:

A pandigital number contains all digits (0-9) at least once. Write a function 
that takes an integer, returning true if the integer is pandigital, and false 
otherwise.

Input: Integer
Output: boolean

Rules:
  - return true if the input contains all the digits from 0-9 at least
  once
  - false otherwise


Algorithm:
- convert to string
- get rid of all duplicate numbers
- if length === 10, then true, otherwise false;
*/

function isPandigital(number) {
  return [...String(number)].filter((num, idx, arr) => arr.indexOf(num) === idx).length === 10;
}

isPandigital(84847473937); // false
isPandigital(546732965015); // false)
isPandigital(6781235184590); // true)
isPandigital(9432821089765); // true)
isPandigital(629764); // false
isPandigital(90864523148909); // false
isPandigital(7296012); // false
isPandigital(647380265483206); // false
isPandigital(38165975424790); // true
isPandigital(8146327815320); // false
isPandigital(768431605430); // false
isPandigital(4920124852367763); // true
isPandigital(60543981597247); // true
isPandigital(10282343456789); // true