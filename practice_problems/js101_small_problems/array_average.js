"use strict";

function average(array) {
  let sum = array.reduce((acc, num) => {
    return acc + num;
  });

  return Math.floor(sum / array.length);
}

// for loop

function average(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return Math.floor(sum / numbers.length);
}

// forEach

function average(numbers) {
  let sum = 0;
  
  numbers.forEach( num => sum += num);
  return Math.floor(sum / numbers.length);
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40