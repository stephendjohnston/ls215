"use strict";

// Longest Palindrome

/*
Find the length of the longest substring in the given string s that is the 
same in reverse.

As an example, if the input was “I like racecars that go fast”, the 
substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:

"a" -> 'a' -> 1 
"aab" -> 'aa' -> 2  
"abcde" -> 'a' -> 1
"zzbaabcd" -> 'baab' -> 4
"" -> 0


inputs: String
outputs: Number
- length of the longest substring that is a palindrome

Rules:
- if the input string is empty return 0

Examples:
"zzbaabcd" -> 'baab' -> 4
substrings that are palindromes
  - ['zz', 'baab', 'aa',] -> to lengths -> [2, 4, 2] -> 4

Algorithm:
To determine if a string is palindrome:
- starting from index 0, check if every substring starting at index 0, all the
way up the last index, can be reversed and equal the same value not reversed.
- After every substring from index 0 to the end of the string has been checked,
start from index 1 and perform the same patter. 

- create a for loop that will loop from 0 up to the length of the string
  - create a for loop that will loop from j = i + 2 to the length of the string
    - slice the string from (i, j)
    - check if substring === substring.reverse()
      - if true, add substring to palindromes array
- reduce over palindromes array
  - if currentstr length > nextStrlength ? return currentStr length : return nextStrlength


*/

function longestPalindrome(str) {
  let longLength = str.length === 1 ? 1 : 0;

  const isPalindrome = str => str === [...str].reverse().join('');

  for (let i = 0; i < str.length; i += 1) {
    for (let j = i + 1; j < str.length; j += 1) {
      let substring = str.slice(i, j);
      if (isPalindrome(substring)) {
        longLength = substring.length > longLength ? substring.length : longLength;
      }      
    }
  }

  return longLength;
}

console.log(longestPalindrome("a"))// 1
console.log(longestPalindrome("aa"))// 2
console.log(longestPalindrome("baa"))// 2
console.log(longestPalindrome("aab"))// 2
console.log(longestPalindrome("zyabyz"))// 1
console.log(longestPalindrome("baabcd"))// 4
console.log(longestPalindrome("baablkj12345432133d"))// 9
console.log(longestPalindrome('I like racecars that go fast'))// 7
console.log(longestPalindrome('abcdefghba'))// 1
console.log(longestPalindrome(''))// 0