"use strict";

// With leadingSubstrings()

function leadingSubstrings(string) {
  let substrings = [];

  for (let i = 1; i <= string.length; i += 1) {
    substrings.push(string.substring(0, i));
  }

  return substrings;
}

function substrings(string) {
  let substrings = [];

  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    substrings.push(leadingSubstrings(string.slice(startIndex)));
  }

  return substrings.flat();
}

// OR using reduce with leadingSubstrings

function substrings(string) {
  return [...string].reduce((substrings, _, startIndex) => {
    return substrings.concat(leadingSubstrings(string.slice(startIndex)));
  }, []);
}

// Without leadingSubstrings()

function substrings(string) {
  let substrings = [];

  [...string].forEach((_, startIndex) => {
    let subStr = '';
    [...string].slice(startIndex).forEach((char) => {
      subStr += char;
      substrings.push(subStr);
    });
  });

  return substrings;
}

substrings('abcde');

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]