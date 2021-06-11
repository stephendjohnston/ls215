"use strict";

/*
given an array of strings
  - remove the vowels from each string in the array
  - return the array of strings with vowel removed

map over the array
- for each iteration, remove the vowels from the string and return the 
vowel-less string

OR

without using replace:
map over array
  - on each iteration map over the array of 
*/

function removeVowels(array) {
  return array.map(str => str.replace(/[aeiou]/gi, ""));
}

// OR without replace
// Using map and filter

function removeVowels(array) {
  return array.map(str => {
    return str.split("").filter(char => {
      if ('aeiou'.indexOf(char.toLowerCase()) === -1) return char;
    }).join('');
  });
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]