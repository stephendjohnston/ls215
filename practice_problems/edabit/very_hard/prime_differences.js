"use strict";

function primalStrength(number) {
  let primeAfter = number + 1;
  let primeBefore = number - 1;

  while (!isPrime(primeAfter)) {
    primeAfter += 1;
  }

  while (!isPrime(primeBefore)) {
    primeBefore -= 1;
  }

  let differenceBefore = number - primeBefore;
  let differenceAfter = primeAfter - number;
  
  if (differenceAfter > differenceBefore) {
    return 'Weak';
  } else if (differenceBefore > differenceAfter) {
    return 'Strong';
  } else {
    return 'Balanced';
  }
}

function isPrime(num) {
  if (num === 0 || num === 1) {
      return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(primalStrength(211)); // "Balanced"
console.log(primalStrength(17)); // "Strong"
console.log(primalStrength(19)); // "Weak"
