"use strict";

// Vigenere Cipher
// ---------------

/*
Problem:
--------

The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. 
It uses a series of Caesar Ciphers based on the letters of a keyword. Each 
letter of the keyword is treated as a shift value. For instance, the letter 
'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a 
shift value of 3. In other words, the shift value used for a letter is equal 
to its index value in the alphabet. This means that the letters 'a'-'z' are 
equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also 
equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by 
applying the current shift value to a Caesar Cipher for that particular 
character. To make this more concrete, let's look at the following example:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

Notice that in the example, the key isn't moved forward if the character 
isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only 
encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the keyword 
doesn't matter—in other words, the resulting encryption won't change 
depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').


Inputs: String text and string keyword
Outputs: String text encrypted

Rules:
  - each letter of the keyword corresponds to a shift value based on its
  index in the alphabet eg. 'b' or 'B' has a shift value of 1
  - only alphabetic characters are shifted
  - if the keyword is 'meat', the shift values are [12, 4, 0, 19]
    - the case of the keyword does not matter, eg. 'MEAT' has the same
    shift values as 'meat'
  - you only move to the next shift value if the the current char in the
  string is alphabetic and an encryption takes place
    - use continue to skip over non-alphabetic chars
  - assuming text and keywords will always be strings
  - if they are empty, return ''

Example:

plaintext: Pine don't go on pizzas!
keyword: meat => shift values => [12, 4, 0, 19]

P shifted by 12 => B
i shifted by 4 => m
n shifted by 0 => n
e shifted by 19 => x // shift values reset so we're back to 12
' ' not shifted because not alpha // shift value still at 12
d shifted by 12 => p
and so on...

Mental Model:

Take a string and iterate over each character. If the character is not 
alphabetic, move to the next iteration. If the character is alphabetic,
Take the character and the current key and pass it to the getShiftedChar()
function. Return that character to a cipher string. 

Data Structure:

Array:
- Convert the keyword to an array of numbers representing their shift value

String:
- Build a string of encrypted characters

Algorithm:
Convert keyword to array of numbers:
  - convert the keyword to lowercase using toLowerCase()
  - iterate over the string and return an array of numbers:
    - get the charCode of each character and subtract 97 to get the
    alphabetic index number

Iterate over the input text
- create an index counter to iterate over the keys
  - if the current char is non-alphabetic, add that char to the string and
  continue to next iteration or character
  - if the current char is alphabetic, 
    - if the current keys[index] === undefined, set the key back to 0
    - use the getshiftedChar(char, key) to
  get the encrypted char and add it to the cipher string 
    - increased key index

test:
string = 'Pine Apple';
keyword = 'meat' => [12, 4, 0, 19]
P shifted 12 => B // keyindex = 0
i shifted 4 => m // keyindex = 1
n shifted 0 => n // keyindex = 2
e shifted 19 => x // keyindex 3
' ' non alpha, ' ' is added to string // keyindex = 3
A shifted 12 => m // keyindex = 0

*/

function vigenereCipher(text, keyword) {
  if (!text || !keyword) return '';

  const cipherKeys = getCipherKeys([...keyword.toLowerCase()]);
  let cipherText = '';
  let keyIndex = 0;

  [...text].forEach(char => {
    if (/[^a-z]/i.test(char)) {
      cipherText += char;
    } else {
      if (cipherKeys[keyIndex] === undefined) keyIndex = 0;
      cipherText += getShiftedChar(char, cipherKeys[keyIndex])
      keyIndex += 1;
    }
  });

  return cipherText;
}

function getCipherKeys(keywordArray) {
  return keywordArray.map(char => char.charCodeAt(0) - 97);
}

function getShiftedChar(char, key) {
  const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlpha = lowerAlpha.toUpperCase();

  let alphaIndex;
  if (lowerAlpha.includes(char)) {
    alphaIndex = (lowerAlpha.indexOf(char) + key) % 26;
    return lowerAlpha[alphaIndex];
  } else {
    alphaIndex = (upperAlpha.indexOf(char) + key) % 26;
    return upperAlpha[alphaIndex];
  }
}

vigenereCipher('', '');  // ''
vigenereCipher('a', ''); // ''
vigenereCipher('', 'a'); // ''
vigenereCipher('Pineapples don\'t go on pizzas!', 'meat'); // Bmnxmtpeqw dhz'x gh ar pbldal!
vigenereCipher('Pineapples don\'t go on pizzas!', 'MEaT'); // Bmnxmtpeqw dhz'x gh ar pbldal!
vigenereCipher('Pineapples don\'t go on pizzas!', 'A');    // Pineapples don\'t go on pizzas!
vigenereCipher('Pineapples don\'t go on pizzas!', 'Aa');   // Pineapples don\'t go on pizzas!
vigenereCipher('Pineapples don\'t go on pizzas!', 'cab');  // Riogaqrlfu dpp't hq oo riabat!
vigenereCipher('Dog', 'Rabbit'); // Uoh