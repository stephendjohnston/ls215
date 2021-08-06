"use strict";

// Keeping Count
// -------------

/*
Given a number, create a function which returns a new number based on the 
following rules:

For each digit, replace it by the number of times it appears in the number.
The final instance of the number will be an integer, not a string.
The following is a working example:

digitCount(136116) ➞ 312332
// The number 1 appears thrice, so replace all 1s with 3s.
// The number 3 appears only once, so replace all 3s with 1s.
// The number 6 appears twice, so replace all 6s with 2s.

Examples:

digitCount(221333) ➞ 221333

digitCount(136116) ➞ 312332

digitCount(2) ➞ 1
digitCount(0) -> 1
digitCount()

Notes
- Each test will have a positive whole number in its parameter.


PEDAC
-----

Inputs: Number
  - positive
  - no floats
  - if the input is a string number, treat as valid
  - if the input is a string number and contains other chars, get numbers
  and treat as valid
  - if the input is an array of numbers, treat as valid
  - if the input is an array of number and other chars, treat as valid
  - if the input is an object that contains properties with numbers as values
  treat as valid
  - treat everything else as invalid input and return an error message
    - "invalid input"
Outputs: Number
  - if the input is invalid, return string

Rules:
- for each digit in the input, replace that digit with the number that
represents how many times that digit appears in the number. 
- the return value will be a number
- negative numbers should return "invalid input"


Examples:

digitCount(221333) ➞ 221333
-> 2 appears twice, 1 appears once, and 3 appears thrice

digitCount(136116) ➞ 312332
-> 1 appears three times, 3 appears once, 6 appears twice

digitCount(2) ➞ 1
digitCount(0) -> 1
digitCount(-2432) -> 'invalid input'
digitCount('im not a number') -> 'invalid input'
digitCount('6788781') -> 1233231
digitCount('abc4533') -> 1122
digitCount([1, 1, 2, 4, 4, 4]) -> 221333
digitCount(['2', 3, 5, '5', 8]) -> 11221
digitCount(['1', '2','3','3']) -> 1122
digitCount(['r', 'ew', 'ef']) -> 'invalid input'
digitCount({a: 3, b: 3, c: 7, d: 6, e: 9}) -> 22111
digitCount({a: 3, b: 3, c: '7', d: 6, e: '9'}) -> 22111
digitCount({a: 3, b: 3, c: '7', d: 6, e: [1, 2, 3]}) -> 2211


Mental Model:
Validate input. if the number is < 0 return 'invalid input'.
If the input is a string, check for numbers. If there are no numbers
return 'invalid input'. If the input is an object, get the values of the object,
join them together and filter only the numbers into an array. If there are
no numbers, return an 'invalid input'. For all inputs that are not numbers, we
will no have an array of numbers and possibly string numbers. Split the input
number into an array of digits (strings). Iterate over the array
of digits. use filter to get an array of the count of each digit that appears
in the number and use the length on that array. Return the count for each
digit. Join the array of counts. Convert to a number. 

Algorithm:
- if the input number < 0 return 'invalid input'
- if the input is a string, check for numbers using regex
  - string.match([0-9]), if it returns null, return 'invalid input'
- if the input is an object, array
  - use values to get the values
  - filter over the values and select all values that are numbers using regex
  and test
  - if the array is empty, return "invalid input"
  - if the array is not empty continue because we now have an array of numbers
  and string numbers
- map over the array of values and convert each value to a string
- map over the array of string numbers
  - on each iteration return an array of all the values that are equal to
  the current digit
    - get the length of that array and return that digit
- join the array, and convert to a number

*/

function validateInput(input) {
  return typeof input !== 'boolean' && typeof input !== 'function'
         && input !== undefined && input !== null;
}

function digitCount(digits) {
  if (!validateInput(digits)) return 'invalid input';
  if (digits < 0) return 'invalid input';
  if (typeof digits === 'object') {
    digits = Object.values(digits).filter(el => {
      if (typeof el !== 'object') {
        return /[0-9]/g.test(el);
      }
    });
    if (digits.length === 0) return 'invalid input'
  }

  if (typeof digits === 'string') {
    digits = digits.match(/[0-9]/g);
    if (!digits) {
      return 'invalid input'
    }
  }

  if (typeof digits === 'number') {
    digits = String(digits).split('')
  }

  let result = digits.map(digit => {
    return digits.filter(num => num === digit).length;
  })

  return Number(result.join(''));
}

digitCount(221333)// ➞ 221333
// -> 2 appears twice, 1 appears once, and 3 appears thrice

digitCount(136116)// ➞ 312332
// -> 1 appears three times, 3 appears once, 6 appears twice

console.log(digitCount(2))// ➞ 1
console.log(digitCount(0))// -> 1
console.log(digitCount(-2432))// -> 'invalid input'
console.log(digitCount('im not a number'))// -> 'invalid input'
console.log(digitCount('6788781'))// -> 1233231
console.log(digitCount('abc4533'))// -> 1122
console.log(digitCount([1, 1, 2, 4, 4, 4]))// -> 221333
console.log(digitCount(['2', 3, 5, '5', 8]))// -> 11221
console.log(digitCount(['1', '2','3','3']))// -> 1122
console.log(digitCount(['1', '2', 't','3']))// -> 111
console.log(digitCount(['r', 'ew', 'ef']))// -> 'invalid input'
console.log(digitCount({a: 3, b: 3, c: 7, d: 6, e: 9}))// -> 22111
console.log(digitCount({a: 3, b: 3, c: '7', d: 6, e: '9'}))// -> 22111
console.log(digitCount({a: 3, b: 3, c: '7', d: 6, e: [1,2,3]}))// -> 2211
console.log(digitCount(null)) // "invalid input"
console.log(digitCount(undefined)) // "invalid input"
console.log(digitCount(true)) // "invalid input"
