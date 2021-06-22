"use strict";

function oddishOrEvenish(number) {
  let sumOfDigits = [...String(number)].map(Number)
                                       .reduce((acc, val) => acc + val);

  return sumOfDigits % 2 === 0 ? 'evenish' : 'oddish';
}

console.log(oddishOrEvenish(43));      // "oddish"
console.log(oddishOrEvenish(373));     // "oddish"
console.log(oddishOrEvenish(55551));   // "oddish"
console.log(oddishOrEvenish(694));     // "oddish"
console.log(oddishOrEvenish(4433));    // "evenish"
console.log(oddishOrEvenish(11));      // "evenish"
console.log(oddishOrEvenish(211112));  // "evenish"