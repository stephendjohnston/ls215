/*
Delete Vowels
-------------

Write a function that takes an array of strings and returns an array of the 
same string values, but with all vowels (a, e, i, o, u) removed.

Rules:
- given an array of strings return an array of strings, with the vowels 
removed from each string

Algorithm:
- this is a transformation problem so we can use the map method to transform
each string
- during each iteration, use the replace method with a regex to match all
vowels and replace them with ''
*/

function removeVowels(array) {
  return array.map(string => {
    return string.replace(/[aeiou]/gi, "");
  });
}

// LS Solution using lower level abstraction

function removeVowels(stringArray) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return stringArray.map(string => string.split('').map(char => {
    if (VOWELS.includes(char)) {
      return '';
    } else {
      return char;
    }
  }).join(''));
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]