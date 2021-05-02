/*
Swap Case
---------

Write a function that takes a string as an argument and returns that string 
with every lowercase letter changed to uppercase and every uppercase letter 
changed to lowercase. Leave all other characters unchanged.

Rules:
- return a string
- each character from the input string should have it's case swapped
  - lowercase becomes uppercase, uppercase becomes lowercase
- return string should contain all characters from the given string

Algorithm:
Build a new string:
- declare and initialize a new empty string
- split the input string into an array of characters
- iterate over the characters and on each char:
  - if the char is uppercase, add that char as a lowercase to the return string
  - if the char is lowercase, add that char as a uppercase to the return string
  - if the char not an alphabetic character, add it to the return string as is
- return the new string

*/

function swapCase(string) {
  let caseSwapped = '';

  string.split('').forEach(char => {
    if (char === char.toUpperCase()) {
      caseSwapped += char.toLowerCase();
    } else if (char === char.toLowerCase()) {
      caseSwapped += char.toUpperCase();
    } else {
      caseSwapped += char;
    }
  });

  return caseSwapped;
}

// OR passing a function as a callback to map

function swapCase(string) {
  return string.split('')
               .map(transformChar)
               .join('');
}

function transformChar(char) {
  if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else if (char === char.toLowerCase()) {
      return char.toUpperCase();
    } else {
      return char;
    }
}

// // LS Solution

function swapCase(string) {
  return string.split('').map(char => {
    if (/[a-z]/.test(char)) {
      return char.toUpperCase();
    } else if (/[A-Z]/.test(char)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

// // Student solutions I liked using replace and regex 

function swapCase(string) {
  return string.replace(/\w/g, char => {
    return /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase();
  });
}

const swapCase = (str) => {
  return str.replace(/([A-Z]*)([a-z]*)/g, (hi, upper, lower) => {
    return upper.toLowerCase() + lower.toUpperCase();
  });
};

function swapCase(string) {
  return string
  .replace(/[a-z]/gi, (char) => char ===
                      char.toUpperCase() ?
                      char.toLowerCase() :
                      char.toUpperCase());
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"