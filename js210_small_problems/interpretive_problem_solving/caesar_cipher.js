"use strict";

// Caesar Cipher
// -------------

/*
Problem:
--------

Write a function that implements the Caesar Cipher. The Caesar Cipher is one 
of the earliest and simplest ways to encrypt plaintext so that a message can 
be transmitted securely. It is a substitution cipher in which each letter in 
a plaintext is substituted by the letter located a given number of positions 
away in the alphabet. For example, if the letter 'A' is right-shifted by 3 
positions, it will be substituted with the letter 'D'. This shift value is 
often referred to as the key. The "encrypted plaintext" (ciphertext) can be 
decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case).
Any other character is left as is. The substituted letters are in the same 
letter case as the original letter. If the key value for shifting exceeds 
the length of the alphabet, it wraps around from the beginning.

Inputs: String and number
  - String is the text to be encrypted
  - Shift value or key
    - Number of positions to the right in the alphabet from the current
    character
Output: String
  - encrypted

Rules:
  - Only encrypt letters (upper and lower case)
    - all other characters are left as is
  - Substituted letters are the same case as the original letter
  - The key (shift value) is the number of positions to move away from
  the current letter in the alphabet
    - If you have letter 'A' and shift value of 3. You move 3 positions
    to the right in the alphabet to get the substitute letter which
    would be 'D'.
  - if the shift value takes you past the end of the alphabet (past 'Z'),
  then you wrap back to the beginning of the alphabet. 
    - if you have the letter 'Y' and a shift value of 4, then you go to 'Z' then
    start back over at the beginning and end at 'C'.

Examples:

Given 'A' and key: 3
A => D

Given LS and key: 5
L => Q
S => X
=> QX

Given 'Yet' and key: 7
Y => F
e => l
t => z
=> Flz

Finding the substitute: Given a string of the Alphabet
=> 'abcdefghijklmonpqrstuvwxyz'
'a' will be index or key 0, 'b' will be index or key 1 and 'z' key 25
Given 'y' and a key of 4:
y = key 24 + 1 === 25 which is 'z' and the end of the alphabet which
means we now have to wrap back to the beginning.
a = 0, b = 1, c = 2 and that is 4 keys from y so our new letter will be 'c'.
So we'll need a counter that will take the key of the current letter
and add the key value given to find the subsitute. If the sum is 
greater than the last key value (25), subtract 26 to get the key value
y = 24 + key(4) === 28 - 26 === 2 which is index 2 which is the letter 'c'

Mental Model:
Iterate over the string char by char. If the current char is anything other
than an alpha character, leave that char as is. If the char is an alphabetic
character, then use the key to find its substitute. 

Data Structure:

String of alphabetic characters lowercase
and upperAlpha = lowerAlpha.toUpperCase().

Either build a string char by char or return an array of chars and
join the array and return the string.

Algorithm:

create lower and uppercase string alphabets. These will be used with the
key to determine the substitutes for each letter.
- declare and initialize a result string
- iterate over the string char by char
  - if the current char is not a letter
    - add the character to the result string
  - if the current char is a letter
    - determine if the char is upper or lowercase
      - use indexOf and the alphabet strings to find the index of the
      current char
        - add the key value to the index
          - if the sum is greater than 25, subtract 26 from that sum
          and use that value to get the substitute character
          - if the sum is less than or equal to 25 use that value
          to get the substitute char
            - sub = alphabet[key]
            - add this letter to the result string
- return the result string at the end of the text

*/

function caesarEncrypt(text, key) {
  let result = '';

  [...text].forEach(char => {
    if (/[^a-z]/gi.test(char)) {
      result += char;
    } else {
      result += getShiftedChar(char, key);
    }
  });

  return result;
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

// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"