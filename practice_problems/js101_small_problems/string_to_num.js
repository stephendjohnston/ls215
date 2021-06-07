"use strict";

// multiplier increases each iteration: 1 => 10 => 100 => 1000 => 10000 ...

const DIGITS = { 
                  0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 
                  5: 5, 6: 6, 7: 7, 8: 8, 9: 9
                }

function stringToInteger(string) {
  let integer = 0;
  let multiplier = 1;

  for (let i = string.length - 1; i >= 0; i--) {
    integer += DIGITS[string[i]] * multiplier;
    multiplier *= 10;
  }

  return integer;
}

// OR

function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

// Further Exploration

const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
};

function hexadecimalToInteger(hexadecimal) {
  let arrayOfDigits = hexadecimal.split("").map(char => DIGITS[char.toUpperCase()]);

  return arrayOfDigits.reverse().reduce((val, num, idx) => {
    return val + (num * (16**idx));
  }, 0);
}

console.log(hexadecimalToInteger('4D9f') === 19871);
console.log(hexadecimalToInteger('5A2E') === 23086);
console.log(hexadecimalToInteger('9BC') === 2492);