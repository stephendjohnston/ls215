"use strict";

// Edabit > Hard > Recursion: Array Summation

/*
Create a function that sums up all the elements in the array recursively. The use of the array's built-in reduce() function is not allowed, thus, the approach is recursive.
*/

function recurAdd(arr) {
  let sum = 0;
  sum += arr.shift();
  
  if (arr.length === 0) return sum

  return sum + recurAdd(arr)
}

// Visual of the recursion going out and then back in:
// 1: sum = 1, arr = [2, 3, 4, 10, 11] -> 1 + 30
// 2: sum = 2, arr = [3, 4, 10, 11] -> 2 + 28
// 3: sum = 3, arr = [4, 10, 11] 3 + 25
// 4: sum = 4, arr = [10, 11] -> 4 + 21
// 5: sum = 10, arr = [11] -> 10 + 11
// 6: sum = 11, arr = [] -> return 11

console.log(recurAdd([1, 2, 3, 4, 10, 11]))// ➞ 31

console.log(recurAdd([-3, 4, 11, 10, 21, 32, -9]))// ➞ 66

console.log(recurAdd([-21, -7, 19, 3, 4, -8]))// ➞ -10