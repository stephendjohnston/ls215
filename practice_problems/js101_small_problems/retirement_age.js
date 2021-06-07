"use strict";

let rlSync = require('readline-sync');

let age = Number(rlSync.question('What is your age?\n'));
let retirementAge = Number(
  rlSync.question('At what age would you like to retire?\n')
);

let currentYear = new Date().getFullYear();
let workYearsLeft = retirementAge - age;

let yearOfRetirement = currentYear + workYearsLeft;
console.log(`It's ${currentYear}. You will retire in ${yearOfRetirement}.`);
console.log(`You only have ${workYearsLeft} years to go!`);