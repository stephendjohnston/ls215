"use strict";

// Now I Know My ABC's
// -------------------

/*
Problem:

Write a function that takes a word string as an argument and returns true if 
the word can be spelled using the set of blocks, false otherwise. You can 
consider the letters to be case-insensitive when you apply the rules.

Input: string (upper or lowercase)
Output: boolean

Rules:
  - You can also only use each block once
    - so word with double letters would be false
  - You can only use one letter from a given block to spell a word
    - if the word contains both letters from a block then return false

Examples:

BATCH => true
BLOCKS USED => B:O, N:A, G:T, C:P, H:U
  - only one letter from each block was used

BUTCH => false
BLOCKS USED => B:O, H:U, G:T, C:P, H:U
 - block H:U used twice using both letters

Mental Model:
Create two arrays. One for the keys and one for the values of LETTERBLOCKS.
Iterate over the string. If the current character is in one of the arrays,
get the index of where that char appears in the array. Delete that char
from the array as well as the char at the same index in the other array. 
If the char is not in the array, return false
*/

const LETTER_BLOCKS = {
  B: 'O', X: 'K', D: 'Q', C: 'P', N: 'A',
  G: 'T', R: 'E', F: 'S', J: 'W', H: 'U',
  V: 'I', L: 'Y', Z: 'M'
}

function isBlockWord(word) {
  word = word.toUpperCase();
  let blockKeys = Object.keys(LETTER_BLOCKS);
  let blockValues = Object.values(LETTER_BLOCKS);

  for (let i = 0; i < word.length; i += 1) {
    if (blockKeys.includes(word[i]) || blockValues.includes(word[i])) {
      let charIndex = blockKeys.indexOf(word[i]);
      if (charIndex === -1) charIndex = blockValues.indexOf(word[i]);
      blockKeys.splice(charIndex, 1)
      blockValues.splice(charIndex, 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false