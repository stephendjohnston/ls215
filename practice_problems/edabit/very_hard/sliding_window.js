"use strict";

// Find Max of Sliding Window
// --------------------------

/*
Problem:

The sliding window is a technique used to simplify complex data problems. 
A window that slides over the data to examine different sections of it.

Your challenge is to create a sliding window that traverses the array and 
returns the maximum value in each window.

Arguments
- Array:The array over which you are traversing.
- windowLength: The length of the window you will be using to do the search.
- Returns Array: A new array containing the maximums for each window.
- You are given this array and a window length of 2.

[4, 5, 6, 7, 8, 9]
Our function would start by examining the first two elements of the array and pushes the max value to a new array.

[**4, 5,** 6, 7, 8, 9]
... then the window slides to examine the next two, in this case 5 and 6, and pushes the max value to the array.

[4, **5, 6**, 7, 8, 9]
The window will examine the entire length of the array until the maximums for each window have been added to the new array.

Examples
windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 3) ➞ [3, 4, 4, 4, 3, 2, 5]

PEDAC
-----

Inputs: array and integer
  - array to traverse
  - intger is the number of elements that fit in the window
Outputs: Array
  - contains all the maximums from each window of digits

Rules:
- The window starts at index 0 and examines all of the digits that fit into
that window
- The window slides up one index at a time
- take the max digit from each window and add it to the result array

Examples:
windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 3) ➞ [3, 4, 4, 4, 3, 2, 5]
- first window: [1,2,3] => max = 3
- 2: [2,3,4] => max = 4
- 3: [3,4,3] => max = 4
- 4: [4,3,2] => max = 4
- 5: [3,2,1] => max = 3
- 6: [2,1,2] => max = 2
- 7: [1,2,5] => max = 5
result = [3,4,4,4,3,2,5]

Mental model:
Create a result array. create a for loop that will iterate array.length -
windowLength. On each loop slice from the current index to the windowLength
+ index. Use Math.max to get the max value and push into the result array.
return the result array.

Data Structures:

Array
  - window to get masx value
  - result array to push max values into

Algorithm:

- Initialize result array
- create for loop that loops <= array.length - windowLength
  - on each iteration use slice(index, index + windowlength) to get the
  window
  - use Math.max to get the max value
  - push the value to result
- return the result  
*/

function windowMaxes(array, windowLength) {
  const maxes = [];

  for (let i = 0; i <= array.length - windowLength; i += 1) {
    maxes.push(Math.max(...array.slice(i, i + windowLength)));
  }

  return maxes;
} 

console.log(windowMaxes([4, 5, 6, 7, 8, 9], 2));         // [5, 6, 7, 8, 9])
console.log(windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 4)); // [4, 4, 4, 4, 3, 5])
console.log(windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 3)); // [3, 4, 4, 4, 3, 2, 5])
console.log(windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 5)); // [4, 4, 4, 4, 5])
console.log(windowMaxes([1, 4, -2, -9, 5, 32, -89, 23, 43, 2, 75, 3, 12, -3], 6)); // [
//   32,
//   32,
//   32,
//   43,
//   43,
//   75,
//   75,
//   75,
//   75,
// ])