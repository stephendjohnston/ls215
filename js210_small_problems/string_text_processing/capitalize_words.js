/*
Capitalize Words
----------------

Write a function that takes a string as an argument and returns that string 
with the first character of every word capitalized and all subsequent characters 
in lowercase.

You may assume that a word is any sequence of non-whitespace characters.

Rules:
- assume that a word is any sequence of non-whitespace characters
- capitalize the first character of every word
- lowercase every character that is not the first character of a word
*/

function wordCap(string) {
  return string.split(' ')
               .map(changeCase)
               .join(" ");
}

let changeCase = word => word[0].toUpperCase() + word.slice(1).toLowerCase();

// LS Solution

function wordCap(words) {
  return words.split(' ')
              .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ');
}

// Student solutions using regex which is what I originally tried to do.
// I've never seen a function used like this one as the second argument to
// replace

const wordCap = (str) => {
  return str.replace(/(\S)(\S*)/gi, (_, firstLetter, restOfWord) => {
    return firstLetter.toUpperCase() + restOfWord.toLowerCase();
  });
};

function wordCap(string) {
  return string.replace(/\S+/g, function (word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
}

function wordCap(string) {
  return string.toLowerCase().replace(/\b\w/g, char => char.toUpperCase() );
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'