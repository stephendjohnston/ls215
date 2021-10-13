"use strict";

// Most Common Last Vowel
// Create a function that takes in a sentence as input and returns the most common last vowel in the sentence as a single character string.

// Examples
// commonLastVowel("Hello World!") ➞ "o"
// commonLastVowel("Hello World!e") -> 'e'
// commonLastVowel("Hello World!e Goodbye I") -> 'I'
// commonLastVowel("Hello Worlde! Goodby") -> 'e'


/*
inputs: string
- sentence
- separated by spaces for each word

outputs: STring
- single character

Rules:
- any inputs other than a string, return undefined
- empty string returns empty string ''
- if no vowels found, return empty string
- input is a string of alpha characters
- outputs is a single char string (vowel)
- find the word in the string that with the highest index that has a vowel ending, and return that vowel. 

Mental Model:
Validate the input to make sure it is a string. If the input is not a string, return undefined. If the string is empty, return an empty string.

Find a all the words in the string that end with a vowel. Get the last word, and then take the vowel at the end of that word, and return it. 


Examples:

// commonLastVowel("Hello, World'e Goodbye I") -> 'I'
["Hello", "World!e", "Goodbye", "I"]

Algorithm:
- if the input is not a string return undefined
- if the input has a length of 1, return undefined
- 
 
*/

function commonLastVowel(sentence) {
  if (typeof sentence !== 'string') return undefined;
  
  let onlyAlphaChars = sentence.replace(/[^a-z ]/gi, '');
  let alphaCharArr = onlyAlphaChars.split(/ +/);
  
  for (let i = alphaCharArr.length - 1; i >= 0; i -= 1) {
    let word = alphaCharArr[i];
    let lastChar = word[word.length - 1];
    
    if (lastChar && 'aeiou'.includes(lastChar.toLowerCase())) {
      return lastChar;
    }
  }
  
  return '';
}


console.log(commonLastVowel("Hello World!") === "o")
console.log(commonLastVowel("Hello World!e") === 'e')
console.log(commonLastVowel("Hello World!e Goodbye I") === 'I')
console.log(commonLastVowel("Hello Worlde! Goodby") === 'e')


//Happy Path 
console.log(commonLastVowel("Hello World!") === "o")
console.log(commonLastVowel("Hello Worleed!") === "o")

// //Case sensitive 
console.log(commonLastVowel("bce bce bcE bca bca bca") === "a")

// //ending on a character 
console.log(commonLastVowel("Hello, World!") === "o")

// other data types:
console.log(commonLastVowel([]) === undefined)

// //empty string 
console.log(commonLastVowel("") === "")

// // //empty space
console.log(commonLastVowel(" ") === "")

// // //no vowels
console.log(commonLastVowel("bbb") === "")

// // //y is not a vowel 
console.log(commonLastVowel("abcy abcy abca") === "a");

// // //double spaces 
console.log(commonLastVowel("abce abce   a ba   a") ==="a")

console.log(commonLastVowel("abcde... World!") === "e") 