// "use strict";

// Most Common Last Vowel
// ----------------------

/*
Problem:
--------

Create a function that takes in a sentence as input and returns the most 
common last vowel in the sentence as a single character string.

Examples:

commonLastVowel("Hello World!") ➞ "o"

commonLastVowel("Watch the characters dance!") ➞ "e"

commonLastVowel("OOI UUI EEI AAI") ➞ "i"

Notes:

- There will only be one common last vowel in each sentence.
- If the word has one vowel, treat the vowel as the last one even if it is 
at the start of the word.
- The question asks you to compile all of the last vowels of each word and 
returns the vowel in the list which appears most often.
- y won't count as a vowel.
- Return outputs in lowercase.

PEDAC
-----

Inputs: String
  - sentence
    - words separated by spaces
Outputs: String
  - most common last vowel from the sentence
    - the last vowel of each word that appears the most times
  - lowercase

Rules:
  - there will only be one common last vowel in each sentence
  - if a word only has one vowel, that vowel is the last vowel no matter
  its position
  - y is not a vowel
  - return outputs in lowercase

Examples:

commonLastVowel("Watch the characters dance!") ➞ "e"
 last vowel from each word -> ['a', 'e', 'e', 'e']
  - 'e' appears three times and 'a' once

Mental Model:
create an empty object. Split the string into an array of words. Iterate
over the array of words. ON each iteration, use regex and match to get all
the vowels from each word. Then take the last vowel from that matched vowels
and add that vowel to the object as the key and a number as the value which
will be the count of the vowel appearance in the string.
get an array of the values. Get the max value. Iterate over the keys and
whichever key has the max value is the most common vowel.

Algorithm:

- create empty object 'count'
- split string on spaces
- iterate over word array
  - on each iteration use regex to match the vowels from each word
    - if the match is not null, take the last value in the array
    of matched vowels and add it to the object
    - object[vowel] = (object[vowel] || 0) + 1;
- get an array of the keys of the object.
- iterate over the keys using reduce.
  - if the object[startingkey] > object[nextkey]
    return startingkey
  - else return next key
*/

function commonLastVowel(sentence) {
  const count = {};

  sentence.toLowerCase().split(' ').forEach(word => {
    let vowels = word.match(/[aeiou]/g);
    let vowel;
    if (vowels) {
      vowel = vowels[vowels.length - 1];
      count[vowel] = (count[vowel] || 0) + 1;
    }
  });
  
  return Object.keys(count).reduce((vowel, nextVowel) => {
    return count[vowel] > count[nextVowel] ? vowel : nextVowel;
  });
}

console.log(commonLastVowel("Hello World!"))// "o")
console.log(commonLastVowel("Watch the characters dance!"))// "e")
console.log(commonLastVowel("OOI UUI EEI AAI"))// "i")
console.log(commonLastVowel("amy and acts"))// "a")
console.log(commonLastVowel("munch munch munch tasty tasty brunch"))// "u")
