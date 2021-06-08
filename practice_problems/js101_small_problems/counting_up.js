"use strict";
nfunction sequence(limit) {
  let result = [];

  for (let i = 1; i <= limit; i += 1) {
    result.push(i);
  }

  return result;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]