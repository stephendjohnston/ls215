/*
Search Word Part 1
------------------

Write a function that takes two arguments, a word and a string of text, and 
returns an integer representing the number of times the word appears in the 
text.

You may assume that the word and text inputs will always be provided, and 
that all word breaks are spaces. Thus, some words will include punctuation 
such as periods and commas.

Rules:

- return an integer representing the number of times that the word appears
in the text
- word and text inputs will always be provided
- all word breaks are spaces
  - some words will contain punctuation
- case insensitive eg. 'Sed' is the same as 'sed'

Algorithm:

- split the string into an array of words
- initialize a counter to 0
- check each word to see if it is equal to the input word
  - don't forget about case sensitivity
- if it is, increase the counter by 1
*/

function searchWord(testWord, text) {
  let counter = 0;

  text.split(' ').forEach(word => {
    if (word[word.length - 1].match(/[^a-z]/i)) {
      word = word.slice(0, word.length - 1);
    } 

    if (word.toLowerCase() === testWord.toLowerCase()) counter += 1;
  })

  return counter;
}

// To cover the case if there was an instance of the word that occurred with
// punctuation, I could just chop off the punctuation and then see if it 
// matches. This is not a very good solution.

// OR with Further Exploration problem:
// I was having trouble with this, because I didn't realize you had to
// escape '\' characters in a string.
// \b is the regex for a word boundary. The \ is a reserved character if
// you put it in a string (because of \n, \t, etc.), so you have to escape 
// it: \\b.

function searchWord(word, text) {
  if (!word || !text) return 0;

  let matches = text.match(new RegExp(`\\b${word}\\b`, "gi"));
  return matches ? matches.length : 0;
}

// LS Solution
// if there was a word like 'abcsedbgh', this would be a match which is 
// not what we want. The above solution covers this with the word
// boundaries.

function searchWord(word, text) {
  const regex = new RegExp(word, 'gi');
  const matches = text.match(regex);

  return matches ? matches.length : 0;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);      // 3