/*
Algorithm:
- build a string:
- use a variable with a boolean to determine whether the next character
should be uppercase or lowercase
- the first alphabetic character should be uppercase so we can initialize
the variable to true
- set a condition to check if the current character is non-alphabetic
character, it is add that character as is to the result string
- we can then use an if statement to determine if the character should be
uppercased or lowercased using our boolean
  - if true, set the boolean to false and return the character uppercased
  - if false, seth the boolean to true and return the chracter lowercased

*/

function staggeredCase(string) {
  let result = '';
  let needUpperCase = true;

  for (let i = 0; i < string.length; i += 1) {
    if (/[^a-z]/i.test(string[i])) {
      result += string[i];
    } else if (needUpperCase) {
      needUpperCase = false;
      result += string[i].toUpperCase();
    } else {
      needUpperCase = true;
      result += string[i].toLowerCase();
    }
  }

  return result;
}

// LS Solution

function staggeredCase(string) {
  let needUpper = true;
  let newChar;

  return string.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      if (needUpper) {
        newChar = char.toUpperCase();
      } else {
        newChar = char.toLowerCase();
      }

      needUpper = !needUpper;
      return newChar;
    } else {
      return char;
    }
  }).join('');
}

// Cool student solutions:

function staggeredCase(text) {
    return text.replace(/([^a-z]*[a-z])([^a-z]*[a-z])/gi, (_, first, second) => {
      return first.toUpperCase() + second.toLowerCase();
    });
}

function staggeredCase(string) {
  let counter = 1;
  return string.replace(/[a-z]/ig, (char) => {
    counter += 1;
    return counter % 2 ? char.toLowerCase():
                         char.toUpperCase();
  });
}

staggeredCase('I Love Launch School..l!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"