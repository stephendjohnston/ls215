"use strict";

// Encrypt This

/*
You want to create secret messages which can be deciphered by the Decipher 
this! kata. Here are the conditions:

1. Your message is a string containing space separated words.
2. You need to encrypt each word in the message using the following rules:
    - The first letter must be converted to its ASCII code.
    - The second letter must be switched with the last letter

Keepin' it simple: There are no special characters in the input.

Examples:

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"

inputs: String
- space seperated words

outputs: String
- will contain digits and alpha chars


Rules:
- string may be one word
- if more than one word, words will be separated by spaces
- encrypt each word in the string by:
  - converting the first letter of the string to its ASCII code
  - swapping the second letter with the last char

Examples:
encryptThis("Hello") === "72olle"
- 'H' to ASCII code is 71
- 'e' is swapped with 'o'

encryptThis("good") === "103doo"
- 'g' ASCII code is 103
- 'o' is swapped with 'd'

encryptThis("hello world") === "104olle 119drlo"
- 'h' ASCII code is 104
- 'e' is swapped with 'o'
- 'w' ASCII code is 119
- 'o' is swapped with 'd'

Algorithm:
- split the text into an array of words
- iterate over the array of words using map
  - get the ASCII code of the first char of the word
  - Add this code to text[text.length - 1] + text.slice(2,text.length - 1) + text[1]
  - return this string
- join this array of transformed words by spaces
*/

function transformWord(word) {
  let asciiCode = word.charCodeAt(0);
  let secondLetter = word.slice(1, 2);
  let middle = word.slice(2, -1);
  let lastLetter = word[word.length - 1];

  if (word.length === 1) {
    return asciiCode;
  } else if (word.length === 2) {
    return asciiCode + lastLetter;
  }

  return String(asciiCode) + lastLetter + middle + secondLetter;
}

function encryptThis(text) {
  return text.split(' ').map(transformWord).join(' ');
}

// Codewar Solution with similar frame as my solution

const encryptWord = w => {
  const first = w.charCodeAt(0);
  let res;
  switch (w.length) {
    case 0: return '';
    case 1: return first;
    case 2: res = [first, w[1]]; break;
    case 3: res = [first, w[2], w[1]]; break;
    default: res = [first, w.slice(-1), w.slice(2,-1), w[1]]; break;
  }
  return res.join('');
};

const encryptThis = text => text.split(' ').map(encryptWord).join(' ');

console.log(encryptThis("Hello"))// === "72olle"
console.log(encryptThis("good"))// === "103doo"
console.log(encryptThis("hello world"))// === "104olle 119drlo"
console.log(encryptThis("A wise old owl lived in an oak"))// "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
console.log(encryptThis("The more he saw the less he spoke"))// "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
console.log(encryptThis("The less he spoke the more he heard"))// "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
console.log(encryptThis("Why can we not all be like that wise old bird"))// "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
console.log(encryptThis("Thank you Piotr for all your help"))// "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"