"use strict";

function randomNumber(min, max) {
  [min, max] = [min, max].sort((a, b) => a - b); // if inputs are reversed eg min = 120, max = 20
  console.log(min, max)
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let age = randomNumber(20, 120);
console.log(`Teddy is ${age} years old!`);