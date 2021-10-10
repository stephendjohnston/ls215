"use strict";

// Edabit > Very Hard > Mutations Only: Zeroes to the End

function zeroesToEnd(array) {
  let zeros = [];
  let nonZeros = [];
  
  while (array.length > 0) {
    let num = array.shift();
    
    if (num === 0) {
      zeros.push(num);
    } else {
      nonZeros.push(num);
    }
  }
  
  array.push(nonZeros, zeros);
  return array.flat();
}

zeroesToEnd([1, 2, 0, 0, 4, 0, 5])// ➞ [1, 2, 4, 5, 0, 0, 0]
zeroesToEnd([0, 0, 2, 0, 5])// ➞ [2, 5, 0, 0, 0]
zeroesToEnd([4, 4, 5])// ➞ [4, 4, 5]
zeroesToEnd([0, 0])// ➞ [0, 0]