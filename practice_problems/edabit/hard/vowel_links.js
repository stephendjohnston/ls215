"use strict";

// Vowel to Vowel Links
// --------------------

/*
Given a sentence as str, return true if any two adjacent words have this 
property: One word ends with a vowel, while the word immediately after begins 
with a vowel (a e i o u).

Examples:
---------

vowelLinks("a very large appliance") ➞ true

vowelLinks("go to edabit") ➞ true

vowelLinks("an open fire") ➞ false

vowelLinks("a sudden applause") ➞ false

Notes:
------
- You can expect sentences in lowercase/uppercase.


PEDAC
-----

Inputs: String
  - upper and lowercase
  - if the input is anything other than a string return false
  - will there by any non-alpha chars in the string? such as ! or ?
  
Outputs: Boolean
  - true if there are two adjacent words with the first word ending in a
  vowel and the second word beginning with a vowel

Rules:
- input will be a string, lowercase or uppercase
- if the input is not a string, return false
- the input will be a string of words separated by spaces
- return true if there are two adjacent words with the first ending in a 
vowel and the second starting with a vowel. 
- ignore non-alpha chars
Examples:

vowelLinks("a very large appliance") ➞ true
- "large" ends with vowel, "appliance" starts with vowel
vowelLinks("go to edabit") ➞ true
- "go" ends with vowel, "to" does not start with vowel
- "to" ends with vowel, "edabit" starts with vowel
vowelLinks("an open fire") ➞ false
vowelLinks("a sudden applause") ➞ false
vowelLinks("a very large! appliance") -> true
- ignore non-alpha chars


Mental Model:

convert the string into lowercase. create an array of vowels
split the string into array of words. Iterate over the string of words. On
each iteration match only alpha chars and then get the value at index - 1. Get 
value at index 0 of the next word. if the last letter from the first word is
a vowel and the first letter from the next word is also a vowel, return true.
Otherwise continue to next loop. Keep checking until end of words. If no words
match criteria, return false. 

Date Structure:
Array of words
Array of vowels
Match of alpha chars to account for any non-alpha chars that might be
at the end of a word eg. "large!"

Algorithm:

validate input:


Create an string of vowels
convert string into lowercase and split the string into array of words
create a for loop that loop up to array.length - 1.
  - on each loop, match only alpha chars which returns an array of alpha chars
    - get the last letter in the array
  - get the first letter of the next word
    - array[i + 1][0]
  - if the vowels include the last letter of the first word and the first letter
  of the next word, return true
- after the loop ends, return false

if the input is an array, check if the array has string
*/

function validateInput(input) {
  return typeof input === 'string' || Array.isArray(input);
}

function vowelLinks(string) {
  if (!validateInput(string)) return false;
  if (Array.isArray(string)) {
    string = string.filter(el => typeof el === 'string').join(' ');

  }
  let vowels = 'aeiou';
  let stringArr = string.toLowerCase().split(' ');

  for (let i = 0; i < stringArr.length - 1; i += 1) {
    let alphaChars = stringArr[i].match(/[a-z]/g);
    let lastLetter = alphaChars[alphaChars.length - 1];
    let firstLetter = stringArr[i + 1][0];

    if (vowels.includes(lastLetter) && vowels.includes(firstLetter)) {
      return true;
    }
  }

  return false;
}

console.log(vowelLinks("an open fire"))// false)
console.log(vowelLinks("the sudden applause"))// false)
console.log(vowelLinks("the large appliances"))// true)
console.log(vowelLinks("a very large! appliance"))// -> true
console.log(vowelLinks("creative environment"))// true)
console.log(vowelLinks("Creative Environment"))// true)
console.log(vowelLinks("beneficial luggage"))// false)
console.log(vowelLinks("the eagle swooped down low"))// true)
console.log(vowelLinks("this is not a drill"))// false)
console.log(vowelLinks("Patrice Evra"))// true)
console.log(vowelLinks("please log on to edabit"))// true)
console.log(vowelLinks("the quick brown fox was sad"))// false)
console.log(vowelLinks(false));
console.log(vowelLinks(null));
console.log(vowelLinks(undefined));
console.log(vowelLinks(""));
console.log(vowelLinks(["hello there you are great"])); // true
console.log(vowelLinks(["hello", false, "there", 540, "you", [], "are"])); // true
console.log(vowelLinks([])) // false
console.log(vowelLinks({})) // false
