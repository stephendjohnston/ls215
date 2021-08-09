"use strict";

// Leader in Array
// ---------------

/*
Create a function that finds each number in the given array that is greater 
than every number that comes after it. Your solution should return an array 
of the number(s) that meet these criteria.

Examples:
---------

leader([2, 3, 20, 15, 8, 3]) ➞ [20, 15, 8, 3]
// Note that 20 is greater than all the elements to it's
// right side, similarly 15 and so on.

leader([2, 3, 20, 15, 8, 25, 3]) ➞ [25, 3]
// Note that 20 cannot be added because it is not greater than 25.

leader([1, 2, 3, 4, 5]) ➞ [5]
// 5 is technically greater than the (zero) remaining items.

leader([8, 7, 1, 2, 10, 3, 5]) ➞[10, 5]
// 10 is greater than all items to the right of it, so include.
// 3 is not greater than all items to the right of it, so exclude.
// 5 is greater than the remaining items, so include.

Notes:
- Add elements in the new array in the same order they occur in the input 
array.


PEDAC
-----

Inputs: Array
  - contains numbers
Outputs: Array
  - contains numbers
  - empty if invalid input or empty array input

Edge cases:
- if the input is empty array, return empty array
- if the input is anything other than an array, return empty array
- the input array may contain string numbers
  - treat as valid array
- ignore elements that are not numbers or string numbers


Rules:
- find the highest number in an input array and then include it and any 
numbers that are greater than the number to the right of it
- output array should be in the same order as they occur in the input
- if the last number in the input is the greatest number, return an
array of just that number
- if a number to the right of a number is equal, do not include it. 
  - only include numbers that are GREATER

Examples:

leader([2, 3, 20, 15, 8, 3]) ➞ [20, 15, 8, 3]
// Note that 20 is greater than all the elements to it's
// right side, similarly 15 and so on.

leader([2, 3, 20, 15, 8, 25, 3]) ➞ [25, 3]
// Note that 20 cannot be added because it is not greater than 25.

leader([1, 2, 3, 4, 5]) ➞ [5]
// 5 is technically greater than the (zero) remaining items.

leader([8, 7, 1, 2, 10, 3, 5]) ➞[10, 5]
// 10 is greater than all items to the right of it, so include.
// 3 is not greater than all items to the right of it, so exclude.
// 5 is greater than the remaining items, so include.

leader([2, 3, 20, 15, 8, 25, '3']) ➞ [25, 3]
// string number is still valid

leader([2, 3, 'a', 20, '15', 8, 'r', 3]) ➞ [20, 15, 8, 3]
// 'r' is not a number so ignore

leader([]) ➞ []

leader('2342442') ➞ []

leader(24595802) ➞ []

Mental Model:
Validate input. If the input is not an array, return empty array. Check
if all elements are valid numbers. Keep all numbers that are valid. 
Find the max value in the input array. Get a new array that starts at the
index of the max value. If the slice array length is 1, return that array.
Filter over the sliced array. If the current number is greater than then next
number, keep that number, otherwise do not include.

Data Structures:

Array
  - Numbers
  - convert all string numbers to Numbers

Algorithm:
- if Array.isArray(input) is not an array, return empty array
- filter over input array and keep all elements that are valid numbers
  - Number(element) === element
- Get max number of input array
  - Math.max(...input)
- get the index of the number in the input array
  - input.indexOf(maxNum)
- get an array from the index of maxNum to end of input array
  - input.slice(maxNumIndex)
- filter over sliced array
  - if the current number > nextNumber
    - include
- return filtered array


*/

function leader(array) {
  let result = [];
  if (!Array.isArray(array)) return result;

  let validArrElements = array.filter(el => Number(el) === Number(el))
                              .map(Number);

  let maxNum = Math.max(...validArrElements);
  let maxNumIndex = validArrElements.indexOf(maxNum);

  let slicedArray = validArrElements.slice(maxNumIndex);

  for (let i = 0; i < slicedArray.length; i += 1) {
    let currentNum = slicedArray[i];
    let nextNum = slicedArray[i + 1] || 0;

    if (currentNum > nextNum) {
      result.push(currentNum);
    }
  }

  return result;
}

console.log(leader([2, 3, 20, 15, 8, 3]))// [20, 15, 8, 3])
console.log(leader([2, 3, 20, 15, 26, 3]))// [26, 3])
console.log(leader([1, 2, 3, 4, 3, 10]))// [10])
console.log(leader([500, 400, 300, 200, 100, 50, 10, 5]))// [500, 400, 300, 200, 100, 50, 10, 5])
console.log(leader([8, 7, 1, 2, 10, 3, 5]))// [10, 5])
console.log(leader([2, 3, 20, 15, 8, 25, '3']))// ➞ [25, 3]
console.log(leader([2, 3, 'a', 20, '15', 8, 'r', 3]))// ➞ [20, 15, 8, 3]
console.log(leader([]))// ➞ []
console.log(leader('2342442'))// ➞ []
console.log(leader(24595802))// ➞ []
