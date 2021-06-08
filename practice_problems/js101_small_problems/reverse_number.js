"use strict";

// using 12345
// [...String(number)] => ['1', '2', '3', '4', '5']
// reverse() => ['5', '4', '3', '2', '1']
// join('') = > '54321'
// All of which is wrapped in Number() => 54321

function reverseNumber(number) {
  return Number([...String(number)].reverse().join(''));
}

// Function above broken down

function reverseNumber(number) {
  let stringArray = [...String(number)];
  let stringReversed = stringArray.reverse().join('');
  let numberReversed = Number(stringReversed);
  return numberReversed;
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1