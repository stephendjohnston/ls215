"use strict";

function countSameEnds(sentence) {
  let result = sentence.toLowerCase().split(' ').filter(word => {
    if (!/[a-z]/gi.test(word[word.length - 1])) {
      if (word[0] === word[word.length - 2]) {
        return word;
      } else if (word[0] === word[word.length - 1]) {
        return word;
      }
    }
  });

  return result.length;
}

countSameEnds("Pop! goes the balloon")   // ➞ 1
countSameEnds("And the crowd goes wild!") // ➞ 0
countSameEnds("No I am not in a gang.")   // ➞ 1