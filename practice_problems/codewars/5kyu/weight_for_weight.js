"use strict";

// Weight for Weight
// -----------------

/*
My friend John and I are members of the "Fat to Fit Club (FFC)". John is 
worried because each month a list with the weights of members is published 
and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, 
I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the 
list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give 
this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if they were 
strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes before as a 
string.

All numbers in the list are positive numbers and the list can be empty.

Notes:
------
- it may happen that the input string have leading, trailing whitespaces and 
more than a unique whitespace between two consecutive numbers


PEDAC
-----

inputs: string
- numbers
- may have leading and trailing whitespace
- numbers may be separated by more than just one space char " "

outputs: String
- numbers reordered based on the sum of their digits
- if two numbers have the same sum, order the number based on the length of
the number as a string

Rules:
- input will be a string
  - will be separated by spaces, maybe more than 1 consecutive space
- re-order the numbers in the string based on the sum of their digits
  - eg. 99 becomes 18, 100 becomes 1, 180 becomes 9, 90 becomes 9
- if there are two numbers that have the same sum, order them based on digit
for digit comparison: 
  - eg. 180 = 9, 90 = 9
    - they both have the same sum, but 180 will appear before 90 because
    1 < 9
- all numbers in the list will be positive
- if the list is empty, return empty string
- treat arrays of numbers as valid input
- all other input should return empty string


Examples:

orderWeight("56 65 74 100 99 68 86 180 90") === "100 180 90 56 65 74 68 86 99"
-> 100 = 1
-> 180 = 9, 
-> 90 = 9, 180 comes before 90 because they two numbers are compared digit
for digit: 1 < 9
-> 56 = 11
-> 65 = 11, 5 < 6 so 56 comes first
-> 74 = 11, 5 < 6 < 7
-> 68 = 14
-> 86 = 14, 8 > 6
-> 99 = 18

// leading whitespace
orderWeight(" 56 65 74 100 99 68 86 180 90") === "100 180 90 56 65 74 68 86 99"
// trailing whitespace
orderWeight("56 65 74 100 99 68 86 180 90 ") === "100 180 90 56 65 74 68 86 99"
// more than one space between numbers
orderWeight("56 65  74 100 99 68 86  180 90") === "100 180 90 56 65 74 68 86 99"
// Empty string
orderWeight("") === ""

// Array input
orderWeight([56, 65, 74, 100, 99, 68, 86, 180, 90]) === "100 180 90 56 65 74 68 86 99"
// Non-array or string input
orderWeight(4839234234) === ""
// String, but not numbers
orderWeight("Hello") === ""

Mental Model:
Split the input string into an array of String numbers. Sort the array of strings.
On each iteration, split the current string number into an array of digits.
Convert each digit to a number. Get the sum of the digits and compare that
sum with the sum of the other number. Whichever number has the lower sum,
comes first. If they are equal, compare each string number using the compare
operators. 

Algorithm:
- Validate the input
  - if the input is anything other than a string or an array, return ""
  - if the input is a string that contains alpha chars, return ""
  - if the input is an array of numbers, or string numbers, use as is.
  - if the input is an array of non-numbers, return ""
- if the input is a string, split the string into an array of chars
  - remove any elements from the array that are not string numbers
    - str.filter(el => el.length > 0)
- sort the array
  - on each iteration, split each str being compared into an array of chars
  and convert each digit to a number
    - a.split('').map(Number) and b.split('').map(Number)
    - use reduce to get the sum of this number
      - reduce((acc, num) => acc + num)
  - if sum a === sum b, return String(sumA) - String(sumB)
  - else return sumA - sumB
- join the sorted array using join(' ');
*/

function getStrSum(strNum) {
  return strNum.split('').map(Number).reduce((acc, num) => acc + num);
}

function orderWeight(strng) {
  let strArr = strng.replace(/[' ']{2,}/g, ' ').trim().split(' ');

  return strArr.sort((a, b) => {
    let sumA = getStrSum(a);
    let sumB = getStrSum(b);

    if (sumA === sumB) {
      if (a > b) return 1;
      if (a < b) return -1;
    }

    return sumA - sumB;
  }).join(' ');
}

console.log(orderWeight(" 56 65 74 100    99 68 86 180 90 "))// === "100 180 90 56 65 74 68 86 99"
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))// "11 11 2000 10003 22 123 1234000 44444444 9999"