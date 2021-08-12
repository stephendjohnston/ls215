"use strict";

// Broken Keyboard
// ---------------

/*
Given what is supposed to be typed and what is actually typed, write a 
function that returns the broken key(s). The function looks like:

findBrokenKeys(correct phrase, what you actually typed)

Examples:
---------

findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]

findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]

findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]

Notes:
- Broken keys should be ordered by when they first appear in the sentence.
- Only one broken key per letter should be listed.
- Letters will all be in lower case.


PEDAC
-----

Inputs: Two Strings
- letters will all be in lowercase
- strings will be of equal length
Outputs: Array
- elements will be string chars
- only one broken key per letter should be listed

Rules:
- Two string inputs of equal length
- the first string is the correct spelling
- the second string is the incorrect spelling
- all letters will be lowercase
- the return array should be an array of letters 
- the return array should be ordered by when each broken key appears in
sentence
- only one broken key per letter should be listed
  eg. if the letter 'e' is missing twice in the sentence, it should only
  appear once in the return array
- if either string input is missing or is empty or has different length from
other string, return empty array

Examples:

findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]
-> 'p' appears twice in the correct spelling but only appears once in the
return array

findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]
-> two letters in the correct phrase are missing in the mispelling
so return two element array

findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]

findBrokenKeys("the big apple",  "she pig 6pp1e") -> ["t", "b", "a", "l"]

// different length inputs
findBrokenKeys("happy birthday", "hawwy birth") -> [] 

// no second string input
findBrokenKeys("happy birthday") -> [];

// empty string input
findBrokenKeys("", "hawwy birthday") -> [];

Mental Model:
create an empty array to hold the broken keys. Validate the input strings.
Create a for loop that will iterate up to the length of the first string
input. On each iteration, compare the char of the first string with char
of the second string on the current i. If they chars are different, add
this char to the broken keys, unless broken keys already contains this char.
If the chars match, go to next iteration. Continue to end of loop. REturn
broken keys array.

Data Structure:
Array
- broken keys
  - string chars
String
- compare character of string 1 against character of string2 at equal indexes

Algorithm:
- create empty array 'brokenKeys'
- create for loop that will iterate from 0 up to length of index
  - on each iteration compare string1[i] === string2[i]
  - if brokenKeys.includes(correctChar) continue
    - if they are not eqaul
      - add string1[i] to broken keys
- return brokenKeys
*/

function findBrokenKeys(correct, incorrect) {
  const brokenKeys = [];

  for (let i = 0; i < correct.length; i += 1) {
    let correctChar = correct[i];
    let incorrectChar = incorrect[i];
    if (brokenKeys.includes(correctChar)) continue;

    if (correctChar !== incorrectChar) {
      brokenKeys.push(correctChar);
    }
  }

  return brokenKeys;
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"))// ["p"])
console.log(findBrokenKeys("starry night", "starrq light"))// ["y", "n"])
console.log(findBrokenKeys("beethoven", "affthoif5"))// ["b", "e", "v", "n"])
console.log(findBrokenKeys("mozart", "aiwgvx"))// ["m", "o", "z", "a", "r", "t"])
console.log(findBrokenKeys("5678", "4678"))// ["5"], "It should work for numbers.")
console.log(findBrokenKeys("!!??$$", "$$!!??"))// ["!", "?", "$"], "It should work for punctuation.")
