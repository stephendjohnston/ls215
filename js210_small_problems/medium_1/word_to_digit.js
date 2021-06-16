"use strict";

// Not a great solution, but it works for the test case

function wordToDigit(string) {
  const wordsToDigits = {
    zero: 0, one: 1, two: 2, three: 3, four: 4, 
    five: 5, six: 6, seven: 7, eight: 8, nine: 9
  }

  return string.split(' ').map(word => {
    let cleanedWord = word.replace(/[^a-z]/gi, '');
    if (wordsToDigits[cleanedWord]) {
      if (cleanedWord.length !== word.length) {
        return String(wordsToDigits[cleanedWord]) + word[word.length -1];
      } else {
        return String(wordsToDigits[cleanedWord]);
      }
    }

    return word;
  });
}

// LS solution is muuuuuch better

const NUM_WORDS = {
  zero:  0,
  one:   1,
  two:   2,
  three: 3,
  four:  4,
  five:  5,
  six:   6,
  seven: 7,
  eight: 8,
  nine:  9,
};

function wordToDigit(sentence) {
  Object.keys(NUM_WORDS).forEach(word => {
    let regex = new RegExp('\\b' + word + '\\b', 'g');
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });

  return sentence;
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."