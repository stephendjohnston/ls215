"use strict";

// Edabit > Hard > Super Strict Grading

/*
Given an object literal of student names and an array of their test scores over the semester, return a list of all the students who passed the course (in alphabetical order). However, there is one more thing to mention: the pass mark is 100% in everything!

Examples
whoPassed({
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
  "Barry" : ["3/3", "20/20"]
}) ➞ ["Barry", "John"]

whoPassed({
  "Zara" : ["10/10"],
  "Kris" : ["30/30"],
  "Charlie" : ["100/100"],
  "Alex" : ["1/1"]
}) ➞ ["Alex", "Charlie", "Kris", "Zara"]

whoPassed({
  "Zach" : ["10/10", "2/4"],
  "Fred" : ["7/9", "2/3"]
}) ➞ []
Notes
All of a student's test scores must be 100% to pass.
Remember to return an array of student names sorted alphabetically.

inputs: Object
- keys will be Students names
- values will be arrays of strings
  - the strings will be two numbers separated by '/'
  
outputs: Array
- Contains strings: the names of all the students who score 100% on their tests
- empty array if no students scored 100% across all tests.

Rules:
- a students name will only be included is they score 100% on all the tests
  - a socre of 100% means that the first number and second number in the string are equal
- sort the array of student names alphabetically
- if the object is empty, return an empty array
- if no students meet the  perfect score criteria, return empty array

Examples:

whoPassed({
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
  "Barry" : ["3/3", "20/20"]
}) ➞ ["Barry", "John"]
- for each score in Johns tests array, the first number and second number in each string are equal to each other
- for Sarah, she has "4/8", '4' !== '8', so she 'fails'
- the names that passed are sorted alphabetically

Mental Model:
Get an array of the keys. Filter over the keys. For each key, 
get the value which is an array. Create a function that will check each 
string to see if the first number === second number. For every array that 
passes the perfect score test, return that key. Sort the keys alphabetically

Algorithm:
- get an array of the keys
  - Object.keys(students)
- filter the keys
  - on each iteration, retrieve the value: an array
    - students[name] -> testScores
    - ["5/5", "50/50", "10/10", "10/10"]
    - function that iterates over each string
      - split the string on '/'
        - ['5', '5']
        - return arr[0] === arr[1]
          - if this returns true then the key will be returned to filter
          - if it returns false, then this student will not be returned
- sort the array of names
*/

function whoPassed(students) {
  return Object.keys(students).filter(name => {
    return perfectScores(students[name]);
  }).sort();
}

function perfectScores(scores) {
  return scores.every(score => {
    let [studentScore, maxScore] = score.split('/');
    return studentScore === maxScore;
  });
}

console.log(whoPassed({
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/5", "50/50", "10/10", "10/10"],
  "Adam" : ["3/5", "46/50", "9/10", "10/10"],
  "Barry" : ["5/5", "50/50", "10/10", "10/10"]
}))// ["Barry", "John"])

console.log(whoPassed({
  "Zara" : ["10/10"],
  "Kris" : ["10/10"],
  "Charlie" : ["10/10"],
  "Alex" : ["10/10"]
}))// ["Alex", "Charlie", "Kris", "Zara"])

console.log(whoPassed({
  "Zach" : ["10/10", "2/4"],
  "Fred" : ["10/10", "3/4"]
}))// [])

console.log(whoPassed({
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
  "Barry" : ["3/3", "20/20", "5/5", "2/2"]
}))// ["Barry", "John"])

console.log(whoPassed({
  "Zara" : ["10/10"],
  "Kris" : ["30/30"],
  "Charlie" : ["100/100"],
  "Alex" : ["1/1"]
}))// ["Alex", "Charlie", "Kris", "Zara"])

console.log(whoPassed({
  "Zach" : ["10/10", "2/4"],
  "Fred" : ["7/9", "2/3"]
}))// [])