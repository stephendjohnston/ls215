"use strict";

// Edabit > Hard > ASCII Capitals

/*
Each character in the English Alphabet has an ASCII Char Code.

Create a function that converts any word in a given sentence to upper case if the sum of the ASCII codes of the letters in the word is greater than the global average for the sentence. The global average of a sentence is the sum of all the word values divided by the number of words.

For example:

Word  Tell  me  the  time
Sum   401  210  321  431

Since on average, a word in this sentence has a char code sum of 340.75, "Tell" & "time" would be returned capitalised: "TELL me the TIME"

Examples:

averageASCII("Tell me the time") ➞ "TELL me the TIME"
// Global Average for char code sum of a word is 340.75

averageASCII("To be or not to be") ➞ "To be or NOT to be"
// Global Average for char code sum of a word is 230.33

averageASCII("Edabit helps you learn in bitesize chunks") ➞ "EDABIT HELPS you learn in BITESIZE CHUNKS"
// Global Average for char code sum of a word is 533.43

Notes:
- Do not count whitespace as part of a word.
- There will be no punctuation/special characters in the tests.
- If a word does not meet the capitalisation citeria, don't fully lowercase it ⁠— leave it how it is (i.e. the first words of a sentence should not be fully lowercased if they don't meet the criteria).
- The char code of a capital letter will be different than its lowercase counterpart.
- When you find the global average, it may help to round it to 2 decimal places, then compare against it.


inputs: String
- words separated by space char
- upper and lowercase chars
- no punctuation
- only alpha chars count as part of word

output: String
- the words that have a word score above the global average are capitalized

wordscore: calculated by finding the ASCII value of each char in a word and getting the sum

global Average: Finding the sum of all the wordscores and dividing by the number of words in the string

Rules:
- If the input is not a string, return null
- if the string is empty, return empty string
- there will be no punctuation in the tests
- if a word does not have a score above the global average, leave as is. 
- char codes of uppercase are different from lowercase
- round global average to two decimals
- all the words are already uppercased???

Examples:

averageASCII("Tell me the time") ➞ "TELL me the TIME"
// Global Average for char code sum of a word is 340.75

averageASCII("To be or not to be") ➞ "To be or NOT to be"
// Global Average for char code sum of a word is 230.33

averageASCII("Edabit helps you learn in bitesize chunks") ➞ "EDABIT HELPS you learn in BITESIZE CHUNKS"
// Global Average for char code sum of a word is 533.43

averageASCII('') -> ''
averageASCII(5434) -> null

Data Structures:
String -> Array of Words -> array of chars -> array of wordScores -> string with capitalized words 

Mental Model:
Find the score of each word. Calculate the global average score by adding all the score together and dividing by the number of words. For each word that has a wordscore above the global average, captalize that word. Return a string.

Algorithm:
- split the string into an array of words
- get array of wordScores:
  - for each word, split the word into array of chars
  - reduce array of chars
    - for each char, add the value of the current chars code to the accumulator
  - return the accumulator
- calculate globalAverage:
  - reduce array of wordScores and divide my length of array of words
- map over array of words
  - if the wordscore at the current index of iteration is greater than the global average
    - return the current word capitalized
*/

function averageASCII(string) {
  let words = string.split(' ');
  let wordScores = getWordScores(words);
  let globalAverage = computeGlobalAverage(wordScores);
  
  return words.map((word, idx) => {
    if (wordScores[idx] > globalAverage) {
      word = word.toUpperCase();
    }
    
    return word;
  }).join(' ');
}

function computeGlobalAverage(scores) {
  return scores.reduce((acc, num) => acc + num) / scores.length;
}

function getWordScores(words) {
  return words.map(word => {
    return [...word].reduce((acc, char) => acc + char.charCodeAt(), 0);
  });
}

console.log(averageASCII("Edabit helps you learn in bitesize chunks"))// "EDABIT HELPS you learn in BITESIZE CHUNKS")
console.log(averageASCII("To be or not to be"))// "To be or NOT to be")
console.log(averageASCII("What you egg"))// "WHAT you egg")
console.log(averageASCII("Made by Harith Shah"))// "Made by HARITH Shah")
console.log(averageASCII("Boom"))// "Boom")
console.log(averageASCII("The most addictive way to learn"))// "The most ADDICTIVE way to LEARN")