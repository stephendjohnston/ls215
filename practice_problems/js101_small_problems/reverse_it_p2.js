"use strict";

// wanted to try out passing a method as an argument to map as practice

function reverseWords(words) {
  return words.split(' ').map(reverseWordOrNot).join(' ');
}

function reverseWordOrNot(word) {
  return word.length >= 5 ? word.split('').reverse().join('') : word;
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"