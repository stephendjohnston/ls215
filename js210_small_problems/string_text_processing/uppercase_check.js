/*
Uppercase Check
---------------

Write a function that takes a string argument and returns true if all of 
the alphabetic characters inside the string are uppercase; otherwise, 
return false. Ignore characters that are not alphabetic.

Since we only need to check alphabetic characters and can ignore everything
else, we can use regex to match any lowercase character, if there is a match 
return false, otherwise return true.
*/

function isUppercase(string) {
  return !string.match(/[a-z]/g);
}

// LS Solution

function isUppercase(string) {
  return !/[a-z]/.test(string);
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true