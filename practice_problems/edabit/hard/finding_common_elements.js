"use strict";

// Finding Common Elements
// -----------------------

/*
Create a function that takes two "sorted" arrays of numbers and returns an 
array of numbers which are common to both the input arrays.

Examples:

commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []

Notes:
- Arrays are sorted.
- Try doing this problem with O(n + m) time complexity.


PEDAC
-----

Inputs: Two arrays
  - arrays will contain numbers
  - pos and neg
Outputs: array
  - contains numbers that are common between both input arrays
  - is empty if no common numbers

Rules:
  - input arrays will not be equal in length
  - input arrays are sorted in ascending order
  - arrays contain pos and neg numbers
  - return an array with the numbers that appear in both input arrays
  - if a common number appears more than once, only include it once in the
  output

Examples:

commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]
-> -1 and 1 are not common, so only 3 is common

commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]
-> 1, 3, 4, 7 appear in both inputs

commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]
-> 2 appears multiple times, but is only included once
commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []
-> no common numbers returns an empty array

Mental Model:

filter the input arrays so that they only contain unique values. Iterate
over one of the arrays and on each iteration, if the the other array includes
the current value, select that value. 

Algorithm:

- getting unique values: do this for both arrays
  - array.filter((val, idx) => array.indexOf(val) === idx);
- filter over one of the arrays and select all the elements that
appear in the other array
  - array1.filter(val => array2.includes(val));

*/

function commonElements(array1, array2) {
  array1 = array1.filter((val, idx) => array1.indexOf(val) === idx);
  array2 = array2.filter((val, idx) => array2.indexOf(val) === idx);

  return array1.filter(val => array2.includes(val));
}

console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3]))// [3])
console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]))// [1, 3, 4, 7])
console.log(commonElements([-1, 3, 4, 6, 7, 9], []))// [])
console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]))// [1, 2, 4, 5])
console.log(commonElements([-1, 3, 4, 6, 7, 9], [100, 300, 900]))// [])
console.log(commonElements([18, 30, 60, 77, 89, 103, 107, 139, 149, 150, 201, 204, 233, 248, 250, 264, 273, 297, 308, 310, 319, 320, 348, 349, 353, 362, 365, 368, 376, 381, 395, 401, 405, 416, 421, 424, 434, 444, 452, 454, 464, 478, 497, 511, 513, 523, 533, 551, 562, 565, 593, 602, 604, 609, 610, 614, 620, 624, 643, 645, 654, 660, 674, 674, 685, 686, 700, 704, 712, 723, 728, 735, 741, 760, 765, 775, 776, 781, 787, 788, 791, 806, 823, 842, 848, 849, 901, 904, 909, 911, 916, 931, 932, 932, 940, 950, 951, 959, 973, 993], [3, 13, 25, 25, 27, 32, 39, 40, 45, 53, 55, 57, 60, 67, 78, 80, 81, 86, 114, 116, 125, 130, 146, 159, 164, 174, 192, 193, 209, 211, 265, 275, 279, 298, 303, 303, 314, 327, 330, 337, 355, 356, 375, 386, 405, 449, 452, 454, 457, 470, 476, 496, 499, 500, 501, 504, 516, 547, 577, 603, 604, 613, 618, 628, 638, 652, 659, 677, 683, 685, 700, 701, 710, 713, 727, 728, 734, 740, 774, 780, 790, 797, 833, 834, 837, 863, 869, 875, 885, 910, 911, 928, 930, 938, 943, 959, 964, 969, 987, 994]))
// [60, 405, 452, 454, 604, 685, 700, 728, 911, 959])
