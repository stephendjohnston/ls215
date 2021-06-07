"use strict";

function integerToString(number) {
  number = Math.abs(number);  // this line can be deleted if 2nd solution with Math.sign is used
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
  let result = [];

  do {
    let digit = number % 10;
    result.push(DIGITS[digit]);
    number = Math.floor(number / 10);
  } while (number > 0)

  return result.reverse().join('');
}

function signedIntegerToString(number) {
  if (number > 0) {
    return '+' + integerToString(number);
  } else if (number < 0) {
    return '-' + integerToString(number);
  } else {
    return integerToString(number);
  }
}

// OR

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");