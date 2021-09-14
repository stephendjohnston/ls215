"use strict";

// Write Number in Expanded Form

/*
You will be given a number and you will need to return it as a string in 
Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.

inputs: Number
- Whole numbers greater than 0

outputs: String
- digits and "+" signs

Rules:
- Output will be a string of digits separated by " + " signs with 2 spaces
  - the numbers will be separated into their ones, tens, hundreds etc
  - eg. 568 will be "500 + 60 + 8"
- all inputs will be whole numbers > 0


Examples:
expandedForm(70304); // Should return '70000 + 300 + 4'
i = 0
- 70304 % 10 = 4 -> add 4 plus i '0's -> '4'
- 70304 - 4 = 70300
- 70300 / 10 = 7030

i = 1
- 7030 % 10 = 0 -> if number is 0, don't add
- 7030 - 0 = 7030
- 7030 / 10 = 703

i = 2
- 703 % 10 = 3 -> add 3 plus i '0's -> '300'
- 703 - 3 = 700
- 700 / 10 = 70

i = 3
- 70 % 10 = 0 -> don't add
- 70 - 0 = 70
- 70 / 10 = 7

i = 4
- 7 % 10 = 7 -> add 7 plus i '0's -> '70000'
- 7 - 7 = 0
- 0 / 7 = 1

end of looping

Mental model:
Create an array that will hold the string values to be returned. 
Create a counter variable that will be used to determine how many
zeroes will be added to each number that is added to the array.
Create a while loop that will loop until the number is equal to 0.
On each iteration, get the remainder of the number divided by 10. 
Take the value of the counter and add that many zeroes to the 
remainder as a string. Add this number to the array. Substract the
remainder from the number and divide the number by 10 to get the next number.
If the remainder === 0, continue to the next iteration.

Algorithm:
- create empty array "strNumbers"
- create variable "zeroCounter"
- create a while loop that will iterate as long as the input number
is greater than 0
  - on each iteration, get the remainder of the number
    - remainder = number % 10
  - if remainder === 0, increment zeroCounter by 1 and continue
  - convert the remainder to a string and add remainder + '0'.repeat(zeroCounter)
  - push this value to the array "strNumbers"
  - subtract the remainder from the number to get a number that will be
  evenly divisible by 10
    - number = number - remainder
  - divide the number by 10 to get the next number
    - number = number / 10
  - increment zeroCounter by 1
- join "strNumbers" with " + " and return the string
*/

function expandedForm(number) {
  let strNumbers = [];
  let zeroCounter = 0;

  while (number > 0) {
    let remainder = number % 10;

    if (remainder === 0) {
      number -= remainder;
      number /= 10;
      zeroCounter += 1;
      continue;
    }

    strNumbers.unshift(String(remainder) + '0'.repeat(zeroCounter));

    number -= remainder;
    number /= 10;

    zeroCounter += 1;
  }

  return strNumbers.join(' + ');
}

// Refactored

function expandedForm(number) {
  return String(number)
            .split('')
            .map((digit, idx, arr) => digit + '0'.repeat(arr.length - idx - 1))
            .filter(num => Number(num) !== 0)
            .join(' + ');
}

console.log(expandedForm(12))// '10 + 2'
console.log(expandedForm(42))// '40 + 2'
console.log(expandedForm(70304))// '70000 + 300 + 4'
