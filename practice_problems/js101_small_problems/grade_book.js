"use strict";

function getGrade(...grades) {
  let average = grades.reduce((acc, val) => acc + val) / grades.length;

  return letterGrade(average);
}

function letterGrade(average) {
  if (average >= 90) return 'A';
  if (average >= 80) return 'B';
  if (average >= 70) return 'C';
  if (average >= 60) return 'D'
  return 'F'
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"