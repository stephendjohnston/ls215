"use strict";
/*
Write a program that cleans up user-entered phone numbers so that they can 
be sent as SMS messages. Other than digits, the number may also contain 
special character such as spaces, dash, dot, and parentheses that should be 
ignored.

The rules are as follows:

- If the phone number is less than 10 digits, assume that it is a bad number.
- If the phone number is 10 digits, assume that it is good.
- If the phone number is 11 digits and the first number is 1, trim the 1 and 
use the last 10 digits.
- If the phone number is 11 digits and the first number is not 1, then it is 
a bad number.
- If the phone number is more than 11 digits, assume that it is a bad number.

For bad numbers, just a return a string of 10 0s.

PEDAC:
------

inputs: phone number as a string
  - contains:
    - numbers
    - spaces
    - dashes
    - dots
    - parantheses
outputs: cleaned phone number of 10 digits or 11 digits if first digit is 1 as string
  - cleaned phone number means no:
    - spaces
    - dashes
    - dots
    - parantheses

Rules:
  Bad Numbers are numbers that are:
    - less than 10 digits
    - greater than 11 digits
    - 11 digits starting with a number other than 1
  Good numbers are numbers that are:
    - 10 digits
    - 11 digits that start with a 1
      - trim the 1 and return the remaining 10 digits as a string
  Additional rules:
    - remove all non digits from the number
    - return the number as an integer if phone number is good
    - return a string of ten 10's if the phone number is bad


There are no test cases or examples given so I'm going to assume if we are
given a number that looks like this:

'(513)-456-2345'

that we want to return a number that looks like this:

'5134562345'

If that is the case then we can add a few more rules above.


Data Structure:

input: string
  - use replace method to replace all non-digits with ''
  - use length property to validate phone number length
output: string

test cases:
We'll assume all inputs will be strings with at least one character.


Replace parantheses and dashes
cleanPhoneNumber('(345)-454-1234') => '3454541234'

Replace Spaces
cleanPhoneNumber('433 453 5342') => '433453 5342'

Replace Dots
cleanPhoneNumber('455.324.5324') => '4553245324'

11 digits starting with a 1
cleanPhoneNumber('1(549)-123-4567') => '5491234567'

11 digits starting with digit other than 1
cleanPhoneNumber('6(456)-123-4567') => '0000000000'

Less than 10 digits
cleanPhoneNumber('12345678') => '0000000000'

More than 11 digits
cleanPhoneNumber('23425238924') => '0000000000'

Algorithm:

- replace all non-digits with ''
- verify that phone number is a good number
  - 10 digits, or 11 digits with 1 as the first digit
  - if 11 digits, trim the 1
- return the number as a string
*/



function cleanPhoneNumber(number) {
  let cleanedNumber = number.replace(/\D/g, '');
  
  console.log(validateNumber(cleanedNumber));
  return validateNumber(cleanedNumber);
}

function validateNumber(number) {
  let len = number.length;

  if (len === 10) {
    return number;
  } else if (len === 11 && number[0] === '1') {
    return number.slice(1);
  } else {
    return '0000000000';
  }
}

if (len === 11 && number[0] === '1') {
    return number.slice(1);
  } else if (len < 10 || len >= 11) {
    return '0000000000';
  } else {
    return number;
  }

cleanPhoneNumber('(345) -454-1234');
cleanPhoneNumber('433 453 5342a');
cleanPhoneNumber('455.324.5324 ');
cleanPhoneNumber('1(549)-123-4567');
cleanPhoneNumber('6(456)-123-4567');
cleanPhoneNumber('12345678');
cleanPhoneNumber('23425238924');