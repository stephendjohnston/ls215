/*
How Long Are You
----------------

Write a function that takes a string as an argument and returns an array 
that contains every word from the string, with each word followed by a 
space and the word's length. If the argument is an empty string or if no 
argument is passed, the function should return an empty array.

You may assume that every pair of words in the string will be separated by 
a single space.

Rules:
- return an array
  - array should contain an element for every word in the string that contains
  the string and the length of that string separated by a single space
- if no argument or argument is empty string, return empty string
- every word in argument will be separated by single space

Algorithm:

- split the string in an array of words
- map over the array
  - for each word, return that word and the length of that word
  separated by a single space
return that new array
*/

function wordLengths(string) {
  if (!string) return [];

  return string.split(' ').map(word => {
    return word + ' ' + String(word.length);
  });
}

// LS Solution

function wordLengths(words) {
  if (arguments.length === 0 || words.length === 0) {
    return [];
  }

  return words.split(' ').map(word => `${word} ${String(word.length)}`);
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []