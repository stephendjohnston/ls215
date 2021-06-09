"use strict";

function sum(number) {
  return [...String(number)].reduce( (acc, val) => acc + Number(val), 0);
}

// OR

function sum(number) {
  return String(number).split('').map(Number).reduce((acc, num) => acc + num);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45