"use strict";

/*
- create a function that will output a string of '-' with a '+' on
either end. The length of this line will be 2 more than the length
of the input string, with one extra character on either side
- create a function that will output a string of ' ' (spaces) with '|'
on either end. Length same as above
- the input string line will have a space and a '|' on either end of it.

- find the length of the string and add 2
- build a string of '-' equal to the size of the length above
- add a '+' on either end
- build a string of ' ' and add '|' on either end
- log the dashes
- log the padding
- log the string with a space and '|' on either end
- log the padding
- log the dashes

- building the strings:
  - for loop that iterates length number of times adding the appropriate
  character on each iteration
*/

function logInBox(text) {
  let boxLength = text.length + 2;

  console.log(topAndBottom(boxLength));
  console.log(padding(boxLength));
  console.log('| ' + text + ' |');
  console.log(padding(boxLength));
  console.log(topAndBottom(boxLength));
}

function topAndBottom(size) {
  let character = '-';
  return '+' + buildLine(size, character) + '+';

}

function padding(size) {
  let character = ' ';
  return '|' + buildLine(size, character) + '|';

}

function buildLine(size, char) {
  let line = '';

  for (let i = 0; i < size; i += 1) {
    line += char;
  }

  return line;
}

// OR

function logInBox(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

// logInBox('To boldly go where no one has gone before.', 76);
// logInBox('', 23);

// Further Exploration
// if the input width is greater than the message length, have to center
// the message in the box.
// 

function logInBox(message, width) {
  if (width === undefined) {
    width = message.length;
  }

  if (message.length > width) {
    message = message.slice(0, width);
  } else if (width > message.length) {
    let padding = Math.floor((width - message.length) / 2);
    message = `${" ".repeat(padding)}${message}${" ".repeat(padding)}`
  }

// without this, when the width is odd and > length, the box breaks
  if (width % 2 === 1 && width > message.length) {
    width -= 1;
  }

  let horizontalRule = `+${"-".repeat(width + 2)}+`;
  let emptyLine = `|${" ".repeat(width + 2)}|`;
  
  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

// try word wrapping messages that are too long to fit, so that they appear 
// on multiple lines but are still contained within the box.

/*
input: string of words
output: string box made of up of separate strings
- horizontal rule
- empty line
- message line
- empty line
- horizontal rule

Rule: if the message length is to wide to fit in a max box width(72?)
wrap the text so that the text fits inside the box

- determine what the max width of the box will be and if the text length
is greater than that, trim the text until it fits on line and take the trimmed
text and put it on the next line.

- we can use the same horizontal rule and empty line from the previous
solution
- for the message line, we need a loop that will output the text until
all the text has been used
  - we also need to center each line of text so that there is equal spacing
  on either side of each line of text.

- maxWidth will be 76. 
*/

function logInBox(message) {
  console.log(message.length)
}

logInBox('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta orci vel ante iaculis, id auctor neque maximus.')

