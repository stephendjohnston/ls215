"use strict";

// Group in Order
// --------------

/*
Problem:
Create a function that groups an array of numbers based on a size parameter. 
The size represents the maximum length of each sub-array.

[1, 2, 3, 4, 5, 6], 3
[[1, 3, 5], [2, 4, 6]]
// Divide array into groups of size 3.

[1, 2, 3, 4, 5, 6], 2
[[1, 4], [2, 5], [3, 6]]
// Divide array into groups of size 2.

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4
[[1, 4, 7, 10], [2, 5, 8, 11], [3, 6, 9]]
// "Leftover" arrays are okay.

Examples:
---------
group([1, 2, 3, 4], 2) ➞ [[1, 3], [2, 4]]

group([1, 2, 3, 4, 5, 6, 7], 4) ➞ [[1, 3, 5, 7], [2, 4, 6]]

group([1, 2, 3, 4, 5], 1) ➞ [[1], [2], [3], [4], [5]]

group([1, 2, 3, 4, 5, 6], 4) ➞ [[1, 3, 5], [2, 4, 6]]

Notes:
------
- The size parameter represents the maximum size for each sub-array (see ex.4). 
You should try to fill each sub-array evenly. In other words, ex.4 should 
be [[1, 3, 5], [2, 4, 6]], not [[1, 3, 5, 6], [2, 4]].
- Keep the relative order of the numbers in each sub-array the same as the 
order in the original array.

PEDAC
-----

Inputs: Array of numbers, Integer
  - Integer represents the size of each subarray in retrun array
Outputs: Array of subarrays
  - each subarray will have the length of the input integer

Rules:

- The size parameter represents the maximum size for each sub-array
  - fill the subarrays until there are no elements left, some
  subarrays may not have the max length
- Keep the relative order of the numbers in each sub-array the same 
as the order in the original array.
- Determining what elements go in what subarray use this formula:
  - input array size / size, rounded up to nearest integer
  - eg. array size 7 / size 4 = 1.75 => 2 so every second element is added
  to a subarray until the end of the array is reached, then elements
  are added to the next subarray.

Example:
group([1, 2, 3, 4, 5, 6, 7], 4)) // [[1, 3, 5, 7], [2, 4, 6]])
- Math.ceil(array.length / size) => 2
  - Starting at index 0, every second element gets added to the first subarray
  until the end of the array is reached
    - first subarray [1, 3, 5, 7]
  - Starting at index 1, every second element is added to the second subarray
  until the end of the array is reached
    - [2, 4, 6]

group([1, 2, 3, 4, 5], 1))       // [[1], [2], [3], [4], [5]])
- 5 / 1 = 5
  - since the array length is only 5 and the subarray size is 1, it will only take
  one iteration to go from each element to the end of the array, and only one
  element being added to each subarray

Mental Model:
This problem will require 2 loops. One to loop equal to the number of times
equal to the array length / size, rounded up. The inner loop will iterate over
the elements of the input array. It will increment by array length / size 
rounded up. It will add the elements at each index to a subarray, then at the
end of iterating over the input array, will add that subarray to a mainArray.
It will then repeat the process starting at the next index of the input array.

Data Structures:

Array
- Main array and subarrays

Algorithm:

- initialize an incrementer
  - Math.ceil(array.length / size)
- initialize a mainArray to hold the subarrays
- create a for loop that will iterate up to the incrementer value
  - initialize a subArray
  - create a for loop that will iterate up to the array.length and 
  increments by incrementer, where index equals the current interation
  of the outer loop
    - add the elements at array[index] to the subarray
  - push this subarray to the mainArray
- return the mainArray
*/

function group(array, size) {
  const grouped = [];
  let incrementer = Math.ceil(array.length / size);

  for (let i = 0; i < incrementer; i += 1) {
    let nestedGroup = [];

    for (let j = i; j < array.length; j += incrementer) {
      nestedGroup.push(array[j]);
    }

    grouped.push(nestedGroup);
  }

  return grouped;
}

console.log(group([1, 2, 3, 4], 2))          // [[1, 3], [2, 4]])
console.log(group([1, 2, 3, 4, 5, 6, 7], 4)) // [[1, 3, 5, 7], [2, 4, 6]])
console.log(group([1, 2, 3, 4, 5], 1))       // [[1], [2], [3], [4], [5]])
console.log(group([1, 2, 3, 4, 5, 6], 4))    // [[1, 3, 5], [2, 4, 6]])
console.log(group([1, 2, 3, 4, 5, 6], 3))    // [[1, 3, 5], [2, 4, 6]])
console.log(group([1, 2, 3, 4, 5, 6], 2))    // [[1, 4], [2, 5], [3, 6]])
console.log(group([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4)) // [[1, 4, 7, 10], [2, 5, 8, 11], [3, 6, 9]])
console.log(group([1, 2, 3, 4, 5, 6, 7, 8], 2))  // [[1, 5], [2, 6], [3, 7], [4, 8]])