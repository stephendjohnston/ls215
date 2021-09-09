"use strict";

/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

rot13("test"), "Input: test , Expected Output: grfg 
rot13("Test"), "Input: Test , Expected Output: Grfg 

PEDAC

inputs: string
- contains alpha chars

outputs: string
- contains alpha chars

Rules:
- for each letter in the input string, swap it out with a letter 13 letters
after the current letter in the string
- if the letter takes you past the last letter 'z', then wrap back to the
beginning of the alphabet and start counting again from there
- case sensitive, so an uppercase letter gets replaced with a letter of
the same case
- any input that is not a string, return empty string
- for any chars that are not alpha chars, leave as is

Mental Model:
iterate over each character of the input string and build a new string
by getting the letter that is 13 letters from the current letter in the
iteration. If 13 letters takes you past the last letter in the alphabet,
add another 26 letters to the alphabet to imitate wrapping. 

Algorithm:
- create a variable to hold the entire alphabet from a-z
- split the input string into an array of chars
- iterate over the array of chars using map
  - take the current char and get its index in the alphabet and add 13
  to it
    - if this number is greater than 25
      - alphabet + alphabet
      - use index to get the letter that is 13 letters from the current letter
    - use index to get the letter that is 13 letters from the current letter
    - if the current letter is lowercase, return next letter as lowercase
    - otherwise return as uppercase
- join the array on each char
*/

function rot13(string) {
  return [...string].map(letter => {
    return getNextLetter(letter);
  }).join('');
}

function getNextLetter(letter) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklm';
  let nextLetterIdx = alphabet.indexOf(letter.toLowerCase()) + 13;

  if (alphabet.includes(letter)) {
    return alphabet[nextLetterIdx];
  } else if (alphabet.toUpperCase().includes(letter)) {
    return alphabet.toUpperCase()[nextLetterIdx];
  } else {
    return letter;
  }
}

console.log(rot13('test')); // 'grfg'
console.log(rot13('Test')); // 'Grfg'
console.log(rot13('Ruby is cool!')) // 'Ehol vf pbby!'