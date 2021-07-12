"use strict";

// A Capital Challenge
// -------------------

/*
Problem:

Given two strings, s1 and s2, select only the characters in each string where 
the character in the same position in the other string is in uppercase. 
Return these as a single string.

To illustrate, given the strings s1 = "heLLo" and s2 = "GUlp", we select the 
letters "he" from s1, because "G" and "U" are uppercase. We then select "lp" 
from s2, because "LL" is in uppercase. Finally, we join these together and 
return "help".

Examples:
---------

selectLetters("heLLO", "GUlp") ➞ "help"

selectLetters("1234567", "XxXxX")  ➞ "135"

selectLetters("EVERYTHING", "SomeThings") ➞  "EYSomeThings"

Notes:
------
- The strings don't have to be the same length.
- Strings can contain non-alphabetic characters.

PEDAC
-----

Inputs: 2 Strings
Output: String

Rules:
- The strings don't have to be the same length
- Strings can contain non-alphabetic characters
- select only the characters in each string where the character in the same 
position in the other string is in uppercase
- return an empty string if no characters are uppercase
- case sensitive
  - if the character that your adding is lowercase, it stays lowercase etc

Example:
selectLetters("heLLO", "GUlp") ➞ "help"
- iterate over s2 first
- if the char on the current iteration is uppercase
  - add the char from s1 at the same index
G is upperCase => true => add 'h' to string
U is upperCase => true => add 'e' to string
l and p are lower case so do nothing
- iterate over s1 and perform same operatoin
h and e are lower case so do nothing
L and L are uppercase so add 'l' and 'p' from s2

Date Structures:
- String
  - build string

Mental Model:

Initialize an empty string. Determine the length of the shorter string. This
will be used as the iteration limit. Create a for loop to iterate over s2.
On each iteration, check to see if the current char in s2 is uppercase. If
it is, concat the char at the same index of s1 to the result string. If not
move to next iteration. Continue until iteration limit.
Create a second for loop to iterate over s1. If the current char is
uppercase, concat the char at the same index of s2 to the result string. 
Return the result string.

Algorithm:

- initialize empty string
  - let combined = ''
- get shorter string length
  - let limit = Math.min(s1.length, s2.length)
- create for loop that iterates up to the limit
  - if currentchar of s2 isUpperCase() 
    - result += s1[index]
- create for loop that iterates up to limit
  - if currentchar of s1 is Uppercase()
    - result += s2[index]
return result
*/

function selectLetters(s1, s2) {
  let iterations = Math.min(s1.length, s2.length);
  let combined = '';

  combined += selectChars(s1, s2, iterations);
  combined += selectChars(s2, s1, iterations);

  return combined;
}

function selectChars(string1, string2, iterations) {
  let chars = '';

  for (let i = 0; i < iterations; i += 1) {
    let currentChar = string2[i];
    if (/[A-Z]/.test(currentChar)) {
      chars += string1[i];
    }
  }

  return chars;
}

console.log(selectLetters("heLLO", "GUlp") === "help")
console.log(selectLetters("1234567", "XxXxX") === "135")
console.log(selectLetters("EVERYTHING", "SomeThings") === "EYSomeThings")
console.log(selectLetters("PaTtErN", "pAtTeRn") === "atrpten")
console.log(selectLetters("nothing", "nothing") === "")
console.log(selectLetters("What do you think of it so far?", "RUBBISH!") === "What doR")