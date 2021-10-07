"use strict";

// Edabit > Hard > Imaginary Coding Interview

/*
Create a function to check if a candidate is qualified in an imaginary coding interview of an imaginary tech startup.

The criteria for a candidate to be qualified in the coding interview is:

The candidate should have complete all the questions.
The maximum time given to complete the interview is 120 minutes.
The maximum time given for very easy questions is 5 minutes each.
The maximum time given for easy questions is 10 minutes each.
The maximum time given for medium questions is 15 minutes each.
The maximum time given for hard questions is 20 minutes each.
If all the above conditions are satisfied, return "qualified", else return "disqualified".

You will be given an array of time taken by a candidate to solve a particular question and the total time taken by the candidate to complete the interview.

Given an array, in a true condition will always be in the format [very easy, very easy, easy, easy, medium, medium, hard, hard].

The maximum time to complete the interview includes a buffer time of 20 minutes.

Examples:
interview([5, 5, 10, 10, 15, 15, 20, 20], 120) ➞ "qualified"

interview([2, 3, 8, 6, 5, 12, 10, 18], 64) ➞  "qualified"

interview([5, 5, 10, 10, 25, 15, 20, 20], 120) ➞ "disqualified"
// Exceeded the time limit for a medium question.

interview([5, 5, 10, 10, 15, 15, 20], 120) ➞ "disqualified"
// Did not complete all the questions.

interview([5, 5, 10, 10, 15, 15, 20, 20], 130) ➞ "disqualified"
// Solved all the questions in their respected time limits but exceeded the total time limit of the interview.

inputs: Array, Number
- array will contain numbers
  - the time it took to complete each question
  - numbers will always be positive integers
- the Number will be the total time taken by the candidate
  - always positive Integer
  
output: String
- 'qualified' if the all the criteria are fufilled
- 'disqualified' otherwise

Rules:
- the input array will be given in this format
[very easy, very easy, easy, easy, medium, medium, hard, hard]
- if the input array length is less than this, it means the candidate did not finish all the questions and is 'disqualified'
- the time limit for very easy questions is 5 mins
  - so if those numbers are above 5, then disqualified
- time limit for easy: 10 mins
- time limit for medium: 15 mins
- time limit for hard: 20 mins
- if any of the times are above their respective limits then the candidate is disqualified
- the maximum amount of time to answer the questions is 100 mins, but there is a buffer of 20 mins, so the max is actually 120.
- the second input, is the total time the candidate actually took
- since the max time for the questions is 100, and there is a max 20 min buffer, any input time over 120 means the candidate exceeded the alloted time and is disqualified

Mental Model:
If the length of the input array is less than 8 or if the input Number is greater than 120, then the candidate is disqualified.

Create an array of strings that describes the question difficulty eg. [very easy, very easy, easy, easy, medium, medium, hard, hard]
. Iterate over the array of Numbers and pass in the number and string at the same index as the current number to a function that will determine if the time is answered below the alloted time for that question difficulty.

The function will take a time and the string and use a switch statement to determine the question difficulty then compare the test time with the max test time.

if at any point this function returns false, then return 'disqualified'.
If we get through all the test times, return 'qualified'

Algorithm:
- if qTimes.length < 8 or total time > 120 return 'disqualified'
- create a function that will determine if a time is below the max time for that kind of question
- iterate over the array of times
  - for each time, pass that time and the string of question difficulty at the same index as the time into the function questionTime
  - if the string === 'very easy' check if the input time is less than or equal to 5
  - if the string === 'easy' check if the input time is less than or equal to 10
  - if the string === 'medium' check if the input time is less than or equal to 15
  - if the string === 'hard' check if the input time is less than or equal to 20
  - return 'disqualified' if any numbers are greater than their max time
- return 'qualified'
*/

function interview(qTimes, totalTime) {
  if (qTimes.length < 8 || totalTime > 120) {
    return 'disqualified';
  }
  
  const qLevels = ['very easy', 'very easy', 'easy', 'easy', 'medium', 'medium', 'hard', 'hard'];
  
  for (let i = 0; i < qTimes.length; i += 1) {
    if (timeExceeded(qTimes[i], qLevels[i])) {
      return 'disqualified';
    }
  }
  
  return 'qualified';
}

function timeExceeded(time, level) {
  switch (level) {
    case 'very easy': return time > 5;
    case 'easy': return time > 10;
    case 'medium': return time > 15;
    case 'hard': return time > 20;
  }
}

console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 120))// 'qualified')
console.log(interview([2, 3, 8, 6, 5, 12, 10, 18], 120))// 'qualified')
console.log(interview([2, 3, 8, 6, 5, 12, 10, 18], 64))// 'qualified')
console.log(interview([5, 5, 10, 10, 25, 15, 20, 20], 120))// 'disqualified')
console.log(interview([5, 5, 10, 10, 15, 15, 20], 120))// 'disqualified')
console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 130))// 'disqualified')
console.log(interview([5, 5, 10, 10, 15, 20, 50], 160))// 'disqualified')
console.log(interview([5, 5, 10, 10, 15, 15, 40], 120))// 'disqualified')
console.log(interview([10, 10, 15, 15, 20, 20], 150))// 'disqualified')
console.log(interview([5, 5, 10, 20, 15, 15, 20, 20], 140))// 'disqualified')