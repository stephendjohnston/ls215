"use strict";

function countSameEnds(sentence) {
  let result = sentence.toLowerCase().split(' ').filter(word => {
    if (!/[a-z]/gi.test(word[word.length - 1])) {
      if (word[0] === word[word.length - 2]) {
        return word;
      }
    } else if (word.length > 1 && word[0] === word[word.length - 1]) {
      return word;
    }
  });

  return result.length;
}

console.log(countSameEnds("Pop! goes the balloon"))    // ➞ 1
console.log(countSameEnds("And the crowd goes wild!")) // ➞ 0
console.log(countSameEnds("No I am not in a gang."))   // ➞ 1
console.log(countSameEnds('My mom is not a nun.'));    //   2
console.log(countSameEnds('A fine morning'));          //   0
console.log(countSameEnds('Taste the difference'));    //   0