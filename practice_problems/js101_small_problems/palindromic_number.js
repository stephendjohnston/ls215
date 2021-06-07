"use strict";

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true