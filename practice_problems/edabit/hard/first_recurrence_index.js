"use strict";

// Edabit > Hard > First Recurrence Index

/*
Create a function that identifies the very first item that has recurred in the string argument passed. It returns the identified item with the index where it first appeared and the very next index where it resurfaced -- entirely as an object; or as an empty object if the passed argument is either null, undefined, empty string, or no recurring item exists.

Examples

recurIndex("DXTDXTXDTXD") ➞ {"D": [0, 3]}
// D first appeared at index 0, resurfaced at index 3
// T appeared and resurfaced at indices 3 and 6 but D completed the cycle first

recurIndex("YXZXYTUVXWV") ➞ {"X": [1, 3]}

recurIndex("YZTTZMNERXE") ➞ {"T": [2, 3]}

recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}

recurIndex("") ➞ {}

recurIndex(null) ➞ {}

inputs: String
- consecutive capital letters

outputs: Object
- contains one property
- The letter from the string that has two occurrences before any other letters in the string as the key
- the value is an array of the indexes of where the letter occurred in the string


Rules:
- if the passed argument is either null, undefined, empty string, or no recurring item exists, return an empty object -> {}
- There may be instances where more than one item in the string occurs more than once, take the first two occurrences of the item that first occurrs twice in the string

Examples:

recurIndex("DXTDXTXDTXD") ➞ {"D": [0, 3]}
// D first appeared at index 0, resurfaced at index 3
// T appeared and resurfaced at indices 3 and 6 but D completed the cycle first

Mental Model:

loop over the letters. For each letter, add the letter as key and a array as the value into a result object and the index of that letter as an element in the value array. If the letter already exists in the object, add the current index to the value array. At the end of each loop, check if the current letter in the object has value array with a length 2. If it does, return this letter and value array as an object on its own. If the loop ends, return an empty object.

Algorithm:
- create an empty result object
- use a for loop to iterate over the string.
  - get the char at the current i of the loop
  - if the char does not exist as a key in the result object, add the char as key with an array as a value.
  - add the current i as an element to the value array
  - check if the array has a length of 2
    - if it does, return the key and value as its own object
    - otherwise continue to loop
- if the loop ends, return an empty object

*/

function recurIndex(str) {
  if (typeof str !== 'string') return {};
  let charOccurrences = {};
  
  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];

    if (!charOccurrences[char]) {
      charOccurrences[char] = [];
    }
    
    charOccurrences[char].push(i);
    
    if (charOccurrences[char].length === 2) {
      return { [char]: charOccurrences[char] }
    }
  }
  
  return {};
}

console.log(recurIndex("DXTDXTXDTXD"))// ➞ {"D": [0, 3]}
console.log(recurIndex("YXZXYTUVXWV"))// ➞ {"X": [1, 3]}
console.log(recurIndex("YZTTZMNERXE"))// ➞ {"T": [2, 3]}
console.log(recurIndex("AREDCBSDERD"))// ➞ {"D": [3, 7]}
console.log(recurIndex(""))// ➞ {}
console.log(recurIndex(null))// ➞ {}
console.log(recurIndex('KDXTDATTDDX'))// -> {"D":[1,4]}
console.log(recurIndex('AKEDCBERSDA'))// -> {"E":[2,6]}
console.log(recurIndex('DXKETRETXDK'))// -> {"E":[3,6]}
console.log(recurIndex('ABCKPEPGBCG'))// -> {"P":[4,6]}
console.log(recurIndex('KLMNONMLKOP'))// -> {"N":[3,5]}
console.log(recurIndex('ABCDEFGHIJK'))// -> {}
console.log(recurIndex('ABCDEFGABCD'))// -> {"A":[0,7]}
console.log(recurIndex(undefined))// -> {}