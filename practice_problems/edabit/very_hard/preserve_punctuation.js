"use strict";

function preservePunctuation(array) {
  const reversedWords = [];

  array.forEach(word => {
    let wordReversed = '';
    let wordCharacters = word.match(/[a-z0-9]/gi) || [];
    wordCharacters.reverse();

    let index = 0;

    [...word].forEach(char => {
      if (/[a-z0-9]/.test(char)) {
        wordReversed += wordCharacters[index];
        index += 1;
      } else {
        wordReversed += char;
      }
    });

    reversedWords.push(wordReversed);
  });

  return reversedWords;
}

console.log(preservePunctuation(["shan't", "won't", "y'all'rn't", "fixin'", "'eard", "why??", "peter", "rabbit"])); // returns ["tnah's", "tno'w", "t'nrl'la'y", "nixif'", "'drae", "yhw??", "retep", "tibbar"]);
console.log(preservePunctuation([".?'"])); // returns [".?'"]
// console.log(preservePunctuation([1, 2, 3, 'hello'])); // returns ['', '', '', 'olleh]
console.log(preservePunctuation([]));        // returns []
console.log(preservePunctuation(["h'allow33n'", 'pum2p?kin'])); // ["n'33wollah'", "nikp2?mup"]