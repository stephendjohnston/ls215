"use strict";

// Consecutive Strings
// -------------------

/*
You are given an array(list) strarr of strings and an integer k. Your task 
is to return the first longest string consisting of k consecutive strings 
taken in the array.

Examples:

strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Note
- consecutive strings : follow one after another without an interruption


PEDAC
-----

inputs: Array and Number (k) of consecutive strings
- Array of strings (words)
- if the array is empty, or k > array.length, or k <= 0 return ""

outputs: String
- 2 strings concatenated together

Rules:
- if the array length is 0, or if the number > array.length, or k <= 0
  - return ""
- the output should be the k consecutive strings that joined together
have the largest length
  - return the strings that appear first in the array if there is a tie
  between other strings later in the array

Examples:

strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

// Empty array
console.log(longestConsec([], 3) === "")

// k <= 0
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === "")


Mental Model:
Use reduce method. On each iteration of reduce, slice the array of strings
from the current index to the current index + k. This will give us an
array of k length. Join this array together and get the length. If this length
is greater than the previous length, return this concatenated string. 

Algorithm:
- validate input
  - if array.length === 0 || k > array.length || k <= 0
    - return ""
- create a variable called MaxLength = 0
- iterate over the array of strings using reduce
- set the initial value to an empty string
  - on each iteration, slice the array of strings from current index
    to the current index + k
  - join this array together
  - get the length of the string
    - if the length of this string is greater than maxLength,
      - return this concatenated string
      - set maxLength to the length of this string
- return string

**refactored after initial solution
*/

function longestConsec(strArr, k) {
  if (k > strArr.length || k <= 0) return '';

  return strArr.reduce((longest, _, i) => {
    let concatenated = strArr.slice(i, i + k).join('');
    if (concatenated.length > longest.length) {
      longest = concatenated;
    }

    return longest;
  }, '');
}

console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)) // "folingtrashy"
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))// "abigailtheta")
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh")
console.log(longestConsec([], 3) === "")
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu")
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === "")
