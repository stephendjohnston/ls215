"use strict";

// Increasing Range
// ----------------

/*
Problem:

You are given a list of numbers in a "short-hand" range where only the 
significant part of the next number is written because we know the numbers 
are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). 
Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 
1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits 
are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

Input: string of numbers(ranges)
Output: Array of complete Numbers

Rules:
  - only the significant part of the next number is written because
  the numbers are always increasing
    - eg. 1,3,7,2
      - 2 comes after 7 but since it must be increasing, the next number
      after 7 that has a 2 in it, is 12. so 
      - so it becomes 1,3,7,12
  - ranges are separated by: ["-", ":", ".."]
    - eg. "1-3" or "1:5:2" or "3..2"
  - sets of ranges are separated by: ","
  - range limits are always inclusive
    - eg. "1-3" will be 1, 2, 3.

Examples:

- "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
These are all separate ranges that only contain one value. Each subsequent
range must be increasing eg. 2 becomes 12 after the 7.

- "1-3, 1-2" --> 1, 2, 3, 11, 12
Here there are two ranges: "1-3" and "1-2".
"1-3" repesents 1,2,3 and "1-2" represents 11,12.
Since 3 is the last number in the first range, the one in the second range
represents the next highest number that ends in a 1 which is 11.

- "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
One Range: which represents 1 all the way to 12. If the 5 was not there, it
would be 1, 2. This could also be written as 1:2:2 and would mean the same 
thing. 1:1:1 would be 1 to 21. 

- "104-2" --> 104, 105, ... 112
One range: 104 to 112

- "104-02" --> 104, 105, ... 202
One range: 104 to 202
The number that 02 represents must contain 02 as the last digits and be greater
than 104. 

- "545, 64:11" --> 545, 564, 565, .. 611

Mental Model:
Replace all separators with "-".

Take an array of ranges. If the range is only on number with no separators,
it can be added to an result as that number. If the next range is also a number,
it can be added to the result as a number that is greater than the number that
comes before it. eg. 7, 2 means 7, 12. If the range is an actual range eg. "1-3":
add the numbers of that range to the result: 1, 2, 3. Take the next range and
compare the first number of that range with the last number of the previous range
to determine the first number in the next range. eg following "1-3" is "1-2":
1 < 3 which means we need the next number after 3 which ends in a 1 which
is 11. so the next range starts at 11. The second number in the "1-2" range is
2. We must add to the first number until we get a number that ends with 2.

Examples: In Depth
["1-3", "1-2"]
  - each element of the array is a range.
  - iterate over the ranges
    - split the ranges on the separators
      - ["1", "3"];
      - if the array only has 2 elements and the second element is smaller
      than the first
        - iterate from the first element to the last element and add all
        of the numbers in that range to an array
      - say we had ["3", "1"] and the second element is less than the first
      we have to determine what the first number after 3 that ends with a 1
      is.
      - we can add 10 to the second number until it is greater than the
      first number.
        - eg. 1 + 10 = 11 which is greater than 3 and ends with 1. so the 
        range is 3..11.

["1:5:2"]
 - One range
  - split the range on its separators
  - ["1", "5", "2"]
  - iterate over the numbers: i < arr.length - 1.
    - if the first number is less than the second number
      - add all the numbers from the first to the second number to an array
        - [1,2,3,4,5]
      - if the second number is less than the third number, repeat above
      - if the second number is greater than the third number, we have to
      find the number that is greater than the second but ends in the third
      number
        - add 10 to 2 = 12 > 5. now add all the numbers from 5 to 12


Step one is to replace all separators and replace with '-'.
Step two is to split the string on ',' and trim all the whitespace
from string element.
This will leave us with an array of strings. Some strings will just be numbers
and some will be ranges.
  eg. ["545", "64-11"]

Problem 1:
Iterating over the array of string numbers we need to determine which
strings are just numbers and which are ranges.
If the string does not contain a '-', then it is a number.
If the string does contain a '-', then it is a range.

NUMBER
If the string is just a number, compare it to the last number in
the result array.
If the string number is greater than the last number, push it into the result
If the string number is less than or equal to the last number in result, then
enter a loop that will add 10 to the string number until it is greater than
the last number in result.

RANGE
If the string is a range, split the range into an array of string numbers.
eg "64-11" => ["64", "11"]
result = [545]

We need to determine what "64" means in comparison to 545.
The first check to make is if the first number is greater than the last
number in result.
eg. 64 <= 545 // true
  - so we need to increase 64 to a number that is greater than 545 and
  ends with 64 which is 564 but how do we get to that number?
  - while loop that adds 1 to 64 until number % 100 === 64
    - how do we know to use 100?
      - if the starting number is one digit, just add 10, if two use 10
      if three use 100, if four use 1000


given "545, 64:11", follow comments by code to see output at each stage.
*/

function increasingRange(stringRanges) {
  stringRanges = stringRanges.replace(/\.\.|:/g, "-")
  let arrayOfRanges = getArrayOfRanges(stringRanges); // [ [ '545' ], [ '64', '11' ] ]

  for (let outerIdx = 0; outerIdx < arrayOfRanges.length; outerIdx += 1) {
    let firstArr = arrayOfRanges[outerIdx];
    let nextArr = arrayOfRanges[outerIdx + 1];

    if (outerIdx < arrayOfRanges.length - 1) {      // this condition is here so that the last array isnt compared against a value beyond the length of the array
      makeNextArrayNumbersValid(firstArr, nextArr);
    }

    makeRangesValid(arrayOfRanges);
  }

  // arrayOfRanges is now [['545'], ['564', '611']];
  // now each array is expanded into all the numbers in the given range
  // and added to result.
  // Or if it is a one element array, then that number is added to result

  const result = [];
  
  arrayOfRanges.forEach((range, idx) => {
    if (range.length === 1) {
      result.push(Number(range[0]));
    } else {
      expandRange(range, result);
    }
  });

  return result;
}

function getArrayOfRanges(strArrRanges) {
  return strArrRanges.split(',')
                     .map(str => str.trim())
                     .map(range => range.split('-'));
}

function expandRange(range, result) {
  let count = Number(range[range.length - 1]);

  for (let start = Number(range[0]); start <= count; start += 1) {
    result.push(Number(start));
  }
}

function makeRangesValid(ranges) {
  ranges.map(range => {
    if (range.length === 1) return range;

    for (let i = 0; i < range.length - 1; i += 1) {
      let first = Number(range[i]);
      let next = Number(range[i + 1]);
      let sliceValue = range[i + 1].length;

      if (first > next) {
        let count = first;
        do {
          count += 1;
          if (String(count).slice(-sliceValue) === range[i + 1]) {
            break;
          }
        } while (true)

        range[i + 1] = String(count);
      }
    }

    return range;
  });
}

function makeNextArrayNumbersValid(firstArr, nextArr) {
  let first = Number(firstArr[firstArr.length - 1]);
  let next = Number(nextArr[0]);
  let sliceValue = nextArr[0].length;
  // console.log(firstArr, nextArr);
  if (first > next) {
    let count = first;
    do {
      count += 1;
      if (String(count).slice(-sliceValue) === nextArr[0]) {
        break;
      }
    } while (true)

    nextArr[0] = String(count);
  }
}

console.log(increasingRange("1, 3, 7, 2, 4, 1"));       // 1, 3, 7, 12, 14, 21
console.log(increasingRange("1-3, 1-2"));               // 1, 2, 3, 11, 12
console.log(increasingRange("1:5:2"));                  // 1, 2, 3, 4, 5, 6, ... 12
console.log(increasingRange("104-2"));                  // 104, 105, ... 112
console.log(increasingRange("104-02"));                 // 104, 105, ... 202
console.log(increasingRange("545, 64:11"));             // 545, 564 565, ... 611
console.log(increasingRange("0, 34-2, 8, 3, 134-3-1, 4")); // 0, 34, ... 42, 48, 53, 134, ... 151, 154

// USE endsWith() method