"use strict";

function isUppercase(string) {
  return string.toUpperCase() === string;
}

// OR

function isUppercase(string) {
  let letters = string.replace(/[^a-z]/gi, '');
  return [...letters].every( char => char.match(/[A-Z]/g));
}

// OR

function isUppercase(string) {
  let letters = string.replace(/[^a-z]/gi, '');
  for (let i = 0; i < letters.length; i += 1) {
    if (letters[i] < 'A' || letters[i] > 'Z') {
      return false;
    }
  }

  return true;
}

// OR

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function isUppercase(string) {
  let alphaChars = [...string].filter(char => {
    if (ALPHABET.includes(char.toUpperCase())) {
      return char;
    }
  });

  return alphaChars.every(char => ALPHABET.includes(char));
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true