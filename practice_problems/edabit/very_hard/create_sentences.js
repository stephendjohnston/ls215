"use strict";

// List Up an Array of Strings in a Proper Way
// -------------------------------------------

/*
Problem:
-------

Given an array of strings (nouns), list them up in a complete sentence.

Examples
--------

sentence(["orange", "apple", "pear"]) ➞ "An orange, an apple and a pear."

sentence(["keyboard", "mouse"]) ➞ "A keyboard and a mouse."

sentence(["car", "plane", "truck", "boat"]) ➞ "A car, a plane, a truck and a boat."

Notes:

- The sentence starts with a capital letter.
- Do not change the order of the words.
- A/An should be correct in all places.
- Put commas between nouns, except between the last two (there you put "and").
- The sentence ends with a .
- There are at least two nouns given.
- Every given word is lowercase.

Inputs: Array of strings
  - strings will all be lowercase
Output: String


Rules:
- The sentence starts with a capital letter.
- Do not change the order of the words.
- A/An should be correct in all places.
  - an before words that start with vowels and "a" for words that start
  with consonants
- Put commas between nouns, except between the last two (there you put "and").
- The sentence ends with a .
- There are at least two nouns given.
- Every given word is lowercase.

Algorithm:

- initialize an empty array
- create a variable to use for a/an
- if the first word starts with a vowel
  - set the variable = 'An', = 'A' if consonant
- push the first word into the array with
- loop over the array of strings
  - if idx === 0
    - push An/A + current word to array
MESSY HACK AND SLASH

Attempt 2:

- need to capitalize first word of sentence, either 'A' or 'An'
- need to check if word starts with vowel or consonant

*/

function sentence(words) {
  let sentenceArr = [];
  let article = 'A';
  if (/[aeiou]/.test(words[0][0])) {
    article = article + 'n';
  }

  sentenceArr.push(article + ' ' + words[0]);

  for (let i = 1; i < words.length - 1; i += 1) {
    let currentWord = words[i];
    article = /[aeiou]/.test(currentWord[0]) ? 'an' : 'a';

    sentenceArr.push(article + ' ' + currentWord);
  }

  let lastWord = words[words.length - 1];
  article = /[aeiou]/.test(lastWord[0]) ? 'an' : 'a';
  return sentenceArr.join(', ') + ` and ${article} ${lastWord}.`
}

console.log(sentence(["banana", "apple", "orange"]) === "A banana, an apple and an orange.")
console.log(sentence(["car", "plane"]) === "A car and a plane.")
console.log(sentence(["fox", "wolf", "elephant", "cat"]) === "A fox, a wolf, an elephant and a cat.")
console.log(sentence(["mom", "dad"]) === "A mom and a dad.")
console.log(sentence(["school", "hospital", "library"]) === "A school, a hospital and a library.")
console.log(sentence(["aa", "ee", "ii", "oo", "uu", "vv", "tt", "qw", "zz"]) === "An aa, an ee, an ii, an oo, an uu, a vv, a tt, a qw and a zz.")