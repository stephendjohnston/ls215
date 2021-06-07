"use strict";

function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num);
}

// Further Exploration

function power(number, exp) {
  let result = 1;

  for (let i = 0; i < exp; i++) {
    result = multiply(number, result);
  }

  return result;
}

// OR

function power(number, power) {
  return(multiply(number, 1) ** power);
}

console.log(square(5, 3))//=== 25); // logs true
console.log(square(-8, 4)) //=== 64); // logs true