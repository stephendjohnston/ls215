"use strict";

// Nearest Chapter
// ---------------

/*
Problem:

Create a function that returns which chapter is nearest to the page you're 
on. If two chapters are equidistant, return the chapter with the higher page 
number.

Examples
--------

nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10) ➞ "Chapter 2"


nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200) ➞ "The End?"


nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3) ➞ "Chapter 1b"

Notes:
------

- All page numbers in the dictionary will be valid integers.
- Return the higher page number if ever two pages are equidistant (see last 
test case).

PEDAC
-----

Inputs: Object, Integer
  - the object as strings for keys and integers for values
    - the strings are the names of the chapter in a book
    - the integers are the page numbers that the chapter starts on
Outputs: String
  - Chapter that you're closest too in terms of page numbers

Rules:
------

- all page numbers will be valid integers
- return the higher page number if there are the same number of pages
between two chapters

Examples:

nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3) ➞ "Chapter 1b"

=> there are 2 pages separating 3 from 1 and 3 from 5, so return the
chapter with the higher page number. 

Mental Model:
Iterate over the page numbers of the chapters. Set the chapter name of the
first chapter as the current chapter to return. For each chapter, subtract
the page number from the page number your on. If the page number is less
than or equal to than the previous sum of page numbers then set the
current chapter name to this chapter.

Algorithm:
- initialize an array of the books keys
  - Object.keys(book)
- subtract the first chapter page number from the currentPAgeNum
to set as the first compareValue
- set the first chapter key as the current return value
- use a for loop to iterate over the keys starting at index 1
  - subtract the page number of the current chapter from the page number
  that you are on. If this value is less than or equal to the compare value
  set the compare value to this number and set the return chapter to
  this chapter
- return the chapter

*/

function nearestChapter(book, pageNumber) {
  const chapterNames = Object.keys(book);
  let pageDifference = Math.abs(pageNumber - book[chapterNames[0]]);
  let closestChapter = chapterNames[0];

  for (let i = 1; i < chapterNames.length; i += 1) {
    let currentPageDifference = Math.abs(pageNumber - book[chapterNames[i]]);
    if (currentPageDifference <= pageDifference) {
      pageDifference = currentPageDifference;
      closestChapter = chapterNames[i];
    }
  }

  return closestChapter;
}

console.log(nearestChapter({"Chapter 1": 1, "Chapter 2": 15, "Chapter 3": 37}, 10)) // "Chapter 2"
console.log(nearestChapter({"New Beginnings" : 1, "Strange Developments" : 62, "The End?" : 194, "The True Ending" : 460}, 200)) // "The End?"
console.log(nearestChapter({"Chapter 1a" : 1, "Chapter 1b" : 5}, 3)) // "Chapter 1b"
console.log(nearestChapter({"Chapter 1a" : 1, "Chapter 1b" : 5, "Chapter 1c" : 50, "Chapter 1d" : 100}, 75)) // "Chapter 1d"
console.log(nearestChapter({"Chapter 1a" : 1, "Chapter 1b" : 5, "Chapter 1c" : 50, "Chapter 1d" : 100, "Chapter 1e" : 200}, 150)) // "Chapter 1e"
console.log(nearestChapter({"Chapter 1a" : 1, "Chapter 1b" : 5, "Chapter 1c" : 50, "Chapter 1d" : 100, "Chapter 1e" : 200}, 74))  // "Chapter 1c"
console.log(nearestChapter({"Chapter 1a" : 1, "Chapter 1b" : 5, "Chapter 1c" : 50, "Chapter 1d" : 100, "Chapter 1e" : 200, "Chapter 1f" : 400}, 300)) // "Chapter 1f"
console.log(nearestChapter({"Chapter Four": 46, "Chapter Five": 54}, 50)) // "Chapter Five"