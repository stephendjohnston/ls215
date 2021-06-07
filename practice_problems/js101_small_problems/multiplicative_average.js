"use strict";

function multiplicativeAverage(array) {
  return (array.reduce((acc, num) => {
    return acc * num;
  }) / array.length).toFixed(3);
}

// A more readable version

function multiplicativeAverage(array) {
  let product = array.reduce((acc, el) => acc * el);

  return (product / array.length).toFixed(3);
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"