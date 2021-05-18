"use strict";

/*
The Luhn formula is a simple checksum formula used to validate a variety of 
identification numbers, such as credit card numbers Canadian Social 
Insurance Numbers.

The formula verifies a number against its included check digit, which is 
usually appended to a partial number to generate the full number. This 
number must pass the following test:

- Counting from the rightmost digit and moving left, double the value of every 
second digit
- For any digit that thus become 10 or more, subtract 9 from the result
  - 1111 becomes 2121
  - 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)

- Add all these digits together
  - 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
  - 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

If the total (the checksum) ends in 0 (put another way, if the total modulo 
10 is congruent to 0), then the number is valid according to the Luhn Formula; 
else it is not valid. Thus, 1111 is not valid (as shown above, it comes out 
to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid 
per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" 
as valid. You can ignore all non-numeric characters in the input string.

PEDAC
-----

inputs: string of digits
  - may contain non-numeric characters
outputs: boolean - true for valid and false for invalid
or string 'valid' and string 'invalid'.

Rules:
  - ignore all non-numeric characters
  - count digits from left to right
  - double each digit
    - if the digit doubled is >= 10, subtract 9 from that number
  - add all digits together to get checksum
    - if the checksum ends with 0 (modulo 10 is congruent to 0) then the
    number is valid.

Data Structures:

string: remove all non-numeric characters
array: split the string into array of char
  - reverse the array of chars
  - map over the array of chars doubling every number at an odd index

Examples:

luhnFormula("2323 2005 7766 3554") => 60 => valid

Algorithm:

- remove all non-numeric characters with replace(regex)
- split the string into array of digits
- reverse array
- map over array
  - convert each digit to a number
    - on odd indexes, double each number
      - if the number is >= 10, subtract 9 from that number
    - on even indexes just return the number
- reduce the array to a sum total
- check if the number modulo is congruent to 0
*/

function checksum(idNumber) {
  let digits = idNumber.replace(/\D/g, '').split('');

  let checksum = digits.reverse().map((num, idx) => {
    num = Number(num)
    if (idx % 2 === 1) {
      let doubled = num * 2;
      return doubled >= 10 ? doubled - 9 : doubled;
    }

    return num;
  }).reduce((acc, val) => acc + val);

  return checksum % 10 === 0;
}

// Can take out the map since we're only interested in the sum of
// the numbers. Mapping breaks the problem down so it's easier to digest,
// but is not neccessary.
// Also could use match instead of replace to cut out one of the splits

function checksum(string) {
  let digits = string.match(/\d/g).join('').split('').map(Number).reverse();

  let checksum = digits.reduce((acc, val, idx) => {
    if (idx % 2 === 1) {
      val *= 2;
    }

    return val >= 10 ? acc + val - 9 : acc + val;
  }, 0);

  return checksum % 10 === 0;
}

// checksum("2323 2005 7766 3554"); // valid
// checksum('1111'); // invalid
// checksum('8763'); // valid

/*
Further Exploration:

Write a function that can add a check digit to make the number valid per
the luhn formula and return the original number plus that digit. This should
give "2323 2005 7766 3554" in response to "2323 2005 7766 355".

create a for loop that will loop from 1-9
  - on each loop add the index to the front of the number (which is really
  the end of the number because it's reversed)
  - perform the checksum on this array of numbers using the checksum function
    - if the checksum is true
      - reverse the array and join it
    - if the checksum is false
      - shift the first element out of the array and go back to the start of
      the loop

*/

function checkDigit(string) {
  if (checksum(string)) return string;

  for (let i = 0; i <= 9; i += 1) {
    let testString = string + String(i);

    if (checksum(testString)) {
      return testString.replace(/[^0-9 ]/g, '');
    }
  }
}

console.log(checkDigit("2323 -2005 7766 351")) // "2323 2005 7766 3554"
console.log(checkDigit("876")); // 8763
console.log(checkDigit("111")); // 1115