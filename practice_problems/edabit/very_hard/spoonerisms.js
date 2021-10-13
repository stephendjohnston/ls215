"use strict";

// Edabit > Very Hard > Spoonerisms

/*
A spoonerism is when the first letters / sounds of two words are transposed onto one another. Create a function that takes a two-word string and performs a spoonerism on the phrase.

Examples:

spoonerise("history lecture") ➞ "listory hecture"

spoonerise("loud noises") ➞ "noud loises"

spoonerise("chow mein") ➞ "mow chein"

spoonerise("edabit rules!") ➞ "redabit ules!"

Notes:

- Only two words will be parsed into the function. Don't worry about handling more than two.
- You won't always just have to swap the first letters, take care to notice which letters have been switched in the examples (notice the difference between vowel-starting and consonant-starting words).
*/

// inputs: String
// - Two Words separated by spaces
// - no numbers, only alpha chars

// outputs: String
// - Two words
// - separated by space

// Rules:
// - if inputs are not strings, return undefined
// - if input is empty string, or does not contain two words return ''
// - if more than 2 words are in the string, use the first two
// - for each of the two words, remove all the characters at the start of the word that are consonants and swap them with the other words consonants.
// - if a word starts with a vowel, no letters will be removed from that word, but it will still receive the letters from the other word assuming that the other word does not also start with a vowel.


// Examples:
// //Happy Path
// spoonerise("crushing failure"), "fushing crailure")

// //word starts with vowel
// spoonerise("christmas eve"), "istmas chreve")

// //input is not a string
// spoonerise([]), undefined

// //empty string
// spoonerise(""), "")

// //no chars in the input
// spoonerise("    "), "")

// //no alpha chars in the input
// spoonerise(";.,. -=-./"), "")

// // separated by more than one space
// spoonerise("Christmas   Steve"), "Stistmas Chreve")

// //more than two words in the input
// spoonerise("christmas eve tonight"), "istmas chreve")

// //two words that start with vowels
// spoonerise("everyone else"), "everyone else")

// //words with upper and lowercase letters
// spoonerise("Christmas eve"), "istmas Chreve")

// Data Structures:
// input is a string

// Array: split the input into an array of words

// output: string

// Mental Model:
// Validate the input, by making sure that we are working with a two word string separated by a space where each word contains alpha chars.

// Split the input into an array of words. We now have an two element array. Get all the chars from both words that are not vowels from the front of the string. If a word starts with a vowel, get an empty string. Set these chars to separate variables. Concat these letters with the other letters from the other words. Return these two words in the same order that they were given as a string separated by a space.

// Algorithm:
// - check if typeof input is string
// - return '' for any inputs that do not follow the pattern of:
//   - alphaChars + spaces + alphaChars
// - split the string on one or more spaces
// - use match to get all consonants at the start of a word up to a vowel
// - return '' if there is not match
// - concatenate the consonants from the second word with the rest of the
// the letters from the first word
// - do the same with the first consonants and the second word

function spoonerise(string) {
  if (typeof string !== 'string') return undefined;
  if (!string.match(/(\b[a-z]+\b) +(\b[a-z]+\b)/i)) return '';
  
  let [first, second] = string.split(/ +/);
  let firstConsonants = retrieveConsonants(first);
  let secondConsonants = retrieveConsonants(second);
  first = first.replace(firstConsonants, '');
  second = second.replace(secondConsonants, '');
  
  return secondConsonants + first + ' ' + firstConsonants + second;
}

function retrieveConsonants(word) {
  return word.match(/^[^aeiou]+/i) || '';
}

console.log(spoonerise("crushing failure") === "fushing crailure")
console.log(spoonerise("christmas eve") === "istmas chreve")
console.log(spoonerise("highlighter fluid") === "flighlighter huid")
console.log(spoonerise("chocolate biscuits") === "bocolate chiscuits")
console.log(spoonerise("edabit rules!") === "redabit ules!")

// //input is not a string
console.log(spoonerise([]) === undefined)

//empty string
console.log(spoonerise("") === "")

//no chars in the input
console.log(spoonerise("    ") === "")

//no alpha chars in the input
console.log(spoonerise(";.,. -=-./") === "")

// separated by more than one space
console.log(spoonerise("Christmas   Steve") === "Stistmas Chreve")

//more than two words in the input
console.log(spoonerise("christmas eve tonight") === "istmas chreve")

//two words that start with vowels
console.log(spoonerise("everyone else") === "everyone else")

//words with upper and lowercase letters
console.log(spoonerise("Christmas eve") === "istmas Chreve")