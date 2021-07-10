"use strict";

// Paul Cipher
// -----------

/*
Problem:
--------

In Paul Cipher, only alpha characters will be encoded with the following 
rules:

- All alpha characters will be treated as uppercase letters.
- The first alpha character will not change (except for switching to upper
case).
- All subsequent alpha characters will be shifted toward "Z" by the 
alphabetical position of the previous alpha character (wrap back to "A" if 
"Z" is passed).

Example:
--------

he1lo would be encoded as follows:

paulCipher("he1lo") ➞ "HM1QA"

h -> H (First character to be changed to uppercase)
e -> M (H is the previous alpha character and 8th letter in the alphabets. E + 8 = M)
1 -> 1 (Keep all characters other than alphabets as it is)
l -> Q (E is the previous alpha character and 5th letter in the alphabets. L + 5 = Q)
o -> A (L is the previous alpha character and 12th letter in the alphabets. O + 12 = A)

Given a string txt, return the encoded message. See the below examples for a better understanding:

Examples:
---------
paulCipher("muBas41r") ➞ "MHWCT41K"

paulCipher("a1rForce") ➞ "A1SXUGUH"

paulCipher("MATT") ➞ "MNUN"

PEDAC
-----

Inputs: String
Outputs: String
  - encoded
  - uppercase alpha characters
  - non alpha characters stay as is

Rules:
- All alpha characters will be treated as uppercase letters.
- The first alpha character will not change (except for switching to upper
case).
- All subsequent alpha characters will be shifted toward "Z" by the 
alphabetical position of the previous alpha character (wrap back to "A" if 
"Z" is passed).
- Use the previous letters position in the alphabet plus the position of
the current letters position to get the new letter.
  - Previous letter = H => 8, current = E => 5 // 8 + 5 = 13. 13 => M

Mental Model:

The string may or may not start with an alphabetic character and since we
need to capitalize the first alpha character, we should find the index of
the first alphacharacter and then set the result string to index 0 up to
the index of the first alpha char. Capitalize the first char and add
it to the result string. Create a for loop to iterate over the remaining
characters starting at 1 index past the first alpha char. On the first
iteration, set the current position to the last alpha char in the result
string. Get the position of the current char and add that to the position
of the last char in the result string to get the char that will be added
to the result string.


Algorithm:

- create a string of the alphabet, with A at index 1
  - because if A starts at 0, it will not increase the char position when
  trying to determine the next position
- upcase the input string
- find the index of first alphachar
  - text.indexOf(text.match(/[A-Z]/)[0]);
- set the cipherText to equal all the letters from index 0 to the
index of the alphachar plus 1
- create a for loop that will iterate from the index that is plus 1 past
the first alphachar of the input text.
  - if the char is non-alphabetic, add the char to cipherText
  and continue to the next iteration.
  - get the alphabet index of the last

*/

function paulCipher(text) {
  const alphabet = '~ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  text = text.toUpperCase();
  let startIndex = text.indexOf(text.match(/[A-Z]/)[0]);
  let cipherText = text.slice(0, startIndex + 1);
  let previousCharPos = alphabet.indexOf(cipherText[cipherText.length - 1]);

  for (let i = startIndex + 1; i < text.length; i += 1) {
    if (/[^A-Z]/.test(text[i])) {
      cipherText += text[i];
      continue;
    }

    let currentCharPos = alphabet.indexOf(text[i]);
    cipherText += alphabet[(previousCharPos + currentCharPos) % 26];
    previousCharPos = currentCharPos;
  }

  return cipherText;
} 

console.log(paulCipher("muBas41r") === "MHWCT41K")
console.log(paulCipher("A1rForce") === "A1SXUGUH")
console.log(paulCipher("p4K1St4n") === "P4A1DM4H")
console.log(paulCipher("MATT") === "MNUN")
console.log(paulCipher("4elen10ve") === "4EQQS10JA")
console.log(paulCipher("He1lo") === "HM1QA")
console.log(paulCipher(" The quick brown fox jumps over the lazy dog. ") === " TBM VLDLN MTGLK TUM HEHCI HKAW LBM QMAY CSV. ")
console.log(paulCipher("5ddc4ddf-7a47-44d3-8eda-3171860dc938") === "5DHG4GHJ-7G47-44E3-8IIE-3171860EG938")