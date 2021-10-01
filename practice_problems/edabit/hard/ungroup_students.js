"use strict";

// Edabit > Hard > Ungroup Data in an Object

/*
You volunteered to help out teaching a preschool in your area! You were given an array of all students and some important data about them, grouped by their teacher. Create a function that will ungroup every student so you can look at their details individually.

Example:

ungroupStudents([{
  teacher: "Ms. Car",
  data: [{
     name: "James",
     emergenceNumber: "617-771-1082",
  }, {
     name: "Alice",
     alergies: ["nuts", "carrots"],
  }],
}, {
  teacher: "Mr. Lamb",
  data: [{
    name: "Aaron",
    age: 3
  }]
}]) ➞ [{
  teacher: "Ms. Car",
  name: "James",
  emergencyNumber: "617-771-1082",
}, {
  teacher: "Ms. Car",
  name: "Alice",
  alergies: ["nuts", "carrots"],
}, {
  teacher: "Mr. Lamb",
  name: "Aaron",
  age: 3,
}]

inputs: Array
- contains objects
  - each objects contains two properties
    - teacher: String
    - data: Array of objects (students)
      - the contents of the objects is not if importance
      
outputs: Array
- contains objects equal to the number of students in the teachers data arrays. 
  - each object will contain three properties
    - teacher: String
    - name: String
    - studentInfo: Any type

Rules:
- each object will contain a teacher and an array of data which contains info about her students
  - a new object should be returned for each student that a teacher has that contains the name of the teacher and the student info

Examples: See above**

The teacher ms Car has two objects (students) in her data array, so we will need to create two new objects that will contain the name of the teacher and the info of each student. 

Mental Model

We need a new array of objects. We can map over the input array of objects. For each object, we will need to map over the data array and return an object that contains the teachers name and the student info. Since this will return an array, we will need to flatten this array inside of our return array so that we are left with an array o objects

Algorithm:

- map over the input array. 
*/

function ungroupStudents(students) {
  return students.map(classroom => {
    return classroom.data.map(student => {
      let studentInfo = Object.keys(student);
      let obj = {};
      obj.teacher = classroom.teacher;
      studentInfo.forEach(key => obj[key] = student[key]);
      return obj;
    });
  }).flat();
}

console.log(
  ungroupStudents([
    {
      teacher: 'Ms. Car',
      data: [
        {
          name: 'James',
          emergencyNumber: '617-771-1082',
        },
        {
          name: 'Alice',
          alergies: ['nuts', 'carrots'],
        },
      ],
    },
    {
      teacher: 'Mr. Lamb',
      data: [
        {
          name: 'Aaron',
          age: 3,
        },
      ],
    },
  ]))
//   [
//     {
//       teacher: 'Ms. Car',
//       name: 'James',
//       emergencyNumber: '617-771-1082',
//     },
//     {
//       teacher: 'Ms. Car',
//       name: 'Alice',
//       alergies: ['nuts', 'carrots'],
//     },
//     {
//       teacher: 'Mr. Lamb',
//       name: 'Aaron',
//       age: 3,
//     },
//   ]
// );

console.log(
  ungroupStudents([
    {
      teacher: 'Ms. Sherman',
      data: [
        {
          name: 'Carmen',
          feildTripConsentSlipSigned: false,
        },
      ],
    },
    {
      teacher: 'Mr. Shoe',
      data: [
        {
          name: 'Braden',
          favoriteBook: 'Where the Wild Things Are',
        },
        {
          name: 'Angelo',
          playsSports: true,
        },
      ],
    },
  ]))
//   [
//     {
//       teacher: 'Ms. Sherman',
//       name: 'Carmen',
//       feildTripConsentSlipSigned: false,
//     },
//     {
//       teacher: 'Mr. Shoe',
//       name: 'Braden',
//       favoriteBook: 'Where the Wild Things Are',
//     },
//     {
//       teacher: 'Mr. Shoe',
//       name: 'Angelo',
//       playsSports: true,
//     },
//   ]
// );