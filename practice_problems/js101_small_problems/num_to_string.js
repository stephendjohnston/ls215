"use strict";

function integerToString(number) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
  let result = [];

  do {
    let digit = number % 10;
    result.push(DIGITS[digit]);
    number = Math.floor(number / 10);
  } while (number > 0)

  return result.reverse().join('');
}

// OR

let stringNums = '0123456789';
function integerToString(num) {
  num = Math.abs(num);
  let result = [];
  do {
    result.unshift(stringNums[num % 10]);
    num = Math.floor(num / 10);
  } while (num > 0)

  console.log(result.join(''));
  return result.join('');
};

integerToString(-4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"