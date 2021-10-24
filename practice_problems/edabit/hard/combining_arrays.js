"use strict";

// Combine Arrays
// Create a function that takes three arrays and returns one array where all passed arrays are combined into nested arrays.

// These arrays should be combined based on indexes: the first nested array should contain only the items on index 0, the second array on index 1, and so on.

// If any array contains fewer items than necessary, supplement the missing item with "*".

// Examples
// combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]) ➞ [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

// combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]) ➞ [[1, 4, 7], [2, 5,  8], [3, 6, 9]]

// combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"]) ➞ [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]

// console.log(combineArrays([1], [2], [3]) );// [[1, 2, 3], ['*', '*', '*'], ['*', '*', '*']];

/*
inputs: Three Arrays
- contains numbers, strings, booleans 
outputs: Array of arrays
- contains same elements as input arrays

Rules:
- nested arrays should be combined based on indexes:
  - so all elements at like index of each input array should be combined into arrays at the same index
    - ex, all elements at index 0 of input arrays, will be combined into array at index 0 of result array
- If any array contains fewer items than necessary, supplement the missing item with "*".

Examples:

// combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]) ➞ [[1, 4, 7], [2, 5,  8], [3, 6, 9]]

index 0 elements of each array = [1, 4, 7]
index 1 elemetns of each array = [2, 5, 8]
index 2 elemtns of each array = [3, 6, 9]

result = []
for (let i = 0; i < 3; i += 1) {
  subarray = [];
  for (let j = 0; j < array.length; j += 1) {
    currenArray[j][i]
  }
  
  result.push(subarray)
}


Mental model:
Figure out the longest array length of the input arrays. Then for all the 
arrays that are shorter than the longest array, push "*" onto the shorter 
arrays until they are the same lenght at the largest array. 

Combine all input arrays into array of arrays. So there will be an array of 
3 nested arrays. 

Loop to 3 starting at 0. On each loop, create a subarray. Create a second 
for loop starting at 0, and looping until the size of the first nested 
array. On each iteration, get the nested array at the index of the innder 
loop, and then the element at index i of the outer loop. 

Algorithm:
- get the largest length of input arrays
  - Math.max(arr1.length, arr2.length, arr3.length)
- [arr1, arr2, arr3]
  - create a for loop that will iterate from 0 - 3
    - on each loop, if the current array length at index i of the array of nested arrays < maxLength
      - While nestedArray.length < max LEngth
        - nestedARray.push('*')
- create a for loop that will start at 0 to 3
  - create an empty subarray
  - create an inner for loop that will iterate from 0 to the maxLEngth
    - on each iteration, get the nested array at index j
    - get the value of the nestedarray at index i
    - push value onto subarray
  - push subarray onto result array.

*/

function combineArrays(arr1, arr2, arr3) {
  let maxLength = Math.max(arr1.length, arr2.length, arr3.length);
  if (maxLength < 3) maxLength = 3;
  let arrOfArrays = [arr1, arr2, arr3];
  let result = [];
  
  for (let i = 0; i < 3; i += 1) {
    let currentArray = arrOfArrays[i];

    while (currentArray.length < maxLength) {
      currentArray.push('*');
    }
  }
  
  for (let i = 0; i < 3; i += 1) {
    let subarray = [];
    for (let j = 0; j < maxLength; j += 1) {
      subarray.push(arrOfArrays[j][i]);
    }
    
    result.push(subarray);
  }
 
  return result;
}

console.log(combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]))// ➞ [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

console.log(combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]))// ➞ [[1, 4, 7], [2, 5,  8], [3, 6, 9]]

console.log(combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"]))// ➞ [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]

console.log(combineArrays([1], [2], [3]) );// [[1, 2, 3], ['*', '*', '*'], ['*', '*', '*']];