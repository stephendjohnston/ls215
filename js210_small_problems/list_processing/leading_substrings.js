/*
take a string and create an array of substrings where Each substring should 
begin with the first letter of the word, and the list should be ordered from 
shortest to longest.

Algorithm:
- declare an initialize an empty array
- create a loop that iterates the same amount of times equal to the string
length.
- on each iteration, slice the string from index 0, to the current iteration
value + 1. 
- push each sliced string into the result array
- return the array
*/


function leadingSubstrings(string) {
  let substrings = [];

  for (let i = 0; i < string.length; i += 1) {
    substrings.push(string.slice(0, i + 1));
  }

  return substrings;
}

// OR

function leadingSubstrings(string) {
  return string.split('').map((char, index) => string.slice(0, index + 1));
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// LS Solution:

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}