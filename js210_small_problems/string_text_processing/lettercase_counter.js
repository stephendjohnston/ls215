/*
Lettercase Counter
------------------

Write a function that takes a string and returns an object containing three 
properties: one representing the number of characters in the string that 
are lowercase letters, one representing the number of characters that are 
uppercase letters, and one representing the number of characters that are 
neither.

Rules:
- return an object with three properties representing the number of characters
that are:
  - lowercase, uppercase or neither

Algorithm:

- declare and initialize a object literal with the three properties with
values set to 0
- iterate over each character of the string
  - if the current character is uppercase
    - add 1 to the value with the property name uppercase
  - if the current character is lowercase
    - add 1 to the value with the property name lowercase
  - if the current character is neither
    - add 1 to the value with the property name neither
return the object

*/

function letterCaseCount(string) {
  const caseCount = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  }

  string.split('').forEach(char => updateCaseCount(char, caseCount));
  return caseCount;
}

function updateCaseCount(char, caseCount) {
  if (char.match(/[a-z]/g)) {
    caseCount.lowercase += 1;
  } else if (char.match(/[A-Z]/g)) {
    caseCount.uppercase += 1;
  } else {
    caseCount.neither += 1;
  }
}

// LS Solution

function letterCaseCount(string) {
  const lowerArray = string.match(/[a-z]/g) || [];
  const upperArray = string.match(/[A-Z]/g) || [];
  const neitherArray = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowerArray.length,
    uppercase: upperArray.length,
    neither: neitherArray.length,
  };
}

// OR student solution

function letterCaseCount(str) {
  let lowerCount    = str.replace(/[^a-z]/g, '').length;
  let upperCount    = str.replace(/[^A-Z]/g, '').length;
  let neitherCount  = str.replace(/[a-z]/ig, '').length;

  return { lowerCount, upperCount, neitherCount }
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }