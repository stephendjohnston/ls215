"use strict";

// Edabit > Hard > Words to Sentence

/*
Create a function that turns an array of words into a comma separated list, where the last word is separated by the word "and".

Examples:

wordsToSentence(["edabit"]) ➞ "edabit"

wordsToSentence(["Hello", "", "Bye"]) ➞ "Hello and Bye"

wordsToSentence(["Hello", "Bye", "See you soon"]) ➞ "Hello, Bye and See you soon"

Notes:
- null values, empty arrays or arrays with only empty or null values should return an empty string (e.g. "").

inputs: Array
- contains string elements

outputs: String
- a list of the words from the input separated by a space, where the 
last word is separated also by the word 'and'

Rules:
- if the input is not an array, return ""
- empty arrays should return ""
- arrays with ONLY non-string elements should return ""
- elements that are not strings in valid arrays should be ignored
- if there is only one element, return that element
- a valid element must contain alpha chars, otherwise ignore it


Examples:

// Happy Path
wordsToSentence(["Hello", "Bye", "See you soon"]) ➞ "Hello, Bye and See you soon"

// input is empty array
wordsToSentence([]) ➞ ""

// input is array of null values
wordsToSentence(["", null, undefined, NaN, false, 5342]) ➞ ""

// input is not array
wordsToSentence({}) ➞ ""
wordsToSentence(null) ➞ ""
wordsToSentence(undefined) ➞ ""
wordsToSentence(NaN) ➞ ""
wordsToSentence(534) ➞ ""
wordsToSentence("") ➞ ""
wordsToSentence("hello there") ➞ ""

// input has valid and null values
wordsToSentence(["Hello", "", "Bye", null]) ➞ "Hello and Bye"

// input array has one element
wordsToSentence(["edabit"]) ➞ "edabit"

Mental Model:
Filter out all elements that are not strings of alpha chars. Get all the string elements from index 0 to index -2 and join them into a string separated by spaces. Concat this string with the last element from the input array with the word " and " separating them.

Data Structures:

Array -> String

Algorithm:
- validate the input
  - if the input is not an array, return ""
  - if the input is an empty array, return ""
- Filter out non String elements
  - if the current element does not contain at least one alpha char, return false
    - /[a-z]/gi.test(word)
- get a string of the elements from index 0 to index -2 by slicing the array
  - join these elements by a space
- concat this string with the last string in the array separated by the word 'and'
*/

function wordsToSentence(words) {
  if (!Array.isArray(words)) return '';
  let validWords = words.filter(word => word && /[a-z]/gi.test(word));
  
  if (validWords.length === 0) return "";
  if (validWords.length === 1) return validWords[0];
  
  let firstWords = validWords.slice(0, -1).join(', ');
  let lastWord = validWords.slice(-1);
  
  return firstWords + ' and ' + lastWord;
}

// Happy Path
console.log(wordsToSentence(["Hello", "Bye", "See you soon"]))// ➞ "Hello, Bye and See you soon"

// input is empty array
console.log(wordsToSentence([]))// ➞ ""

// input is array of null values
console.log(wordsToSentence(["", null, undefined, NaN, false, 5342]))// ➞ ""

// input is not array
console.log(wordsToSentence({}))// ➞ ""
console.log(wordsToSentence(null))// ➞ ""
console.log(wordsToSentence(undefined))// ➞ ""
console.log(wordsToSentence(NaN))// ➞ ""
console.log(wordsToSentence(534))// ➞ ""
console.log(wordsToSentence(""))// ➞ ""
console.log(wordsToSentence("hello there"))// ➞ ""

// input has valid and null values
console.log(wordsToSentence(["Hello", "", "Bye", null]))// ➞ "Hello and Bye"

// input array has one element
console.log(wordsToSentence(["edabit"]))// ➞ "edabit"