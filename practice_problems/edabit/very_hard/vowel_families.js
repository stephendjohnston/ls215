"use strict";

// Vowel Families
// --------------

/*
Problem:

Write a function that selects all words that have all the same vowels 
(in any order and/or number) as the first word, including the first word.

Examples:

sameVowelGroup(["toe", "ocelot", "maniac"]) ➞ ["toe", "ocelot"]

sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]) ➞ ["many"]

sameVowelGroup(["hoops", "chuff", "bot", "bottom"]) ➞ ["hoops", "bot", "bottom"]

Notes:
- Words will contain only lowercase letters, and may contain whitespaces.
- Frequency does not matter (e.g. if the first word is "loopy", then you can 
include words with any number of o's, so long as they only contain o's, and 
not any other vowels).


PEDAC
-----

Inputs: Array
  - contains strings
Outputs: Array
  - contains words that have the same vowels as the first word in the input
  array

Rules:
  - take the vowels of the first word and select any word from the array
  that has the same vowels and only those vowels, including the first word
    - eg. . if the first word is "loopy", then you can include words with 
    any number of o's, so long as they only contain o's, and not any other
    vowels
  - return an array of the words with the same vowels as the first word
  - y is not a vowel
  - all words are lowercase

Examples:
sameVowelGroup(["toe", "ocelot", "maniac"]) ➞ ["toe", "ocelot"]
vowels from first word -> 'oe'
-> first word automatically selected
-> 'ocelot' has both 'oe' -> selected
-> 'maniac' has wrong vowels -> not selected

sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]) ➞ ["many"]
vowels from 'many' -> 'a'
-> 'carriage' also contains 'i' -> not selected
-> 'emit' contains no 'a' -> not selected
-> 'apricot' contains 'io' -> not selected
-> 'animal' contains 'i' -> not selected

sameVowelGroup(["hoops", "chuff", "bot", "bottom"]) ➞ ["hoops", "bot", "bottom"]
vowels from 'hoops' -> 'oo'
-> 'chuff' no 'o' -> not selected
-> 'bot' contains 'o' -> selected
-> 'bottom' has 'o' -> selected

Mental Model:

create an empty array.
get the vowels from the first word as a string. Iterate over the array
of words. Get the vowels from the current word. Iterate over the vowels
of the current word. If the vowels from the first word include the current
vowel from the current word, continue. Otherwise return false. 

Algorithm:
- create an empty result array
- use match to get the vowels from the first word.
  - if null, return empty array
- convert vowels to string.
- create a for loop that loops the number of times equal to the input array
length
  - on each iteration use match to get the vowels from the current word
    - if null continue to next word
    - create an inner loop that iterates over the vowels from the current word
      - if !vowels.include(currentVowels[i])
      return false
    - after inner loop finishes, push current word to result
return result

*/

function sameVowelGroup(words) {
  const result = [];
  let compareVowels = words[0].match(/[aeiou]/g);
  if (!compareVowels) return result;

  compareVowels = compareVowels.join('');

  for (let i = 0; i < words.length; i += 1) {
    let currentVowels = words[i].match(/[aeiou]/g) || [];

    if (validVowels(compareVowels, currentVowels)) {
      result.push(words[i]);
    }
  }

  return result;
}

function validVowels(vowels, wordVowels) {
  for (let j = 0; j < wordVowels.length; j += 1) {
    if (!vowels.includes(wordVowels[j])) {
      return false;
    }
  }

  return true;
}

console.log(sameVowelGroup(["hoops", "chuff", "bot", "bottom"])) 
// // ["hoops", "bot", "bottom"])
console.log(sameVowelGroup(["crop", "nomnom", "bolo", "yodeller"])) 
// ["crop", "nomnom", "bolo"])
console.log(sameVowelGroup(["semantic", "aimless", "beautiful", "meatless icecream"])) 
// ["semantic", "aimless", "meatless icecream"])
console.log(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"])) 
// ["many"])
console.log(sameVowelGroup(["toe", "ocelot", "maniac"]))// ["toe", "ocelot"])
console.log(sameVowelGroup(["a", "apple", "flat", "map", "shark"]))// ["a", "flat", "map", "shark"])
console.log(sameVowelGroup(["a", "aa", "ab", "abc", "aaac", "abe"]))// ["a", "aa", "ab", "abc", "aaac"])
