"use strict";

// Do All Bigrams Exist?
// ---------------------

/*
You are given an input array of bigrams, and an array of words.

Write a function that returns true if every single bigram from this array 
can be found at least once in an array of words.

Examples:
---------

canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true

canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
# "cu" does not exist in any of the words.

canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true

canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false

Notes:
- A bigram is string of two consecutive characters in the same word.
- If the array of words is empty, return false.


PEDAC
-----

inputs: Two Arrays
- first array: bigrams: strings of 2 alpha chars
- second array: Array of strings (words)
outputs: Boolean
- true if every single bigram can be found at least once in the array
of words
- false otherwise

Rules:
- a bigram is a string of two consecutive characters in the same word
- if the array of words is empty, return false
- if bigrams array is empty, return true?
- return true if every single bigram can be found at least once in the array
of words
- all strings will be lowercase
- return false otherwise
- if the array of words is empty, return false
- if the array of bigrams is empty, return true?
- if there is an invalid bigram in the array, it won't matter
for the comparison
- any inputs that are not arrays, return false

Examples:

canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true
-> 'at' appears in 'hat' at indexes 0-1
-> 'be' appears in 'beautiful' at indexes 0-1
-> 'th' appears in 'the' at indexes 0-1
-> 'au' appears in 'beautiful' at indexes 2-3

canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
# "cu" does not exist in any of the words.

canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true

canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false

canFind([], ["milk", "chocolate", "cooks"]) -> true?

canFind(["oo", "mi", "ki", "la"], []) -> false

canFind({}, undefined) -> false


Mental Model: 
Iterate over the array of bigrams. On each iteration, iterate over the array
of words. On each iteration, iterate over each word using a for loop, that
will loop up to the word.length - 1 and will increment by 1. On every loop get
2 char strings of the char at the current index and the char at the current
index + 1. Compare this 2 char string against the current bigram. If the
strings match, add this bigram to a an array and break out of this loop,
and the next outer loop to get to the next bigram.

Algorithm:
- create an empty array 'result'
- iterate over the bigrams array using forEach
  - create a for loop that will loop over each word in the words array
    - for each word, use a for loop to iterate over the letters of the array
      - on each loop, get the chars from the current index to the current index
      + 1 and compare this 2 char string from the word with the bigram
      - if they are equal, add this bigram to the 'result' and break
    - break out of the next loop if result includes current bigram
- if result array length is equal to bigrams array length, return true
- return false otherwise
*/

function validateInput(bigrams, words) {
  return (Array.isArray(bigrams) || Array.isArray(words)) && words.length !== 0;
}

function bigramFound(bigram, word) {
  for (let i = 0; i < word.length - 1; i += 1) {
    let twoCharStr = word.substring(i, i + 2);
    if (twoCharStr === bigram) {
      return true;
    }
  }

  return false;
}

function canFind(bigrams, words) {
  if (!validateInput(bigrams, words)) return false;

  let bigramsFound = bigrams.filter(bigram => {
    for (let i = 0; i < words.length; i += 1) {
      if (bigramFound(bigram, words[i])) {
        return bigram;
      }
    }
  });

  return bigrams.length === bigramsFound.length;
}

console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]))// ➞ true
console.log(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]))// ➞ false
console.log(canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]))// ➞ true
console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]))// ➞ false
console.log(canFind([], ["milk", "chocolate", "cooks"]))// -> true
console.log(canFind(["oo", "mi", "ki", "la"], []))// -> false
console.log(canFind({}, undefined))// -> false
console.log(canFind(["bo", "ta", "el", "st", "ca"], ["books", "table", "cap", "hostel"]))// true)
console.log(canFind(["la", "te"], ["latte"]))// true)
console.log(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]))// false)
console.log(canFind(["la"], []))// false)
console.log(canFind(["la", "at", "te", "ea"], ["latte"]))// false)
