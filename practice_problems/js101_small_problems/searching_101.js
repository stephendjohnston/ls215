"use strict";

let rlSync = require('readline-sync');

let numbers = [];

for (let i = 1; i < 6; i++) {
  let number = rlSync.question(`Enter the ${i}${getSuffix(i)} number: `);
  numbers.push(number);
}

let lastNumber = rlSync.question('Enter the last number: ');
let isIncluded = numbers.includes(lastNumber) ? 'appears' : 'does not appear';
 
console.log(`The number ${lastNumber} ${isIncluded} in ${numbers.join(', ')}`);

function getSuffix(num) {
  switch (num) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}