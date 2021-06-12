"use strict";

function wordCap(string) {
  return string.split(' ').map(word => {
    let firstLetter = word[0];
    return word.replace(firstLetter, firstLetter.toUpperCase());
  }).join(' ');
}

// OR

function wordCap(string) {
  return string.split(' ').map(capitalizeFirstLetter).join(' ');

}

function capitalizeFirstLetter(word) {
  return [...word].map((char, idx) => {
    return idx === 0 ? char.toUpperCase() : char;
  }).join('');
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'