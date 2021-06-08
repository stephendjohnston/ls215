"use strict";
function sequence(limit) {
  let result = [];

  for (let i = 1; i <= limit; i += 1) {
    result.push(i);
  }

  return result;
}

// using map

function sequence(limit) {
  return [...Array(limit)].map( (_, idx) => idx + 1);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]