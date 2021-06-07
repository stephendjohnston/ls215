"use strict";

function triangle(width) {
  for (let i = 1; i <= width; i += 1) {
    console.log(' '.repeat(width - i) + '*'.repeat(i));
  }
}

triangle(5);
triangle(9);