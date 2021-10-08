"use strict";

// Edabit > Hard > Sharing is Caring

/*
Given an array of numbers, create a function that removes 25% from every number in the array except the smallest number, and adds the total amount removed to the smallest number.

Examples:

showTheLove([4, 1, 4]) ➞ [3, 3, 3]

showTheLove([16, 10, 8]) ➞ [12, 7.5, 14.5]

showTheLove([2, 100]) ➞ [27, 75]

Notes:

There will only be one smallest number in a given array.

inputs: array
- elements are numbers

ouputs: array
- same length as input
- elements are numbers (can be floats)

Rules:
- remove 25% from every number except the smallest number
- add the removed 25% to the smallest number
- return the numbers in the same order they appear
- there will always only be one smallest number in the input

Examples:

showTheLove([4, 1, 4]) ➞ [3, 3, 3]
- 1 is the smallest so nothing is taken from it
- 25% of 4 is 1, so 1 is removed from both 4's and added to the 1

Mental Model:
Find the smallest number in the array using Math.min. Iterate over the array using map and subtract 25% from all the numbers that are not the min. Save the subtracted into a toAdd variable which will later be added to the smallest number. Add the toAdd sum to the smallest number in the array and return the array.

Algorithm:
- find the smallest num using Math.min
- initialize smallestNumIdx;
- initialize toAdd var = 0;
- map over the input array
  - if the current num === smallestNum
    - set the smallestNumIdx to the current idx
  - for every number that is not the smallest num get 25% of the current num
  - add this number to toAdd
  - subtract the 25% from the current num and the return that num
- add toAdd to the smallest number in the array
- return the array
*/

function showTheLove(array) {
  let smallestNum = Math.min(...array);
  let smallestNumIdx;
  let toAdd = 0;
  
  array = array.map((num, idx) => {
    if (num === smallestNum) {
      smallestNumIdx = idx;
      return num;
    }
    let twentyFivePercent = num * 0.25;
    toAdd += twentyFivePercent;
    return num - twentyFivePercent;
  })
  
  array[smallestNumIdx] += toAdd;
  return array;
}

console.log(showTheLove([4, 1, 4]))// [3, 3, 3,])
console.log(showTheLove([16, 10, 8]))// [12, 7.5, 14.5])
console.log(showTheLove([2, 100]))// [27, 75])
console.log(showTheLove([75, 64, 55]))// [56.25, 48, 89.75])
console.log(showTheLove([84, 94, 26, 80, 16]))// [63, 70.5, 19.5, 60, 87])
console.log(showTheLove([55, 27]))// [41.25, 40.75])