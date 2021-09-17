"use strict";

// Good Vs Evil

function goodVsEvil(good, evil) {
  const goodWorthValues = [1, 2, 3, 3, 4, 10];
  const evilWorthValues = [1, 2, 2, 2, 3, 5, 10];
  let worthScore = (a, v) => a.reduce((acc, num, idx) => acc + (Number(num) * v[idx]), 0);
  let goodWorth = worthScore(good.split(' '), goodWorthValues);
  let evilWorth = worthScore(evil.split(' '), evilWorthValues);
  
  if (goodWorth > evilWorth) {
    return 'Battle Result: Good triumphs over Evil';
  } else if (evilWorth > goodWorth) {
    return 'Battle Result: Evil eradicates all trace of Good';
  } else {
    return 'Battle Result: No victor on this battle field';
  }
}

// Top Codewars Solution

function goodVsEvil(good, evil) {  
  var getWorth = function( side, worth ) {
    return side.split(' ').reduce( function(result, value, index) { 
      return result + (worth[index] * value);
    }, 0);
  }

  var result = getWorth( good, [1,2,3,3,4,10] ) - getWorth( evil, [1,2,2,2,3,5,10] );

  return result > 0 ? "Battle Result: Good triumphs over Evil" :
         result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
                      "Battle Result: No victor on this battle field";

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')) // 'Battle Result: Evil eradicates all trace of Good'
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')) // 'Battle Result: Good triumphs over Evil';
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')) // 'Battle Result: No victor on this battle field'
console.log(goodVsEvil('')) // 'Battle Result: No victor on this battle field'