"use strict";

function swap(string) {
  return string.split(' ').map( word => {
    return swapFirstLastChars(word.split(''));
  }).join(' ');
}

function swapFirstLastChars(chars) {
  if (chars.length === 1) return chars.join('');

  [chars[chars.length - 1], chars[0]] = [chars[0], chars[chars.length - 1]];
  return chars.join('');
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"