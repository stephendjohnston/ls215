"use strict";

function stringCycling(string1, string2) {
  while (string1.length < string2.length) {
    string1 += string1;
  }

  return string1.slice(0, string2.length);
}

console.log(stringCycling("abc", "hello"))
// ➞ "abcab"
console.log(stringCycling("programming", "edabit"))
// ➞ "progra"
console.log(stringCycling("the world in me evolves in hers", "i love Tesh, so much so"))
// ➞ "the world in me evolves"
console.log(stringCycling("a thing of beauty is a joy forever", "indulge me surely"))
// ➞ "a thing of beauty"
console.log(stringCycling("to", "hide"))
// ➞ "toto"
console.log(stringCycling("such a feeling coming over me", "top of the world"))
// ➞ "such a feeling c"