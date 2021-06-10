"use strict";

function leadingSubstrings(string) {
  let substrings = [];

  for (let i = 1; i <= string.length; i += 1) {
    substrings.push(string.substring(0, i));
  }

  return substrings;
}

// Using forEach to build the substrings on each iteration by adding a char

function leadingSubstrings(string) {
  let substrings = [];
  let subStr = '';

  [...string].forEach(char => {
    subStr += char;
    substrings.push(subStr);
  });

  return substrings;
}

// Using reduce

function leadingSubstrings(string) {
  return [...string].reduce((substrings, _, idx) => {
    let subStr = string.slice(0, idx + 1);
    return substrings.concat(subStr);
  }, []);
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]