"use strict";

// Palindromic Anagrams
// --------------------

/*
Problem:

Given a word, create a function which returns whether or not it's possible 
to create a palindrome by rearranging the letters in the word.

Examples:

isPalindromePossible("rearcac") ➞ true
// You can make "racecar"

isPalindromePossible("suhbeusheff") ➞ true
// You can make "sfuehbheufs" (not a real word but still a palindrome)

isPalindromePossible("palindrome") ➞ false
// It's impossible

Notes:
- Trivially, words which are already palindromes return true.
- Words are given in all lowercase.


PEDAC
-----

Inputs: String
  - lowercase
Outputs: boolean
  - true if input can be rearranged into palindrome
  - false if not

A palindrome is a word, phrase, number, or other sequence of characters 
which reads the same backward or forward

Rules:
- all input strings will be lowercase
- return a boolean
  - true if string can be arranged into palindrome
  - false otherwise
- anything input other than a string will return false
- a palindrome:
  - if the length of the input is odd
    - all the chars in the string will occurr twice, except for one char
    which will occur an odd number of times
     eg. 'racecar' {r: 2, a: 2, c: 2, e: 1}
     eg. 'eracecare' {e: 3, r: 2, a: 2, c: 2}
  - if the length of the input is even
    - all chars in the string will occur twice
    eg. 'abba' {a: 2, b: 2}

Examples:
isPalindromePossible("rearcac") ➞ true
// You can make "racecar"
'racecar' === 'racecar'.split('').reverse().join('') => true

isPalindromePossible("")
-

isPalindromePossible("palindrome") ➞ false
// It's impossible
- no arrangment of the letters can create a palindrome

Mental Model:

Create an object of all the characters of the string as keys and the number
of times they occur in the string as values. If the string has an odd length,
then it for it to be a palindrome, it must have all characters occur twice,
except for one which can occur an odd number of times. If the string
length is even then all characters can only occur twice. 

Data Structures:
Object
  - number of occurrences of each char

Algorithm:
- create an empty object
- iterate over the string
  - on each iteration add the current char to the object with a value of 1
  - add 1 if the char already exists
- get an array of all the values from the object
- if the string length is even
  - filter all the values % 2 === 0
    - if the length of the array of filtered values === values.length
    - return true
- if the string length is odd
  - all the values but one must be even except one
    - filter the value that is odd and if the length of the return array === 1
    return true
*/

function isPalindromePossible(string) {
  const characters = {};

  [...string].forEach(char => {
    characters[char] = (characters[char] || 0) + 1;
  });

  const values = Object.values(characters);

  if (string.length % 2 === 0) {
    return values.filter(val => val % 2 === 0).length === values.length;
  } else {
    return values.filter(val => val % 2 === 1).length === 1;
  }
}

console.log(isPalindromePossible("rearcac") === true)
console.log(isPalindromePossible("suhbeusheff") === true)
console.log(isPalindromePossible("palindrome") === false)
console.log(isPalindromePossible("yagnx") === false)
console.log(isPalindromePossible("zgzqxljjp") === false)
console.log(isPalindromePossible("tgmqkpdhnhatoco") === false)
console.log(isPalindromePossible("akyka") === true)
console.log(isPalindromePossible("kjyyrftnbsbq") === false)
console.log(isPalindromePossible("jynmynqhcy") === false)
console.log(isPalindromePossible("hfe") === false)
console.log(isPalindromePossible("noon") === true)
console.log(isPalindromePossible("azmkallbanpu") === false)
console.log(isPalindromePossible("drrede") === true)
console.log(isPalindromePossible("xmhwcocldjdnqvv") === false)
console.log(isPalindromePossible("reparpe") === true)
console.log(isPalindromePossible("jnavz") === false)
console.log(isPalindromePossible("orort") === true)
console.log(isPalindromePossible("mel") === false)
console.log(isPalindromePossible("jdxknf") === false)
console.log(isPalindromePossible("qo") === false)
console.log(isPalindromePossible("neett") === true)
console.log(isPalindromePossible("wow") === true)
console.log(isPalindromePossible("avkkiaapiusuapspiip") === true)
console.log(isPalindromePossible("aann") === true)
console.log(isPalindromePossible("iivcc") === true)
console.log(isPalindromePossible("akyka") === true)
console.log(isPalindromePossible("eelvl") === true)
console.log(isPalindromePossible("damam") === true)
console.log(isPalindromePossible("mmo") === true)
console.log(isPalindromePossible("ge") === false)
console.log(isPalindromePossible("arrad") === true)
console.log(isPalindromePossible("bq") === false)
console.log(isPalindromePossible("djufyllynldw") === false)
console.log(isPalindromePossible("reparpe") === true)
console.log(isPalindromePossible("ttraoor") === true)
console.log(isPalindromePossible("orort") === true)
console.log(isPalindromePossible("asgas") === true)
console.log(isPalindromePossible("t") === true)
console.log(isPalindromePossible("tstsa") === true)
console.log(isPalindromePossible("neett") === true)
console.log(isPalindromePossible("wndnwrkpkihup") === false)