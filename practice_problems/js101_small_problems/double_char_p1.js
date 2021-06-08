"use strict";

// using capture groups with regex

function repeater(string) {
  return string.replace(/(.)/g, '$1$1');
}

// for loop

function repeater(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    result += string[i];
    result += string[i];
  }

  return result;
}

// Using map

function repeater(string) {
  return string.split('').map(char => char + char).join('');
}

// using reduce

function repeater(string) {
  return [...string].reduce((acc, char) => acc + char.repeat(2), '');
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""