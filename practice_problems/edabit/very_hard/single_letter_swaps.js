"use strict";

// Single Letter Swaps
// -------------------

/*
Problem:
--------

Given an array of strings and an original string, write a function to output 
an array of boolean values - true if the word can be formed from the original 
word by swapping two letters only once and false otherwise.

Examples:
---------

validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE")
➞ [true, true, false, false]

// Swap "A" and "B" from "ABCDE" to get "BACDE".
// Swap "A" and "E" from "ABCDE" to get "EBCDA".
// Both "BCDEA" and "ACBED" cannot be formed from "ABCDE" using only a single swap.

validateSwaps(["32145", "12354", "15342", "12543"], "12345")
➞ [true, true, true, true]

validateSwaps(["9786", "9788", "97865", "7689"], "9768")
➞ [true, false, false, false]

Notes:
------
- Original string will consist of unique characters.


PEDAC
-----

Inputs: Array of strings, String
- String will consist of unique characters
- Array of strings, may consist of alpha or number chars
Outputs: Array of booleans
- each string in the input array will be replace by a boolean value that is the
result of checking if the string in the input array meets the condition of
1 character swap

Rules:
- Original input string will consist of unique characters
- Array of strings will contain alpha or number chars
  - not all strings in array will be same length
  - if a string from the array is a different length then the input
  String, then that string will return false
- If an empty array is input return an empty array
- if no input string is given, return empty array
- if either input is not the right type, return empty array
  - eg. Input string is a Number
  - eg. input array is not an array
- A string in the array will return a true boolean if a swap of only 2
chars can be made and that results in that string have the same chars
in the same order as the input String. 
- otherwise it will return a false boolean
- the function will return an array of boolean values
- if the input array contains non-string values, convert those values to
strings

Examples:
validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE")
➞ [true, true, false, false]
// Swap "A" and "B" from "ABCDE" to get "BACDE".
// Swap "A" and "E" from "ABCDE" to get "EBCDA".
// Both "BCDEA" and "ACBED" cannot be formed from "ABCDE" using only a single swap.

'ABCDE'
index 0 and index 1 swap
- BACDE
index 0 and index 2 swap
- CBADE
index 0 and index 3 swap
- DBCAE
index 0 and index 4 swap
- EBCDA

index 1 and index 2 swap
- ACBDE
index 1 and index 3 swap
- ADCBE
index 1 and index 4 swap
- AECDB

index 2 and index 3 swap
- ABDCE
index 2 and index 4 swap
- ABEDC

index 3 and index 4 swap
- ABCED

Mental Model:
Create an array of all the different combinations that can be made from the
input string where only 2 chars are swapped. map over the input array.
If the array of combinations, includes the current string, return true,
otherwise return false

Algorithm:
Getting the combinations of strings with 2 characters swapped.
- create an empty array to hold swapped strings
- split the input string into an array of chars
- create a for loop that will iterate the length of the input string
starting at index 0
  - set the variable to the char at the current index of the input string
    - ex. firstChar = string[0] => 'A'
  - create a second loop that will iterate up to the length of the input
  string starting at the index plus 1 of the outer loop.
    - on each loop, set the a variable to the char from the string that is at the index of
    the current loop
    - swap the chars
      - array[i] = innerloopchar
      - array[j] = outloopchar
    - join the array into a string
    - push that string to array of combinations.
- iterate over input array
  - if current string in array is in the array of combinations, return
  true, otherwise return false
- return array of booleans
*/

function validateSwaps(strArray, originalString) {
  const strCombos = [];
  originalString = originalString.toUpperCase()

  for (let i = 0; i < originalString.length - 1; i += 1) {
    let firstChar = originalString[i];
    for (let j = i + 1; j < originalString.length; j += 1) {
      let originalStrChars = originalString.split('');
      originalStrChars[i] = originalString[j];
      originalStrChars[j] = firstChar;
      strCombos.push(originalStrChars.join(''));
    }
  }

  return strArray.map(str => {
    if (strCombos.includes(str.toUpperCase())) {
      return true;
    } else {
      return false;
    }
  });
}

console.log(validateSwaps(['BAcDE', 'EBCDa', 'bcdea', 'ACbed'], 'ABCDE'))// [true, true, false, false])
console.log(validateSwaps(['BACDE', 'EBCDA', 'BCDEA', 'ACBED'], 'ABCDE'))// [true, true, false, false])
console.log(validateSwaps(['32145', '12354', '15342', '12543'], '12345'))// [true, true, true, true])
console.log(validateSwaps(['9786', '9788', '97865', '7689'], '9768'))    // [true, false, false, false])
console.log(validateSwaps(['123', '321', '132', '13', '12'], '213'))     //  [true, false, false, false, false])
console.log(validateSwaps(['123', '1234', '1235'], '12'))                // [false, false, false])
console.log(validateSwaps(['123', '123', '123'], '133'))                 // [false, false, false])
console.log(validateSwaps(['132', '321', '213'], '123'))                 //[true, true, true])