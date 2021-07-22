"use strict";

// Expensive Words
// ---------------

/*
Each letter in a sentence is worth its position in the alphabet (i.e. a = 1, 
b = 2, c = 3, etc...). However, if a word is all in UPPERCASE, the value of 
that word is doubled.

Create a function which returns the value of a sentence.

getSentenceValue("abc ABC Abc") ➞ 24
// a = 1, b = 2, c = 3

// abc = 1 + 2 + 3 = 6
// ABC = (1+2+3) * 2 = 12 (ALL letters are in uppercase)
// Abc = 1 + 2 + 3 = 6 (NOT ALL letters are in uppercase)

// 6 + 12 + 6 = 24

Examples:

getSentenceValue("HELLO world") ➞ 176

getSentenceValue("Edabit is LEGENDARY") ➞ 251

getSentenceValue("Her seaside sea-shelling business is really booming!") ➞ 488

Notes

- Ignore spaces and punctuation.
- Remember that the value of a word isn't doubled unless all the letters 
in it are uppercase.

Inputs: strings
  - sentences separated by spaces
  - contains upper and lowercase words
Outputs: Number
  - Each character of a word is equal to it's position in the alphabet
    - eg. a = 1, b = 2 etc
  - output will the sum of all alphabet characters value position
  in the alphabet
  
Rules:
  - words that are entirely uppercase will have their score doubled
  - otherwise words will have normal scores
  - if input is not a string return 0
  - empty strings return 0
  - ignore punctuation and spaces
  - only alpha chars have score values
  
Examples:
getSentenceValue("abc ABC Abc") ➞ 24
a = 1, b= 2, c = 3 => 6
A = 1, B = 2, c = 3 => 6 * 2 because all uppercase
A = 1, b = 2, c = 3 => 6
=> 24

Mental Model:
Create a string of the alphabet for score values based on index position.
split the string into array of words. Iterate over the array of words. 
For each word, iterate over each character, convert the char
to lowercase and get the index of that character in the alphabet string. 
Get total score value of that word. Then check if the word
is uppercase. If the word is uppercase, double the score. Otherwise
leave as is. 

Data Structures:
Array
  - words
  - characters
String
  - alphabet scoring system
  
Algorithm:
- if input is not a string, return 0
- if input is empty string return 0
- Create a string of the alphabet
  - ' abcdefghi'
- create a variable to hold the total score value of the string
  - totalScore = 0
- split the input string into array of words
  - string.split(' ')
- iterate over array of words
  - forEach();
  - create wordScore variable to hold the score of each word
  - let wordScore = 0
  - iterate over each word
    - convert each char to toLowerCase()
    - get indexOf each char in the alphabet
      - alphabetindexOf(char);
    - add the index to the wordScore
  - if word is uppercase
    - wordScore = wordScore * 2
  - add wordScore to total score
    - totalScore += wordScore
- return the total score
*/

function getSentenceValue(string) {
  let totalScore = 0;
  
  string.split(' ').forEach(word => {
    let wordScore = calculateWordScore(word);
    
    if (word === word.toUpperCase()) {
      wordScore = wordScore * 2;
    }

    totalScore += wordScore;
  });
  
  return totalScore;
}

function calculateWordScore(word) {
  const alphabet = ' abcdefghijklmnopqrstuvwxyz';
  let score = 0;

  word.split('').forEach(char => {
    if (/[a-z]/i.test(char)) {
      score += alphabet.indexOf(char.toLowerCase());
    }
  });

  return score;
}

console.log(getSentenceValue("HELLO world")) //➞ 176
console.log(getSentenceValue("Edabit is LEGENDARY")) //➞ 251
console.log(getSentenceValue("Her seaside sea-shelling business is really booming!")) //➞ 488