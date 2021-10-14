"use strict";

// Triplet Sum
// Create a function that takes an unsorted list of numbers and returns the number of unique triplets whose sum is equal to the variable n.

// Examples
// tripletSum([1, 0, 2, 6, 3, 9, 3], n = 11) ➞ 2
// // Since we found two unique triplets that equate to 11: 0+2+9 and 2+6+3

// tripletSum([1, 2, 6, 3, 4, 5, 9, 10, 11], n = 20) ➞ 5

/*
inputs: Array and Number
- array is unsorted list of numbers
- Number is an integer
  - n will always be positive

outputs: Number
- the count of the unique combinations of numbers from the input array that equal n

Rules:
- if n is not given, return 0
- will always be provided one argument
- first arg will always be an arraye
- if input array is empty, return empty array
- all of array elements are integers
- input array may contain duplicates, remove duplicate numbers
- n will always be positive if given
- find all the unique combiations of numbers that equal n
- numbers can be used for multiple triplets, but each number must be unique in triplet


Examples:

tripletSum([1, 0, 2, 6, 3, 9, 3], n = 11) ➞ 2
- 0 + 2 + 9 === 11
- 2 + 6 + 3 === 11
-> return 2

tripletSum([1, 2, 6, 3, 4, 5, 9, 10, 11], n = 20) ➞ 5
- 1 + 9 + 10
- 6 + 4 + 10
- 11 + 6 + 3
- 5 + 6 + 9
- 4 + 5 + 11

tripletSum([1, 0, 2, 6, 3, 9, 3]) ➞ 0

tripletSum([], n = 11) ➞ []


numbers = [1, 0, 2, 6, 3, 9]
indexes = [0, 1, 2, 3, 4, 5]
[0, 1, 2]
[0, 1, 3]
[0, 1, 4]
[0, 1, 5]

[0, 2, 3]
[0, 2, 4]
[0, 2, 5]

[0, 3, 4]
[0, 4, 5]

[0, 4, 5]

[1, 2, 3]


[]

Mental Model:
Get an array of unique numbers. Find all the combinations of unique numbers that are equal to the sum. 

Data structures:

Array

and 

Number

Algorithm:
- create an result array
- filter out duplicate elements
  - for each number check if the current number has indexOf === current idx
  
- create a for loop
  - create a subarray
  - set the first number to the element at index i
  - add first element to subarray
  - create a second for loop, this will start at index i + 1
    - set second number to the element at index i + 1
    - add second number to the subarray
    - create a third for loop, that starts at index i + 2
      - set the third number to the element at index i + 2
      - set element at index 2 to third number
      - add this subarray to result array
- filter the array of arrays
  - for each subarray, reduce the numbers to a sum
  - check if sum === n
- return the length of the array of arrays


numbers = [1, 0, 2, 6, 3, 9, 3]
indexes = [0, 1, 2, 3, 4, 5]
first = 1
second = 0
third = 2
[1, 0, 2]
third = 6
[1, 0, 6]
third = 3
[1, 0, 3]
third = 9
[1, 0, 9]
second = 2
third = 6
*/

function tripletSum(array, n) {
  if (array.length === 0) return [];
  if (!n) return 0;
  let result = [];
  
  let uniqueNums = array.filter((num, idx) => array.indexOf(num) === idx);
  
  for (let i = 0; i < uniqueNums.length; i += 1) {
    let first = uniqueNums[i];
  
    for (let j = i + 1; j < uniqueNums.length; j += 1) {
      let second = uniqueNums[j];

      for (let k = j + 1; k < uniqueNums.length; k += 1) {
        let subarray = [];
        subarray.push(first, second, uniqueNums[k])
        result.push(subarray);
      }
    }
  }
  
  result = result.filter(arr => {
    return arr.reduce((acc, num) => acc + num, 0) === n;
  });
  
  return result.length;
}

console.log(tripletSum([1, 0, 2, 6, 3, 9, 3], 11))// -> 2
console.log(tripletSum([1, 2, 6, 3, 4, 5, 9, 10, 11], 20))// ➞ 5
// // - 1 + 9 + 10
// // - 6 + 4 + 10
// // - 11 + 6 + 3
// // - 5 + 6 + 9
// // - 4 + 5 + 11

console.log(tripletSum([1, 0, 2, 6, 3, 9, 3]))// ➞ 0

console.log(tripletSum([], 11))// ➞ []


//Happy Path
console.log(tripletSum([1, 0, 2, 6, 3, 9, 3], 11)); //2

console.log(tripletSum([5, 2, 8], 2)); //0

console.log(tripletSum([1, 2, 6, 3, 4, 5, 9, 10, 11], 20)); //5

//duplicates 
console.log(tripletSum([1, 2, 2, 6, 6, 3,3, 4,4, 5, 9, 10, 11], 20)); //5
//empty array
console.log(tripletSum([], 10)); //[]

//no second arg
console.log(tripletSum([5, 2, 8])); //0

//less then 3 elements 
console.log(tripletSum([5, 2], 2)); //0