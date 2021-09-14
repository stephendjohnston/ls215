"use strict";

// Which Are In?

/*
Given two arrays of strings a1 and a2 return a sorted array r in 
lexicographical order of the strings of a1 which are substrings of strings 
of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
- Beware: r must be without duplicates.

PEDAC
-----

inputs: 2 Arrays
- both will contain strings

outputs: Array
- contains strings or empty

Rules:
- output array cannot contain duplicates
- take the strings from the first array that are substrings of the strings
of the second array and add them to a return array

Examples:

a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]
- "arp" is both a substring of "harp" and "sharp" but only appears once
in the return array
- "live" is both a substring of "lively" and "alive" but only appears once
in the return array
- "strong" is a substring of "armstrong"

Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []
- "tarp" is not a substring because it contains the letter "t"
- "mice" and "bull" are not substrings of any of the words

Mental Model:
Create an empty array to hold the array of substrings.
Iterate over the first array of words and set the current word to arr1[i].
Iterate over the second array of words. If the currentw word of the second
array includes the current word of arr1, add the current word of arr1 to
the substring array and break out of the loop to avoid adding duplicates.
Return the array of substrings.

Algorithm:
- create an empty array "substrings"
- create a for loop that looping from 0 to the length of arr1
  - create a variable "firstSubstring" that will be set to the i
  of arr1
  - create a for loop that will loop from 0 to the length of the second
  array
    - if the current word in the second for loop includes firstSubstring
    add that substring to substrings array and break out of the loop
- return substrings array
*/

function inArray(arr1, arr2) {
  const substrings = [];

  for (let i = 0; i < arr1.length; i += 1) {
    let subString = arr1[i];

    for (let j = 0; j < arr2.length; j += 1) {
      let string = arr2[j];

      if (string.includes(subString)) {
        substrings.push(subString);
        break;
      }
    }
  }

  return substrings.sort();
}

// Top Codeware Solution

function inArray(arr1, arr2) {
  return arr1.filter(function(needle) {
    return arr2.some(function(haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}

let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

console.log(inArray(["xyz", "live", "strong"], a2))// ["live", "strong"]
console.log(inArray(["live", "strong", "arp"], a2))// ["arp", "live", "strong"]
console.log(inArray(["tarp", "mice", "bull"], a2))// []