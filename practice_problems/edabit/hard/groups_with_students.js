"use strict";

// Edabit > Hard > Get Groups With Students

/*
Create a function that takes two arrays: groups and students. It should return one array with groups merged with students by id. Students within groups should be ordered in the same way the studentIds were ordered.


inputs: two Arrays
- both contain objects
- first Array: contains object
  - three properties: id, name, studentIds
    - id: Number
    - name: String
    - studentIds: array of numbers
- second Array: Students
  - two properties:
    - id: Number
    - name: String
    
outputs: Array of objects
- this array will have the same number of elements(objects) as the input array
- each element or object in the array will have the same number of properties as the input objects, and 2 of the 3 properties will be the same:
  - id: Number
  - name: String
  - students: array of objects - these object will the the objects from the students array from the input

Rules:
- do not mutate inputs
- For each object in the groups array, that will be the number of objects in the return array
- the property studentIds in the groups array will become the property students. This property will have an array as a value, and within in this array will be the object from the students input array.

Examples:

groups = [ { id: 1, name: 'G1', studentIds: [ 2, 1 ] } ]
students = [ { id: 1, name: 'John' }, { id: 2, name: 'Steve' } ]

result = // [ { id: 1, name: "G1", students: [ { id: 2, name: "Steve" }, { id: 1, name: "John" } ]} ]
*/

function getGroupsWithStudents(groups, students) {  
  return groups.map(group => {
    return {
      id: group.id,
      name: group.name,
      students: getStudents(group.studentIds, students)
    }
  })
}
                   
function getStudents(array, students) {
  return array.map(id => {
    return students.find(student => student.id === id);
  });
}

// Edabit Solution

function getGroupsWithStudents(groups, students) {
  return groups.map(({studentIds, ...group}) => {
    group.students = studentIds.map(id => {
      return students.find(student => {
        return student.id === id;
      });
    });
    return group;
  })
}

let group1 = [{ id: 1, name: "G1", studentIds: [2, 1]}];
console.log(getGroupsWithStudents(group1, [{ id: 1, name: "John"}, { id: 2, name: "Steve" }]));
// [ { id: 1, name: "G1", students: [ { id: 2, name: "Steve" }, { id: 1, name: "John" } ]


console.log(getGroupsWithStudents([{ id: 1, name: 'G1', studentIds: [2, 1]}, { id: 2, name: 'G2', studentIds: [1]}], [{ id: 1, name: 'John'}, { id: 2, name: 'Steve' }]))
// [ { id: 1, name: "G1", students: [ { id: 2, name: "Steve" }, { id: 1, name: "John" } ]}, { id: 2, name: 'G2', students: [ { id: 1, name: 'John'} ] }]