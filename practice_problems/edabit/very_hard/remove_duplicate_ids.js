"use strict";

// Remove Duplicate ID's

// You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.

// {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }

// Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g

// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }

// Rules

// Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
// If duplicate characters are found in the same array, the first occurance should be kept.

// input = {
//   "1": ["C", "F", "G"],
//   "2": ["A", "B", "C"],
//   "3": ["A", "B", "D"],
// }

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }


// input = {
//   "1": ["A"],
//   "2": ["A"],
//   "3": ["A"],
// }

// output = {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }


// input = {
//   "432": ["A", "A", "B", "D"],
//   "53": ["L", "G", "B", "C"],
//   "236": ["L", "A", "X", "G", "H", "X"],
//   "11": ["P", "R", "S", "D"],
// }

// output = {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }

/*
inputs: Object
- keys will be String numbers
  - the value of the keys will not neccessarily be in order
- values will be arrays
  - arrays will contain Uppercase Alpha Chars
  
outputs: Object (same structure as input)
- some value arrays may be empty

Rules:
- each character should appear only once among the value-arrays
- Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character.
- If duplicate characters are found in the same array, the first occurance should be kept.

Examples:

const obj3 = {
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
};

sort this object so that the keys appear in ascending order.

"11": ["P", "R", "S", "D"],

if P was in 53: array delete P from 11: array
if R was in 53: array delete R from 11: array
if 

"53": ["L", "G", "B", "C"],

if "L" was in 236: array delete L

Mental Model:
Sort the keys of the obj. Iterate over the keys of the object, and for 
each array value, filter out the like elements then set these new 
filtered arrays as the new values for each property. At the end of each 
iteration, push each of these filtered arrays to an array so that we will 
have an array of arrays where each nested array is an array of chars that 
have duplicates removed. Map over this array of arrays. On each iteration, 
slice this array from current idx + 1 to the end to get all the chars 
besides the current array chars. Filter the current array, and if 
otherChars includes a char from the current array, don't include it in the 
current array. Return this filterd array to map. We will now have an array 
of arrays where each array will not contain any chars that are in arrays 
that have higher numeric key values. Iterate over the keys of the object 
using forEach. On each iteration, set the obj at the current key, to the 
current index of the array of arrays which is the array that corresponds 
with that key. The object will now be updated and be ready to be returned. 

Algorithm:
- sort the keys of the input object in ascending order
- 
*/

function removeDuplicateIds(obj) {
  let numberKeys = Object.keys(obj);
  
  let arrayOfArrValues = [];
  numberKeys.forEach(key => {
    let arr = obj[key];
    obj[key] = arr.filter((char, idx) => arr.indexOf(char) === idx);
    arrayOfArrValues.push(obj[key]);
  });
  
  arrayOfArrValues = arrayOfArrValues.map((arr, idx) => {
    let otherChars = arrayOfArrValues.slice(idx + 1).flat();
    return arr.filter(char => !otherChars.includes(char))
  });
  
  numberKeys.forEach((key, idx) => {
    obj[key] = arrayOfArrValues[idx];
  });
  
  return obj
}

const obj = {
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
};
const result = removeDuplicateIds(obj);
console.log(result)
// result, { "1": ["C"], "2": ["A", "B", "D"] });

const obj1 = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
};
const result1 = removeDuplicateIds(obj1);
console.log(result1)
// // result1, { "1": ["F", "G"], "2": ["C"], "3": ["A", "B", "D"] });

const obj2 = {
  "1": ["A"],
  "2": ["A"],
  "3": ["A"],
};
const result2 = removeDuplicateIds(obj2);
console.log(result2)
// result2, { "1": [], "2": [], "3": ["A"] });

const obj3 = {
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
};

const result3 = removeDuplicateIds(obj3);
console.log(result3)
// result3, {
//       "11": ["P", "R", "S"],
//       "53": ["C"],
//       "236": ["L", "X", "G", "H"],
//       "432": ["A", "B", "D"],
//     });