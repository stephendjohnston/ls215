"use strict";

// Remove the Last Vowel
// ---------------------

/*
Problem:

Write a function that removes the last vowel in each word in a sentence.

Examples:
---------

removeLastVowel("Those who dare to fail miserably can achieve greatly.")
➞ "Thos wh dar t fal miserbly cn achiev gretly."

removeLastVowel("Love is a serious mental disease.")
➞ "Lov s  serios mentl diseas"

removeLastVowel("Get busy living or get busy dying.")
➞ "Gt bsy livng r gt bsy dyng"

Notes:
------
- Vowels are: a, e, i, o, u (both upper and lowercase).


PEDAC
-----

Inputs: string
  - sentence
Outputs: String
  - sentence, with the last vowel of each word removed

Rules:
- words are upper and lowercase chars
- remove the last vowel of a word
  - 'hello' => 'hell'
  - 'say' => 'sy'
- assume all inputs are valid strings
- words in string are separated by spaces

Examples:

removeLastVowel("Love is a serious mental disease.")
➞ "Lov s  serios mentl diseas"
'Love' => 'Lov', 'is' => 's', 'a' => '', 'serious' => 'serios' etc
- one letter words that are vowels are replace with empty string ''

Mental Model

Split the string into an array of words. Map over the words. Split each
word into array of chars. use match to get all vowels. Use the last value
in match and get the index of that value from the word. Use splice to
remove the char at that index from the array of chars. Join the array
back into a word and return that word

Algorithm:

- split the sentence into an array of words
- map over the array of words
  - on each iteration, use match to get an array of vowels,
  - split the word into array of chars
    - if there are no vowels, match returns null, then return the word
  - use the value at the last index of the matched array and get the
  last index of that vowel from the string
  - use splice to remove that vowel
return array of word with no vowels and join on spaces
*/

function removeLastVowel(text) {
  return text.split(' ').map(removeVowel).join(' ');
}

function removeVowel(word) {
  let vowels = word.match(/[aeiou]/gi);
  if (!vowels) return word;
  let lastIndex = word.lastIndexOf(vowels[vowels.length - 1]);
  word = [...word];
  word.splice(lastIndex, 1);
  return word.join('');
}

console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly.") === "Thos wh dar t fal miserbly cn achiev gretly.")
console.log(removeLastVowel("Love is a serious mental disease.") === "Lov s  serios mentl diseas.")
console.log(removeLastVowel("Get busy living or get busy dying.") === "Gt bsy livng r gt bsy dyng.")
console.log(removeLastVowel("If you want to live a happy life, tie it to a goal, not to people.") === "f yo wnt t liv  hppy lif, ti t t  gol, nt t peopl.")