/*
Algorithm:

use the substrings function which returns an array of all the possible
substrings from the string, then use the filter method to select all of 
the substrings that have a length > 1 and where the substring is equal
to the same substring reversed.
*/


function palindromes(string) {
  let result = substrings(string).filter(str => {
    return str.length > 1 && str === [...str].reverse().join('');
  });

  console.log(result);
}

function leadingSubstrings(string) {
  return [...string].map((_, index, arr) => {
    return string.slice(0, index + 1)
  });
}

function substrings(string) {
  let result = [];

  for (let i = 0; i < string.length; i += 1) {
    result.push(leadingSubstrings(string.slice(i)));
  }

  return result.flat();
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// LS Solution:

function isPalindrome(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}