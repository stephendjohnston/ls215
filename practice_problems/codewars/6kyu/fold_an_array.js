"use strict";

// Fold an Array

/*
In this kata you have to write a method that folds a given array of integers by the middle x-times.

An example says more than thousand words:

Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*


Fold 2-times:

[1,2,3,4,5] -> [9,6]

As you see, if the count of numbers is odd, the middle number will stay. 
Otherwise the fold-point is between the middle-numbers, so all numbers would 
be added in a way.

The array will always contain numbers and will never be null. The parameter 
runs will always be a positive integer greater than 0 and says how many runs 
of folding your method has to do.

If an array with one element is folded, it stays as the same array.

The input array should not be modified!

PEDAC
-----

inputs: Array, Number
- contains numbers greater than 0
- Number: the number of times to fold the array

outputs: Array
- numbers

Rules:
- the array will always contain numbers and will never be null
- the Number input will always be greater than 0
- Input arrays of one element will always stay the same
- The input array should not be mutated
- The Number input determines how many times an array gets folded
- if the input array count is odd, the middle number will act as the anchor
for the folding and thus will stay the same. 
- if the input array count is even, then the number at the last index will
be added to the number at the first index (0), the second last number
will be added to the number at the second index (1) etc.


Examples:

Odd input array count, folds - 2:

[1,2,3,4,5] -> [9,6]

3 is the middle number and stays the same. Split the other elments into two
separate arrays 
anchor -> array.length / 2 -> 5 / 2 = 2.5 rounded down === 2 (index 2)
anchor = 3
-> [1, 2] and [4, 5]
reverse the second array -> [5, 4]
Add the elements at the same index to each other
  [1, 2]
+ [5, 4]
= [6, 6]
push anchor back onto the folded array
-> [6, 6, 3]
Perform another fold:
-> 6 at index 1 is the anchor and stays the same. split the other elements
into 2 arrays
-> [6] and [3]
  [6]
+ [3]
= [9]

push the anchor back onto the folded array
-> [9, 6]

Even input array count, folds 2:

[1, 2, 3, 4, 5, 6] -> after fold 1: [7, 7, 7] -> after fold 2: [14, 7]

since input array count is equal, split the array in half, reverse the
second array and then add the numbers at the same indexes of each array
to each other.

[1, 2, 3] and [4, 5, 6]

  [1, 2, 3]
+ [6, 5, 4]
= [7, 7, 7]

array count is now odd so number at index 1 will be anchor

-> [7] and [7]

  [7]
+ [7]
= [14]

add back anchor
-> [14, 7] 


Mental Model:
Loop the number of times === folds
Determine the length of the input array. If the array length is odd, get
anchor be determining the middle number of the array. Split the array
into two arrays. The first array will be the elements from index 0 up to
the anchor index. the Second array will be the elements from one index after
the anchor index to the end of the array. Reverse the second array. map over
the first array, and on each iteration, add current number, to the number
at the current index of the second array. Push the anchor back onto the
array of numbers.
Determine length of array. If the array length is even, there is no anchor.
Determine the middle number by dividing the array length by 2. Split the
array into two arrays. The first array will be from index 0 to the middle
index, the second array will be from the middle index to the end of the
array. Reverse the second array. Map over the first array and add each number
to the number at the same index of the second array. 

Algorithm:
- create a function that will add the values of the two arrays
- function takes 2 two arrays
- reverse the second array
- map over the first array
  - on each iteration, add the current number to the number at the same
  index of the second array
- return this array

- create a for loop that will iterate from 0 up to the number of folds.
- get the index of the middle number
- Math.floor(array.length / 2)
- create a condition that will check the length of the array
  - if the array length is odd
    - set the anchor value to array[middleNumberIndex]
    - use foldArray function to get the array of added numbers
    - push the anchor onto this array
  - if the array length is even
    - use foldArray function
- return array
*/

function foldArray(array, runs) {
  let foldedArray = array.slice();

  for (let i = 0; i < runs; i += 1) {
    let middleIndex = Math.floor(foldedArray.length / 2);

    if (oddArrayLength(foldedArray)) {
      let anchor = foldedArray[middleIndex];

      foldedArray = foldTheArray(foldedArray.slice(0, middleIndex), foldedArray.slice(middleIndex));
      foldedArray.push(anchor);
    } else {
      foldedArray = foldTheArray(foldedArray.slice(0, middleIndex), foldedArray.slice(middleIndex));
    }
  }

  return foldedArray;
}

function oddArrayLength(array) {
  return array.length % 2 === 1;
}

function foldTheArray(arr1, arr2) {
  arr2.reverse();

  return arr1.map((num, idx) => num + arr2[idx]);
}

console.log(foldArray([ 1, 2, 3, 4, 5 ], 1)) // [ 6, 6, 3 ]
console.log(foldArray([ 1, 2, 3, 4, 5 ], 2)) // [ 9, 6 ]
console.log(foldArray([ 1, 2, 3, 4, 5 ], 3)) // [ 15 ]
console.log(foldArray([ -9, 9, -8, 8, 66, 23 ], 1)) // [ 14, 75, 0 ]
