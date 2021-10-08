"use strict";

// Edabit > Hard > Elastic Words

/*
In this challenge, you must think about words as elastics. What happens when do you tend an elastic applying a constant traction force at both ends? Every part (or letter, in this case) of the elastic will expand, with the minimum expansion at the ends, and the maximum expansion in the center.

If the word has an odd length, the effective central character of the word will be the pivot that splits the word into two halves.

"ABC" -> Left = "A" | Center = "B" | Right = "C"
If the word has an even length, you will consider two parts of equal length, with the last character of the left half and the first character of the right half being the center.

"ABCD" -> Left = "AB" | Right = "CD"
You will represent the expansion of a letter repeating it as many times as its numeric position (so counting the indexes from/to 1, and not from 0 as usual) in its half, with a crescent order in the left half and a decrescent order in the right half.

Word = "ANNA" 

Left = "AN"
Right = "NA"

Left = "A" * 1 + "N" * 2 = "ANN"
Right = "N" * 2 + "A" * 1 = "NNA"

Word = Left + Right = "ANNNNA"
If the word has an odd length, the pivot (the central character) will be the peak (as to say, the highest value) that delimits the two halves of the word.

Word = "KAYAK"

Left = "K" * 1 + "A" * 2 = "KAA"
Pivot = "Y" * 3 = "YYY"
Right = "A" * 2 + "K" * 1 = "AAK"

Word = Left + Pivot + Right = "KAAYYYAAK"
Given a word, implement a function that returns the elasticized version of the word as a string.

Examples:

elasticize("ANNA") ➞ "ANNNNA"

elasticize("KAYAK") ➞ "KAAYYYAAK"

elasticize("X") ➞ "X"

Notes:

- For words with less than three characters, the function must return the same word (no traction appliable).
- Remember, into the left part characters are counted from 1 to the end, and, in reverse order until 1 is reached, into the right.

inputs: String
- contains uppercase Alpha chars

outputs: String
- contains uppercase alpha chars

Rules:
- if the input is less than 3 chars, return the input
- if the input has an odd length, the middle char will separate the string into two equal parts
- if the input has an even length, the left middle char will be part of the left side, and the right middle char will be part of the right side

Examples:
Odd Length:

Word = "ANNA" 

Left = "AN"
Right = "NA"

Left = "A" * 1 + "N" * 2 = "ANN"
Right = "N" * 2 + "A" * 1 = "NNA"

Even Length:

Word = "KAYAK"

Left = "K" * 1 + "A" * 2 = "KAA"
Pivot = "Y" * 3 = "YYY"
Right = "A" * 2 + "K" * 1 = "AAK"

Mental Model:
If the input string has an even length, split the string into two strings of equal length representing the left and right side of the string. If the input string has odd length, split the string into three parts. The middle will be the char that separates the left and right side. The left will be the chars to the left of the middle and the right side will be the char to the right of the middle.
For even length strings, iterate over the left side and multiply each letter by it's current index + 1. Iterate over the right side and multiply each char by the length of the right side - current index
For odd length strings, do the same for the left and right sides as for even strength strings. The only difference is that we have a middle char that we have to multiply by the length of the left side. + 1. 

Algorithm:
- if the input string length < 3, return string
- get the middle index of the input string by getting the floor value of the string.length / 2.
- set middleChar var to '';
- if string length is odd
  - set middleChar to string[middleIndex]
  - delete from string
- set left side to string.slice(0, middleIndex)
- set right side to string.slice(middleIndex)
- iterate over left side
  - for each char, repeat that char i + 1 times
- iterate over the right side starting at i === to the length of the right side
  - for each char repeat the char right sidelength - i times
- combine left side, middle, right side
*/ 

function elasticize(string) {
  if (string.length < 3) return string;
  
  let charArr = string.split('');
  let middleIndex = Math.floor(string.length / 2);
  let middle = '';
  
  if (string.length % 2 === 1) {
    middle = charArr.splice(middleIndex, 1)[0];
  }

  let left = charArr.slice(0, middleIndex);
  let right = charArr.slice(middleIndex);
  left = expandChars(left).join('');
  right = expandChars(right.reverse()).reverse().join('');

  return left + middle.repeat(middleIndex + 1) + right;
}

function expandChars(chars) {
  return chars.map((char, idx) => char.repeat(idx + 1));
}

console.log(elasticize("ANNA"))// "ANNNNA", "Example #1")
console.log(elasticize("KAYAK"))// "KAAYYYAAK", "Example #2")
console.log(elasticize("X"))// "X", "Example #3")
console.log(elasticize("AA"))// "AA")
console.log(elasticize("ABC"))// "ABBC")
console.log(elasticize("BOB"))// "BOOB")
console.log(elasticize("OTTO"))// "OTTTTO")
console.log(elasticize("LEVEL"))// "LEEVVVEEL")
console.log(elasticize("IJKCBA"))// "IJJKKKCCCBBA")
console.log(elasticize("REDDER"))// "REEDDDDDDEER")
console.log(elasticize("ROTATOR"))// "ROOTTTAAAATTTOOR")