/*
Class Records Summary
---------------------

At the end of each term, faculty members need to prepare a class record 
summary for students based on the weighted scores of exams and exercises. 
In this practice problem, we will prepare one such summary from some provided 
student records.

Grading areas and Exam Weights

Exam - 65%
Exercises - 35%

Each term has four exams, and several exercises. Every exam has a fixed maximum 
score of 100, while exercises have varied maximum score values and counts. The 
total maximum point value for all exercises in any term is always 100, regardless 
of how many exercises the students had to complete. For example, a term may have 
five exercises with possible score maximums of [30, 20, 10, 20, 20] while another 
term may have three exercises with possible score maximums of [20, 30, 50].

To determine a student's grade, we first determine the student's average score from 
the four exams, then sum all the exercise scores. We then apply the weights to compute 
the student's final percent grade. Finally, we determine the letter equivalent grade from 
the student's percent grade we just computed.

Percent Grade - Letter Grade
93 - 100      -      A
85 - 92       -      B
77 - 84       -      C
69 - 76       -      D
60 - 68       -      E
0 - 59        -      F

For example, let's assume a term with three exercises with maximum scores of [20, 30, 50].
A student got [90, 80, 95, 71] on her four exams, and [20, 15, 40] on her exercises. 
To determine her final grade, we follow these steps:

1. Compute the student's average exam score: (90 + 80 + 95 + 71) / 4 = 84
2. Compute the student's total exercise score: 20 + 15 + 40 = 75
3. Apply weights to determine the final percent grade: 84 * .65 + 75 * .35 = 80.85
4. Round the percent grade to the nearest integer: 81
5. Lookup the letter grade in the table above: C
6. Combine the percent grade and letter grade: "81 (C)"

The output class record summary should look like this:
*/

// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }

/*
Given this information, implement a function that takes a studentScores object 
and returns a class record summary object.

PEDAC
-----

Inputs:
  - object with properties for each student record
    - each property name has an object as a value which contains all of the
    student information in two properties: id and scores
      - the id: property has a number for a value
      - the scores property has an object for a value
        - within the scores object are two properties: exams and exercises
          - exams has an array for a value with all of the exam scores
          - exercises has an array for a value with all of the exercises scores

Outputs:
  - Object with two properties
    - studentGrades property with a value of an array which contains strings
    of the average grade along with its letter equivalent
    - exams property with a value of an array of objects as elements
      - each object element will have three properties: average, minimum and
      maximum which will have numbers as values
        - average will be the student average score for each exam
        - minimum will be the lowest score for each exam
        - maximum will be the highest score for each exam

Rules:
  Explicit
    - return an object that contains all of the students grades and the
    average, min, and max score of each exam
    - the student grades will be an array of strings
      - each string will contain a number grade and its corresponding letter
      grade
    - the exam scores will be an array of objects
      - each object will contain the average, min, and max score from each
      exam
    - grades should be rounded to the nearest integer
    - Round the exam averages to one digit after the decimal point
    - min and max will be whole numbers

Mental Model:
This problem involves two separate parts: The student grades and the exam
data. Each of these can then be broken down further.

The student grades is an array of strings that contains the number and
corresponding letter grade for that number grade. To obtain the info
required to return the grades we need to go through the object and
take the exam and exercise scores and perform the neccessary operations.
To get the scores date we need to loop over the studentScores object and
return each scores object from each student.

Object.keys(scores).map(student => scores[student].scores);

The result is an array of objects and each object is each student exam
and exercise scores.

[
  { exams: [ 90, 95, 100, 80 ], exercises: [ 20, 15, 10, 19, 15 ] },
  { exams: [ 50, 70, 90, 100 ], exercises: [ 0, 15, 20, 15, 15 ] },
  { exams: [ 88, 87, 88, 89 ], exercises: [ 10, 20, 10, 19, 18 ] },
  { exams: [ 100, 100, 100, 100 ], exercises: [ 10, 15, 10, 10, 15 ] },
  { exams: [ 50, 80, 60, 90 ], exercises: [ 10, 0, 10, 10, 0 ] }
]

We need to calculate the average of the exams and multiply it by the exam
weight 65%.
We need to calculate the total score of the exercises and multiply it by the
exercises weight 35%.
Then we need to add the two scores together and determine the corresponding
letter grade.
Then we need to return the total number grade and letter grade as a string
which needs to populate an array. 

EXAM DATA:

getting the exam data:

Object.keys(scores).map(student => scores[student].scores.exams);

which returns:

[
  [ 90, 95, 100, 80 ],
  [ 50, 70, 90, 100 ],
  [ 88, 87, 88, 89 ],
  [ 100, 100, 100, 100 ],
  [ 50, 80, 60, 90 ]
]

From this, we need to extract all the exam scores at the equivalent indices
and calculate the average score for each exam. We also need to extract the
min and max exam score for each exam.

Algorithm:
----------

Using the following Data:

[
  { exams: [ 90, 95, 100, 80 ], exercises: [ 20, 15, 10, 19, 15 ] },
  { exams: [ 50, 70, 90, 100 ], exercises: [ 0, 15, 20, 15, 15 ] },
  { exams: [ 88, 87, 88, 89 ], exercises: [ 10, 20, 10, 19, 18 ] },
  { exams: [ 100, 100, 100, 100 ], exercises: [ 10, 15, 10, 10, 15 ] },
  { exams: [ 50, 80, 60, 90 ], exercises: [ 10, 0, 10, 10, 0 ] }
]

create a function that will return an array of student grades as strings:
  Exams:
    - use reduce method to calculate total score and divide by 4
    - then multiply by exam weight
    - save this number to a variable
  Exercises:
    - use reduce method to calculate total score
    - multiply total by exercise weight
    - save to a variable

  Combine:
    - add the two scores to get the total score
    - use this score to determine the letter grade
    - return the score and the letter grade as a string

Processing Exam Data:

[
  [ 90, 95, 100, 80 ],
  [ 50, 70, 90, 100 ],
  [ 88, 87, 88, 89 ],
  [ 100, 100, 100, 100 ],
  [ 50, 80, 60, 90 ]
]

Exam 1 is all the scores at index 0 of each nested array:

[90, 50, 88, 100, 50]

and the exam 2 is all the scores at index 1 of each nested array and so on.

so we need to iterate over the array of arrays like:

array[0][0]
array[1][0]
array[2][0]
array[3][0]
array[4][0]

that will get us the scores for exam 1

We can store the scores in a temp array that will can process after all
the scores for each exam have been added. After process the scores for
each exam to get the average, min, and max, we can add that data as an
object to an array that we will return that will contain the complete set of
data required.

*/

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

const EXAM_WEIGHT = 0.65;
const EXERCISE_WEIGHT = 0.35;

function generateClassRecordSummary(scores) {
  let scoreData = Object.keys(scores).map(student => scores[student].scores);
  let examData = scoreData.map(score => score.exams);

  return {
    studentGrades: scoreData.map(studentScore => getStudentScore(studentScore)),
    exams: getExamData(examData),
  }
}

function getExamData(data) {
  const processedData = [];

  for (let i = 0; i < data.length - 1; i += 1) {
    let examScores = []
    for (let j = 0; j < data.length; j += 1) {
      examScores.push(data[j][i]);
    }
    processedData.push(processExamData(examScores));
  }

  return processedData;
}

function processExamData(exams) {
  let [min, max] = [Math.min(...exams), Math.max(...exams)];

  let averages = exams.reduce((acc, val) => {
    return acc + val;
  }, 0) / exams.length;

  return {average: averages.toFixed(1), minimum: min, maxium: max, };
}

function getStudentScore(scores) {
  let examScore = scores.exams.reduce((acc, score) => acc + score, 0) / 4;
  let exerciseScore = scores.exercises.reduce((acc, score) => acc + score, 0);
  let totalScore = Math.round((examScore * EXAM_WEIGHT) + (exerciseScore * EXERCISE_WEIGHT));
  let letterGrade = calculateLetterGrade(totalScore);

  return `${totalScore} (${letterGrade})`
}

function calculateLetterGrade(score) {
  if (score >= 93) return 'A';
  if (score >= 85) return 'B';
  if (score >= 77) return 'C';
  if (score >= 69) return 'D';
  if (score >= 60) return 'E';
  return 'F';
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }