"use strict";

// Bubble Sort
// -----------

/*
Problem:

A bubble sort works by making multiple passes (iterations) through an array. 
On each pass, the two values of each pair of consecutive elements are 
compared. If the first value is greater than the second, the two elements 
are swapped. This process is repeated until a complete pass is made without 
performing any swaps — at which point the array is completely sorted.

Write a function that takes an array as an argument and sorts that array 
using the bubble sort algorithm described above. The sorting should be done
 "in-place" — that is, the function should mutate the array. You may assume 
 that the array contains at least two elements.

Input: Array of numbers or strings
Output: Array of numbers or strings, sorted

Rules:
- Consecutive elements are compared and if the first value has greater
value than the second value, than the values are swapped.
- the process is repeated until a complete loop is made over every element
without any swaps being made. 
- the input array should be sorted 'in-place' (mutated)
- the input will contain at least 2 elements.

Example:
const array2 = [6, 2, 7, 1, 4];
1st iteration: 6 > 2 => swap => [2, 6, 7, 1, 4]
2nd: 6 < 7 => no swap
3rd: 7 > 1 => swap => [2, 6, 1, 7, 4]
4th: 7 > 4 => swap => [2, 6, 1, 4, 7]
Repeat process
1st: 2 < 6 => no swap
2nd: 6 > 1 => swap => [2, 1, 6, 4, 7]
3rd: 6 > 4 => swap => [2, 1, 4, 6, 7]
4th: 6 < 7 => no swap
Repeat Process
1st: 2 > 1 => swap => [1, 2, 4, 6, 7]
continue check til 4th
Repeat Process
No swaps made => array sorted
Return array

Date Structure:

Array - mutate input array

Algorithm:

Create a do while loop
create a variable that will keep track of if a swap has been made
  - swapMade = false
Create a for loop in the do while loop that will iterate over the values
  - if a swap is made
    - set swapMade to true so that the we can repeat process
  - if no swap is made
    - swapMade will be false and the do while loop will terminate because
    it means the array is sorted.
  - to compare values
    - compare the first value with the value at the current index plus 1
      - this will mean we'll need to exit the for loop at array.length - 1
      so that we dont compare the last value against a value that does not
      exist
    - if the first value is greater, swap the values
      - [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]]
    - otherwise move to next iteration.

*/

function bubbleSort(array) {
  let swapMade;

  do {
    swapMade = false;
    let idx = 0

    for (; idx < array.length - 1; idx += 1) {
      if (array[idx] > array[idx + 1]) {
        [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]];
        swapMade = true;
      }
    }
  } while (swapMade)
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]