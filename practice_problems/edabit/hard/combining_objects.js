"use strict";

// Combine Two Objects Into One
// ----------------------------

/*
Problem:

Take two objects with similar key values and combine them into a new object 
summing any values that belong to the same category.

There's a married couple, Hank and his spouse Sheila. Hank works at a power 
plant making $70,000 a year, and Sheila is a teacher making $40,000 a year. 
They both earn rental income from separate rental properties, Hank will get 
$12,000 and Sheila $10,000. The new object will show their separate income 
but combine the rental income because it fits the same category.

const user1 = {
  powerPlant: 70000,
  rental: 12000
}

const user2 = {
  teaching: 40000,
  rental: 10000
}

becomes ➞ {
  powerPlant: 70000,
  teaching: 40000,
  rental: 22000   // The rental income is added together.
}

Arguments:

- user1Income (Object) — an income object for user1
- user2Income (Object) — an income object for user2
- returns: A new object with like values combined

Challenges:

1. They won't have the same number of key-value pairs.
2. The return object must return the values ordered from lowest to highest 
so your answers can match the test answers.

PEDAC
-----

Inputs: Two objects
Output: One object
  - combined of two input objects, with like key-value pairs merged


Rules:
  - new object will contain all key-value pairs from both objects
    - if both objects share a key-value pair, combine the values
  - The inputs will not have the same number of key-value pairs
  - The return object must have its key-value pairs ordered
  from lowest to highest

Data Structures:

Array
  - get array of the keys to iterate over and if any of those keys
  already exist, just combine the values. If the key does not exist, 
  add that key-value pair
Object

Mental Model:

create a new object with obj1's properties as the properties for this object.
Get the keys of obj2 in an array. Iterate over the array. If the current
key exists in the created object, combine the values, otherwise add the key-
value pair from obj2 to the created obj.
Sort the key-value pairs in ascending order based on the values.


Algorithm:
  - create new object with obj1 as the key value pairs
    - new Object(obj1)
  - get the keys of obj2
    - Object.keys(obj2)
  - iterate over the keys using forEach
    - on each iteration check to see if the current key is already in
    the new object
      - if it is, combine the value of that key-value from obj2 with key-value
      in the new object
      - if it isn't, add that key-value pair from object 2 into the new array
  - sort the object based on values in ascending order
    - There is no sort method for objects, so create an array of all
    the new objects key-value pairs
    - sort the array
    - then create fill an object in the order of the sorted array.``
*/

function combine(obj1, obj2) {
  const combined = new Object(obj1);

  Object.keys(obj2).forEach(key => {
    if (combined[key]) {
      combined[key] += obj2[key];
    } else {
      combined[key] = obj2[key];
    }
  });

  const keyValues = []
  for (const key in combined) {
    keyValues.push([key, combined[key]]);
  }

  keyValues.sort((a, b) => a[1] - b[1]);
  
  const combinedSorted = {};
  keyValues.forEach(item => {
    combinedSorted[item[0]] = item[1];
  });

  return combinedSorted;
}


const test1User1Income = {
  softwareDeveloping: 70000,
  rental: 10000,
};

const test1User2Income = {
  teaching: 40000,
  rental: 12000,
};

const test1Answer = {
  rental: 22000,
  teaching: 40000,
  softwareDeveloping: 70000,
};

test1User2Income;

console.log(combine(test1User1Income, test1User2Income)); // === test1Answer);


const test2User1Income = {
  softwareDeveloping: 70000,
  pizzaDeliverying: 6000,
  rental: 10000,
};

const test2User2Income = {
  teaching: 40000,
  rental: 12000,
};

const test2Answer = {
  pizzaDeliverying: 6000,
  rental: 22000,
  teaching: 40000,
  softwareDeveloping: 70000,
};

// test1User2Income;

console.log(combine(test2User1Income, test2User2Income));// === test2Answer;

const test3User1Income = {
  softwareDeveloping: 70000,
  pizzaDeliverying: 6000,
  sellingGarlic: 6000,
  rental: 10000,
};

const test3User2Income = {
  rental: 12000,
  sellingGarlic: 32000,
};

const test3Answer = {
  pizzaDeliverying: 6000,
  rental: 22000,
  sellingGarlic: 38000,
  softwareDeveloping: 70000,
};

console.log(combine(test3User1Income, test3User2Income)); // === test3Answer