"use strict";

// Rotation Part 1
// ---------------

/*
PEDAC

Problem:

Write a function that rotates an array by moving the first element to the
end of the array

Input: Array
  - elements may be different types
    - strings, numbers, objects
Output: New Array
  - Same number of elements

Rules:
  - do not modify the original array
  - if the input is an empty array, return an empty array
  - if the input is not an array, return undefined

Mental Model:
Take an array and move the first element in the array (index 0) to the end
of the array (index = array.length - 1).

Examples:

rotateArray([7, 3, 5, 2, 9, 1]); => [3, 5, 2, 9, 1, 7]
7 is at index 0 and is moved to index array.length - 1.
array.slice() => copy of array
array.shift() => 7 => [3, 5, 2, 9, 1]
array.push(7) => [3, 5, 2, 9, 1, 7]


Data Structure:
Array
  - use array indices to manipulate elements of array
  - return NEW array

Algorithm:
- create a copy of the input array using slice
- use shift to remove the first element of the array and save
that element in a variable
- push the removed element onto the end of the array
- return the array
*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];

  let arrCopy = array.slice();
  let element = arrCopy.shift();
  arrCopy.push(element);
  return arrCopy;
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]