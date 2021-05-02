/*
Staggered Caps Part 1
---------------------

Write a function that takes a string as an argument and returns that string 
with a staggered capitalization scheme. Every other character, starting from 
the first, should be capitalized and should be followed by a lowercase or 
non-alphabetic character. Non-alphabetic characters should not be changed, 
but should be counted as characters for determining when to switch between 
upper and lower case.

Rules:
- every other character starting from the first character should uppercase
and should be followed by a lowercase or non-alphabetic character.
- non-alphabetic characters should not be changed but should be counted
to determine which characters are upper or lowercase

Algorithm:
- split the string into array of characters
- loop over the characters starting at index 0
- use toUpperCase() to transform the current character if index % 2 === 0
- otherwise use toLowerCase() on the current character
*/

function staggeredCase(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (i % 2 === 0) {
      result += string[i].toUpperCase();
    } else {
      result += string[i].toLowerCase();
    }
  }

  return result;
}

// OR map because we're transforming! LS Solution is the same as this one.

function staggeredCase(string) {
  return string.split('').map((char, idx) => {
    if (idx % 2 === 0) return char.toUpperCase();
    return char.toLowerCase();
  }).join('');
}

// Student Solution

const staggeredCase = (str) => {
  return str.replace(/(.)(.?)/g, (_, even, odd) => {
    return even.toUpperCase() + odd.toLowerCase();
  });
};

function staggeredCase(string) {
  return string.replace(/[a-z]/gi, (char, idx) => {
    return idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
  });
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"