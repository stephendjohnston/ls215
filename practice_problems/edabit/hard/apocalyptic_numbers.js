"use strict";

// Apocalyptic Numbers
// -------------------

/*
Problem:

A number n is apocalyptic if 2^n contains a string of 3 consecutive 6s (666 
being the presumptive "number of the beast").

Create a function that takes a number n as input. If the number is 
apocalyptic, find the index of 666 in 2^n, and return "Repent! X days 
until the Apocalypse!" (X being the index). If not, return "Crisis averted. 
Resume sinning.".

Input: Integer
Output: string message

Rules:
  - take a number and compute 2 to the power of that input
    - eg. 2^157 -> 182687704666362864775460604089535377456991567872
  - take the result and determine if it contains 666 and return the 
  appropriate string


Data Structure: 

String

Algorithm:

iterate over the string
-  on each iteration slice from the current index to index + 2 to get a string
of 3 numbers and compare it with 666
- if it's a match, the current index will be the number of days til
the apocalypse
*/

function apocalyptic(number) {
  let daysTilApocalypse;
  let strNum = String(2n**number);

  for (let i = 0; i < strNum.length - 2; i += 1) {
    let checkNum = strNum.slice(i, i + 3);

    if (checkNum === '666') {
      daysTilApocalypse = i;
      return `Repent! ${daysTilApocalypse} days until the Apocalypse!`;
    }
  }

  return "Crisis averted. Resume sinning."; 
}

console.log(apocalyptic(157n)); // "Repent! 9 days until the Apocalypse!"
console.log(apocalyptic(175n)); // "Crisis averted. Resume sinning."
console.log(apocalyptic(220n)); // "Repent! 6 days until the Apocalypse!"
console.log(apocalyptic(333n)); // "Crisis averted. Resume sinning."
console.log(apocalyptic(499n)); // "Repent! 138 days until the Apocalypse!"
console.log(apocalyptic(666n)); // "Repent! 49 days until the Apocalypse!"
console.log(apocalyptic(1003n)); //  "Crisis averted. Resume sinning."