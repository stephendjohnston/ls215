"use strict";

// Merge Sorted Lists
// ------------------

/*
Problem:
Write a function that takes two sorted arrays as arguments and returns a new 
array that contains all the elements from both input arrays in sorted order.

Input: Two sorted arrays of numbers (or empty)
Output: One array
  - contain numbers from 2 input arrays
  - numbers are sorted in ascending order

Rules:
 - You may not provide any solution that requires you to sort the result array.
 - You must build the result array one element at a time in the proper order.
 - Your solution should not mutate the input arrays.

Mental Model:
Take two input arrays, then iterate over both arrays and
compare numbers and add the lesser of the 2 values to the result array. 

Examples:
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]

merge([4, 5, 7], [1, 3, 6]);      // [1, 3, 4, 5, 6, 7]
- 4 <= 1 // false
- 5 <= 1 // false
- 7 <= 1 // false
- 4 <= 3 // false
- 5 <= 3 // false
- 7 <= 3 // false
- 4 <= 6 // true

Data Structure:

Array

Algorithm:
- initialize empty result array
- create copies of input arrays
- if one of the arrays is empty, return the other array sorted
- iterate over the longer of the two arrays
  => arr1Copy = [4, 5, 7]
  => arr2Copy = [1, 3, 6]
- 4 > 1 true
  - add 1 to result. result = [1]
  - remove 1 from arr2Copy => [3, 6]
- 4 > 3 true
  - add 3 to result. result = [1, 3]
  - remove 3 from arr2Copy => [6]
- 4 > 6 false
  - add 4 to result => [1, 3, 4]
  - remove 4 from arr1Copy => [5, 7]
- 5 > 6 false
  - add 5 to result => [1, 3, 4, 5]
  - remove 5 from arr1Copy => [7]
- 7 > 6 true
  - add 6 to result => [1, 3, 4, 5, 6]
  - remove 6 => arr2Copy = []
- add 7 to result

while both arrays length are greater than 0
  - use for loop to iterate over the arrays
  - after each iteration, add the lesser of the two values to the result and
  remove that same value from the arr copy
  - 
*/

function merge(list1, list2) {
  const result = [];
  const list1Copy = list1.slice();
  const list2Copy = list2.slice();

  while (list1Copy.length > 0 || list2Copy.length > 0) {
    if (list1Copy.length === 0) {
      updateListTwo(list2Copy, result);
    } else if (list2Copy.length === 0) {
      updateListOne(list1Copy, result);
    } else if (list1Copy[0] >= list2Copy[0]) {
      updateListTwo(list2Copy, result);
    } else if (list1Copy[0] < list2Copy[0]) {
      updateListOne(list1Copy, result);
    }
  }

  return result;
}

function updateListOne(list1, result) {
  result.push(list1.shift());
}

function updateListTwo(list2, result) {
  result.push(list2.shift());
}

// LS Solution which is basically just a refactored and succint version
// of mine.

function merge(array1, array2) {
  const copy1 = array1.slice();
  const copy2 = array2.slice();
  const result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]
merge([5, 9, 1], [8, 2, 6]);      // [1, 2, 5, 6, 8, 9]