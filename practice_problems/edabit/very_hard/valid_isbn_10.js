"use strict";

/*
ISBN-10 identifiers are ten digits long. The first nine characters are 
digits 0-9. The last digit can be 0-9 or X, to indicate a value of 10.
An ISBN-10 number is valid if the sum of the digits multiplied by their 
position modulo 11 equals zero.

ISBN     : 1 1 1 2 2 2 3 3 3  9
position : 1 2 3 4 5 6 7 8 9 10

This is a valid ISBN, because:
(1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0

Inputs: String
Outputs: Boolean

Rules:
  - a valid identifier is 10 digits long
  - the first nine chars are the digits 0-9
  - the last digit can be 0-9 or 'X' to indicate a value of 10
    - since the last number can be a 10, we can accept identifiers that
    are 11 chars in length. 
  - return true if the sum of the digits multiplied by their position
  (index + 1) modulol equals 0.
    - eg. the first digit is multiplied by it's position of 1,
    the second digit multiplied by the next position in the string
    of digits, position 2. 
  - otherwise return false
  - only number chars are valid

for input to be valid:
  - cannot be less than 10 digits or greater than 11.
  - cannot contain any non-number chars except for X as the last char
  - if 11 digits (length), '10' must be the last 2 chars


Examples:

validIsbn10("1112223339") => true
(1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0

validIsbn10("0000000003") => false
(0*1 + 0*2 + 0*3 + 0*4 + 0*5 + 0*6 + 0*7 + 0*8 + 0*9 + 3*10) % 11 = 8

validIsbn10("111222333X") => 
account for "X" = 10

validIsbn10("24934982410")
- valid isbn that has 11 digits because last digit is '10'

validIsbn10("123456789") => false
- less than 10 digits

validIsbn10("A123456789") => false
- ocurrence of non-digit => 'A'

validIsbn10("12345678912") => false
- eleven digits where '10' is not the last two digits

validIsbn10("123456789123") => false
- twelve digits

Mental Model:
Validate input. If the input is not a string, return false. If the input
is less than 10, or greater than 11, return false. If the input is 11 and
the last 2 chars do not equal '10', return false. 

Checking to see if sum of digits multiplied by their position modulo 11 === 0.
Create a loop that will iterate up to the length of the input string.
On each loop, convert the digit at that index to a number and multiply it
by the index + 1. Add that product to a sum variable. Take the some and
modulo 11 to see if it is equal to zero.

Algorithm:

- create validInput function
  - if the input length is less than 10, or greater than 11, return false
  - if length is 11, and last 2 digits are not '10' return false
- create a sum variable
- create a for loop that will iterate up to the input length
  - multiply the number in the input at the current index times the
  index + 1
    - add the product to the sum
    - repeat on all iterations
- return sum % 11 === 0

*/
  

function validInput(isbn) {
  let isbnLength = isbn.length;

  return isbnLength === 10 && !isbn.slice(0, 9).match(/[^0-9]/g) && 
         (isbn[isbnLength - 1] === 'X' || isbn[isbnLength - 1].match(/[0-9]/));
}

function validIsbn10(isbnString) {
  if (!validInput(isbnString)) {
    return false;
  }

  const isbnArray = isbnString.split('');
  if (isbnArray[isbnArray.length - 1] === 'X') {
    isbnArray[isbnArray.length - 1] = '10';
  }

  let sum = isbnArray.reduce((acc, val, idx) => {
    return acc + (Number(val) * (idx + 1));
  }, 0)

  return sum % 11 === 0;
}


console.log(validIsbn10("1112223339") === true)
console.log(validIsbn10("111222333") === false)
console.log(validIsbn10("1112223339X") === false)
console.log(validIsbn10("1234554321") === true)
console.log(validIsbn10("1234512345") === false)
console.log(validIsbn10("048665088X") === true)
console.log(validIsbn10("048665088x") === false)
console.log(validIsbn10("X123456788") === false)
console.log(validIsbn10("78") === false)
console.log(validIsbn10("123456789G") === false)
console.log(validIsbn10("") === false)