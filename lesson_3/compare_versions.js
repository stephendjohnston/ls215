/*
input: version numbers as strings
  - may be one or more integers seperated by points
    - eg. 1, 1.0, 1.2, 3.2.3, 3.0.0, 4.2.3.0

output: 1, 0, or -1 (integer)

Rules:
  - version1 > version2 => return 1
  - version1 < version2 => return -1
  - version1 === version2 => return 0
  - if either version contains characters other than digits and the '.',
  return null


- versions are compared from left to right from the first set of integers
  of both versions ending at the first point
    - if they are not equal, then you should return the appropriate value
    - if they are equal, move on to the next set of integers up to the next
    point and compare those integers
    - exceptions:
      - if we have 1 and 1.0.1 we compare the first integers: 1 and 1
        - they are equal so we move to the next integers which only the
        second version has and it is a zero. at this point the versions
        are equal
        - we go to the next integer which is 1, making it greater than the
        first version 1.

First thing to do is validate both versions. 
  - if one is not valid, return null

If we have two version numbers that are equal in length then we can
just iterate through each string and compare each number at each index.
If one version is longer than the other, we will have compare up until the
end of each string, and all being equal, continue on the longer string and if
any of the numbers are greater than 0, then that version will be greater.

Data Structures:

- arrays
  - split the input string by the '.' to get an array of integers.
- output will be an integer

Algorithm:

- validate the versions with regex to only contain digits and '.'
- split the versions into arrays of integers
  - determine the the longer of the two versions
  - loop the same number of times equal to the longer version
    - set a a condition to check if the current value at the index from
    either version is undefined, which means we've reached the end the shorter
    version length
      - if one is undefined and the other value is greater than 0, return
      the appropriate value
    - if the value from versionA is larger than the value from versionB
    return 1
    - if the value from versionA is smaller than the value from versionB
    return -1
  - return 0 if the loop terminates meaning the versions are equal

Example of version ordering:

0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37
*/

function compareVersions(version1, version2) {
  if (validateVersion(version1) || validateVersion(version2)) {
    return null;
  }

  let v1Numbers = version1.split('.').map(num => Number(num));
  let v2Numbers = version2.split('.').map(num => Number(num));
  let iterations = v2Numbers.length;

  if (v1Numbers.length > v2Numbers.length) {
    iterations = v1Numbers.length;
  }

  for (let i = 0; i < iterations; i += 1) {
    if (v1Numbers[i] === undefined && v2Numbers[i] > 0) {
      return -1;
    } else if (v2Numbers[i] === undefined && v1Numbers[i] > 0) {
      return 1;
    }

    if (v1Numbers[i] > v2Numbers[i]) {
      return 1;
    } else if (v1Numbers[i] < v2Numbers[i]) {
      return -1;
    }
  }

  return 0;
}

function validateVersion(version) {
  return !version.match(/^[0-9]+(\.[0-9]+)*$/);
}


/*
LS WALK THROUGH
---------------

Understand the Problem and Requirements:

- Input: two version numbers in string representation, version1 and version2
- Output: one of the numbers from 1, 0, and -1; or null for invalid inputs

Definitions and Rules:

- if any inputs contain invalid characters, return null
  - any characters other than digits and . are considered invalid
- Compare the two input versions
  - if version1 > version2, return 1
  - if version1 < version2, return -1
  - if version1 === version2, return 0
- The rules to compare two version numbers
  - start from the left most parts of the two version numbers
  - if the number part of the first version number is larger, then the first version number is larger
  - if the number part of the second version number is larger, then the first version number is smaller
  - if the number parts of both version numbers are the same, move to the next number part of the two version numbers
    - do the same comparison and decide which version number is larger
    - keep moving to the right until the result of the comparison is determined
    - if we get to the last number part of the two version numbers and they're equal,
      then the two version numbers are equal

Create Examples/Test Cases:

Here are some possible comparisons that our program should be able to do:

1 is equal to 1
1.1 is greater than 1.0
2.3.4 is less than 2.3.5

We also need to consider what edge cases our solution should handle:

1.a is not a valid version          // we only want to deal with numbers and dots
.1 and 1. are not valid versions    // versions must begin and end with a number
1..0 is not a valid version         // dots can only appear between two numbers
1.0 and 1.0.0 are equal to 1        // zeros can be inferred but are not always shown
1.0.0 is less than 1.1              // can handle version numbers with different lengths
1.0 is less than 1.0.5              // can handle version numbers with different lengths

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1


Due to our test cases, we must revise the Rules segment:

- The rules to compare two version numbers
  - start from the left most parts of the two version numbers
  - if the number part of the first version number is larger, then the first version number is larger
  - if the number part of the second version number is larger, then the first version number is smaller
  - if the number parts of both version numbers are the same, move to the next number part of the two version numbers
    - do the same comparison and decide which version number is larger
    - keep moving to the right until the result of the comparison is determined
      - if we reach the end of only one number, pad that number with a 0 part
    - if we get to the last number part of the two version numbers and they're equal,
      then the two version numbers are equal

Data Structure:

- iterate through the version numbers, part by part
- compare part numbers

If we prepare our data in an array of numbers data structure, both operations will be easy to express.

Algorithms:

- convert the input data into our data structure of choice
- express steps to produce outputs, using methods and abstractions available on the data structure


- return null if the inputs contain any characters other than digits and dots
- split the input numbers into parts as arrays of integers
- loop through the two version numbers' parts
  - for each step, access one part from each version number
  - if one version number runs out of parts, use 0
  - compare the two parts
    - if part1 < part2
      - return -1
    - if part1 > part2
      - return 1
    - if part1 === part2
      - we move to the next pair of parts
- when we reach the end of the loop, return 0
*/

function compareVersions(versionA, versionB) {
  let validChars = /^[0-9]+(\.[0-9]+)*$/;

  if (!validChars.test(versionA) || !validChars.test(versionB)) {
    return null;
  }

  let aParts = versionA.split('.').map(Number);
  let bParts = versionB.split('.').map(Number);
  let maxLength = Math.max(aParts.length, bParts.length);

  for (let i = 0; i < maxLength; i += 1) {
    let aValue = aParts[i] || 0;
    let bValue = bParts[i] || 0;

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    }
  }

  return 0;
}

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1