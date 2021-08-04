"use strict";

// Shortest Unsorted Continuous Subarray
// -------------------------------------

/*
Problem:

Given an integer array, you need to find the shortest continuous subarray 
that if you only sort this subarray in ascending order, then the whole array 
will be sorted in ascending order, too.

Create a function that returns the length of that subarray.

Examples:

findUnsortedSubarray([1, 3, 2, 5, 8, 7, 13]) ➞ 5
// You need to sort [3, 2, 5, 8, 7] in ascending order to make
// the whole array sorted in ascending order.

findUnsortedSubarray([10, 7, 5, 3]) ➞ 4

findUnsortedSubarray([2, 4, 4, 4, 4, 3]) ➞ 5

Notes:
- The given array can contain duplicates, so ascending order here means <= 
(see example #3).
- If the given array is already sorted or is empty, return 0.


PEDAC
-----

Inputs: Array of numbers
Outputs: Number
  - least number of elements that need to be sorted to make
  the entire input array sorted

Rules:
  - If in the input array is already sorted or empty, return 0
  - the input array may contain duplicate numbers
  - find the least number of elements that could be sorted in ascending order
  to make the input array sorted in ascending order and return the number
  of elements (length)
  - if the input is a number, treat it as an array of numbers
  - if the input is a string of numbers or letters, treat as is.
    - letters can be sorted
  - if the input is anything else, return 0.

Examples:

findUnsortedSubarray([1, 3, 2, 5, 8, 7, 13]) ➞ 5
// You need to sort [3, 2, 5, 8, 7] in ascending order to make
// the whole array sorted in ascending order.
- start from the beginning of the array and end of array
  - 1 < 3 = sorted
  - 3 > 2 = not sorted, start index of subarray is 1
  - 2 < 5 = sorted
  - 5 < 8 = sorted
  - 8 > 7 = not sorted, end index of subarray is 5
array.slice(1, 5 + 1).length
- 

findUnsortedSubarray([1, 3, 2, 5, 8, 7, 4, 13]) ➞ 6
- [3, 2, 5, 8, 7, 4] -> 6
- [1, 2, 3, 4, 5, 7, 8, 13]
- [1, 3, 2, 5, 8, 7, 4, 13]

findUnsortedSubarray([10, 7, 5, 3]) ➞ 4
- all the elements need to be sorted in order to be sorted
- if the element at the first index is greater than the number at the 
last index, then the whole array has to be sorted, so return length of input
array

findUnsortedSubarray([10, 7, 5, 3, 11]) -> 4
- [10, 7, 5, 3] -> 4

findUnsortedSubarray([2, 4, 4, 4, 4, 3]) ➞ 5
- sort [4, 4, 4, 4, 3] -> [3, 4, 4, 4, 4]
  - 2 < 4 = sorted
  - 3 < 4 = not sorted, end index is
- [2, 4, 4, 4, 4, 3]
- [2, 3, 4, 4, 4, 4]

findUnsortedSubarray([]) -> 0
findUnsortedSubarray([1, 2, 3, 4, 5]) -> 0
findUnsortedSubarray(13245) -> 2
 - [1, 3, 2, 4, 5] -> [2, 3]
 - [1, 2, 3, 4, 5]
findUnsortedSubarray('abcedf') -> 2
  - [ 'e', 'd'] -> ['d', 'e']
findUnsortedSubarray(undefined) -> 0
findUnsortedSubarray(null) -> 0
findUnsortedSubarray([1000, 500, 0, 500, 501, 521, 2551, 2656, 3020])
- [1000, 500, 0, 500, 501, 521, 2551, 2656, 3020]
- [0, 500, 500, 501, 521, 1000, 2551, 2656, 3020]

findUnsortedSubarray([1, 2, 3, 4, -4, -3, -2, -1]) === 8)
- [1, 2, 3, 4, -4, -3, -2, -1]
- [-4, -3, -2, -1, 1, 2, 3, 4]

Data Structures:
Array
  - convert numbers and strings into array of chars

Mental Model:

Create a copy of the array and sort it. Create a loop that will check
if each element at the current index of the input array and the sorted
array are equal. If the are not equal, set a startindex equal to the current
index. Create another loop that will iterate from the end of the arrays to get
the end index when 2 elements do not match. Slice from the start index to the
end index of the input array and get the length of that array.

Algorithm:
- if array length === 0, return 0
- if the input is a number, convert string and split on each char
- if the input is a string, convert to array of chars
- if array is already sorted
  - create a for loop that will iterate to the input array length - 2
  - on each loop, check if the number at 'i' is less than the number
  at 'i' + 1. if it the number at 'i' is greater, return false
  and continue on to sorting shortest subarray
  otherwise return 0
- create a copy of the input array and sort it
  - array.slice().sort((a, b) => a - b);
- create a for loop to iterate over the elements of the arrays from the
start
  - on each loop check if the current element of the input array is equal
  to the current element of the sorted array
    - if they are not equal, set the start index to 'i' and break out of
    the loop
- create another loop that iterates from the end of the array to the start
  - on each loop, check to see if the current element of the input array
  is equal to the current element of the sorted array.
    - if they are not equal, set the end index to 'i' and break out
    of the loop
- slice the input array from startindex to endindex + 1 and return
the length of the array
*/

function getIndex(array, arraySorted) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] !== arraySorted[i]) {
      return i;
    }
  }
}

function validateInput(input) {
  return Array.isArray(input) && input !== null && input !== undefined;
}

function findUnsortedSubarray(array) {
  if (typeof array === 'number' || typeof array === 'string') {
    array = String(array).toLowerCase().split('');
  } else if (!validateInput(array)) {
    return 0;
  }

  let sortedArrayCopy = array.slice().sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let arrCopy = array.slice();
  let startIndex = getIndex(arrCopy, sortedArrayCopy);
  let endIndex = array.length - 1 - getIndex(arrCopy.reverse(), sortedArrayCopy.reverse());
  
  return array.slice(startIndex, endIndex + 1).length;
}

console.log(findUnsortedSubarray([1, 3, 2, 5, 8, 7, 13]) === 5)
console.log(findUnsortedSubarray([10, 7, 5, 3]) === 4)
console.log(findUnsortedSubarray([2, 4, 4, 4, 4, 3]) === 5)
console.log(findUnsortedSubarray([1, 1, 1]) === 0)
console.log(findUnsortedSubarray([5, 15, 25]) === 0)
console.log(findUnsortedSubarray([4, 8, 6, 10, 9, 11, 13, 15]) === 4)
console.log(findUnsortedSubarray([1, 2, 3, 4, -4, -3, -2, -1]) === 8)//
console.log(findUnsortedSubarray([0, 10, 20, 30, 10, 45, 50]) === 3)//
console.log(findUnsortedSubarray([-200, -201, -100, -1, 1, 0, 100, 200, 300, 68, 400]) === 10)
console.log(findUnsortedSubarray([1000, 500, 0, 500, 501, 521, 2551, 2656, 3020]) === 6)//
console.log(findUnsortedSubarray([15, 5, 15, 5, 15, 5]) === 6)
console.log(findUnsortedSubarray([]) === 0)
console.log(findUnsortedSubarray(13245) === 2) // input is number
console.log(findUnsortedSubarray('abcedf') === 2) // input is string
console.log(findUnsortedSubarray(undefined) === 0)
console.log(findUnsortedSubarray(null) === 0)
console.log(findUnsortedSubarray({}) === 0)
