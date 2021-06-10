"use strict";

function leadingSubstrings(string) {
  let substrings = [];

  for (let i = 1; i <= string.length; i += 1) {
    substrings.push(string.substring(0, i));
  }

  return substrings;
}

function substrings(string) {
  let substrings = [];

  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    substrings.push(leadingSubstrings(string.slice(startIndex)));
  }

  return substrings.flat();
}

function palindromes(string) {
  let allSubstrings = substrings(string);

  return allSubstrings.filter((substr) => {
    if (substr.length > 1) {
      return substr === [...substr].reverse().join('');
    }
  });
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