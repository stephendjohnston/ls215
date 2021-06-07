"use strict";

function stringy(num) {
  let string = '';

  for (let i = 0; i < num; i++) {
    if (i % 2 === 0) string += '1';
    if (i % 2 === 1) string += '0';
  }

  return string;
}

// OR

function stringy(size) {
  let result = "";
  for (let idx = 0; idx < size; idx++) {
    let number = ((idx % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
};

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"