"use strict";

// Validating a Set in the Set Game
// --------------------------------

/*
Problem:

In the game Set, three cards form a set if each of the cards are identical 
or completely different for each of the four properties. All three cards 
must:

1. Have the same color or different colors.
2. Have the same number or different numbers.
3. Have the same shades or different shades.
4. Have the same shape or different shapes.

The four properties are:

1. Colors: red, purple, green
2. Numbers: 1, 2, 3
3. Shades: empty, lined, full
4. Shapes: squiggle, oval, diamond

Here, a set is represented by an array containing three cards. Each card is 
represented by an object of properties and values. Write a function that 
determines whether three cards constitute a valid set.

Here is an example of a set:

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]

// "Same" properties: color
// "Different" properties: numbers, shading and shapes

The following is not a set:

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "purple", number: 3, shade: "full", shape: "oval" }
]

// Colors are not all identical, but not all different.

Examples:

isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
]) ➞ true

isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
]) ➞ true

isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]) ➞ false

Notes:

- A set cannot have 2/3 cards having the same property. Either all must share 
that property, or none will share that particular property.

PEDAC

Inputs: Array of Objects
  - objects will contain properties that contain strings and numbers
Output: Boolean

Rules:
- three cards form a set if:
  - each of the cards are identical
    - eg. color is all the same, but each of the other 3 properties
    are all different
  - each of the cards are completely different
    - number are different. eg, 1, 2, 3
- 2/3 properties being the same is not a set, eg. 1, 2, 2
- for each property, they either have to be all the same, or all different


Examples:

isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
]) ➞ true

=> color is all green
=> number is all different
=> shade is all empty
=> shape is all different

isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]) ➞ false

=> number is not all same or all different

Mental Model:

Take an array of objects. For each object, take the related properties and
see if all the values are the same, or all different. If true for all four
properties, return true. If one of these fails, return false. 

Get an array of keys => [color, number, shade, shape]
Create a loop that will iterate 4 times (the number of properties). Iterate
over the setArray where each element will be a card. Get all the color values first.
Compare all the color values. If they are the same or ALL different, continue.
If 2 are the same, return false. Repeat this process for each card.

Data Structure:

Array

Algorithm
- get an array of the keys of of the objects
  - Object.keys(array[0]) => [color, number, shade, shape]
- create a for loop that will iterate 4 times (length of keys array)
  - set the current key to index 0 => color
  - within the loop, iterate over the set Object
    - on each iteration get the value of color for each object
  - check to see if all the values are the same, or that they are all
  different, if both are true, continue to next key, other wise return false
    - use every() to determine if all elements are the same
      - values.every(value => value === values[0])
    - check to see if all values are unique. first get the length of the
    values array which will be 3, one for each card
      - use filter to return an array of the unique values
        - values.filter(value, idx => values.indexOf(value) === idx)
        - compare the length of this return array to the original values
        array
          - if all the values are the same, it will return an array of length
          1, if 2 are the same, an length of 2, and if all different, a length
          of 3. So if the return array and original array are the same (3) it's true
          and continue, otherwise return false 

isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]) ➞ false

Object.keys(set[0]) => ['color', 'number', 'shade', 'shape'];
currentKey = keys[0] => 'color'
values = ['purple', 'green', 'red']
*/

function isSet(setArray) {
  const setKeys = Object.keys(setArray[0]);

  for (let i = 0; i < setKeys.length; i += 1) {
    let currentKey = setKeys[i];
    let values = [];

    setArray.forEach(card => {
      values.push(card[currentKey]);
    });

    if (!cardsValid(values)) {
      return false;
    }
  }

  return true;
}

function cardsValid(valuesArr) {
  let allSame = valuesArr.every(value => value === valuesArr[0]);
  let allDifferent = valuesArr.filter((value, idx) => valuesArr.indexOf(value) === idx);

  return allSame || (allDifferent.length === valuesArr.length);
}

console.log(isSet(
[{color: "red", number: 1, shade: "lined", shape: "squiggle"}, 
{color: "red", number: 1, shade: "lined", shape: "diamond"}, 
{color: "red", number: 1, shade: "lined", shape: "squiggle"}]
) === false)

console.log(isSet(
[{color: "red", number: 1, shade: "lined", shape: "squiggle"}, 
{color: "red", number: 1, shade: "lined", shape: "diamond"}, 
{color: "red", number: 1, shade: "lined", shape: "oval"}]
) === true)

console.log(isSet(
[{color: "red", number: 1, shade: "empty", shape: "squiggle"}, 
{color: "red", number: 1, shade: "lined", shape: "diamond"}, 
{color: "red", number: 1, shade: "lined", shape: "oval"}]
) === false)

console.log(isSet(
[{color: "red", number: 1, shade: "empty", shape: "squiggle"}, 
{color: "red", number: 2, shade: "lined", shape: "diamond"}, 
{color: "red", number: 3, shade: "full", shape: "oval"}]
) === true)

console.log(isSet(
[{color: "green", number: 1, shade: "empty", shape: "squiggle"}, 
{color: "green", number: 2, shade: "empty", shape: "diamond"}, 
{color: "green", number: 3, shade: "empty", shape: "oval"}]
) === true)

console.log(isSet(
[{color: "purple", number: 1, shade: "full", shape: "oval"}, 
{color: "green", number: 1, shade: "full", shape: "oval"}, 
{color: "red", number: 1, shade: "full", shape: "oval"}]
) === true)

console.log(isSet(
[{color: "purple", number: 3, shade: "full", shape: "oval"}, 
{color: "green", number: 1, shade: "full", shape: "oval"}, 
{color: "red", number: 3, shade: "full", shape: "oval"}]
) === false)

console.log(isSet(
[{color: "red", number: 1, shade: "empty", shape: "squiggle"}, 
{color: "red", number: 2, shade: "lined", shape: "diamond"}, 
{color: "purple", number: 3, shade: "full", shape: "oval"}]
) === false)