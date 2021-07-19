"use strict";

// Rearrange The Sentence
// ----------------------

/*
Problem:
--------

Given a sentence with numbers representing a word's location embedded within 
each word, return the sorted sentence.

Examples:
---------

rearrange("is2 Thi1s T4est 3a") ➞ "This is a Test"

rearrange("4of Fo1r pe6ople g3ood th5e the2") ➞ "For the good of the people"

rearrange(" ") ➞ ""

Notes:
------

- Only the integers 1-9 will be used.


PEDAC
-----

Inputs: String
  - each word in the sentence will contain a number
Outputs: String
  - sorted by the numbers contained within each word

Rules:
  - only the integers 1-9 will be used
  - sort the words in ascending order based on the numbers in each word

Example:

rearrange("is2 Thi1s T4est 3a") ➞ "This is a Test"
- 'Thi1s' contains the lowest number will appear first in the return string
- 'is2' is next etc

Mental Model:

Split the string by spaces into an array of words. Sort the array of words
based on what number appears in each word. Use regex to determine what number
is in each word. After the array is sorted, go through the words and remove
the numbers from each word. join the array and return the string

Algorithm:

- split array on spaces
- sort array in ascending order based on numbers in strings
  - use regex to return number from each string
    - /[1-9]/ match method
0

*/

function rearrange(sentence) {
  if (/[a-z]/gi.test(sentence) === false) return "";
  let wordArray = sentence.split(' ');

  wordArray.sort((word1, word2) => {
    let num1 = word1.match(/[1-9]/);
    let num2 = word2.match(/[1-9]/);

    return num1 - num2;
  });

  return wordArray.map(word => {
    return word.replace(/[1-9]/, '');
  }).join(' ');
}

console.log(rearrange("is3 Cri1stiano 4the Rona2ldo 5best."))//"Cristiano Ronaldo is the best.")
console.log(rearrange("is2 Thi1s T4est 3a"))// "This is a Test")
console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2") === "For the good of the people")
console.log(rearrange(" ") === "")
console.log(rearrange("samosa3 I1 e2at") === "I eat samosa")
console.log(rearrange("h1appy y3all! coding2") === "happy coding yall!")