"use strict";

function digitList(number) {
  let digits = [];
  let digit;

  while (number > 0) {
    digit = number % 10;
    digits.unshift(digit);
    number = (number - digit) / 10;
  }

  return digits;
}

// OR using map

function digitList(number) {
  return String(number).split('').map(Number);
}

// OR using spread operator and map

function digitList(num) {
  return [...String(num)].map((char) => Number(char));
}
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]