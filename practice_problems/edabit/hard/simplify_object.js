"use strict";

// Simplify an Object by Two Properties
// ------------------------------------

/*
You were tasked with making a list of every makeup item your local pharmacy 
had in stock. You created a very long array of each item, with each element 
having both a name and brand property. Now you're looking to simplify the 
list by combining duplicate items, and adding a count property to everything.

Example:
--------

simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
]) ➞ [
  { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
  { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
]

Notes:
- There will always be one or more element in the given array.
- Each element will always have a brand and name property.
- All duplicates will be displayed in order.


PEDAC
-----

Inputs: Array
- elements will be objects
- will always contain one or more object
- each object will have two properties: brand and name
Outputs: Array
- elements will will be objects from input
- all duplicate objects will be reduced to one object with a count
of how many duplicates were in the input
- the objects will appear in the same order that they appeared in the input
- all duplicate objects will displayed in order

Rules:
- input array will always contain at least one object
- objects will always have a brand and name property
- objects that have the same name and brand values will be reduced
to one object in the output with a count property that will represent
how many duplicates were in the input array
- objects will start with two properties and end with three properties
  - count property added to represent number of duplicates
- what about same brand value, but different name value?


Examples:

simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
]) ➞ [
  { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
  { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
]

-> two objects with the brand value NARS => count = 2
-> one object with the brand value Urban Decay => count 1
-> three objects with the brand Stila => count 3

Same Brand, but Different Name????
simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Organic Coconut Body Cleanser" }
]) ➞ [
  { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
  { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 2 },
  { brand: "Stila", name: "Organic Coconut Body Cleanser", count: 1}
]

-> two objects with the brand value NARS => count = 2
-> one object with the brand value Urban Decay => count 1
-> two objects with the brand Stila and name Stay All Day Liquid Lipstick => count 3
-> one object with brand Stila and name Organic Coconut Body Cleanser => count 1

Mental Model:

Create an empty array to hold the objects. Get an array of the brand values.
Iterate over the names of the brands. On each iteration, filter the number
of objects from the input array that have the current brand name. Get the
length of the filtered array. Get the the first element of the filtered array 
and add a count property with the length of the filtered array as the value.
Add that object to the result array. 

Data Structure:
Array
  - will contain objects
Object:
  - each element that contains the brand and name properties


Algorithm:
- create an empty array 'result'
- create an empty array to hold the brand values
- get an array of the brand values
  - iterate over the array of objects.
  - access the value of brand
    - if the brand value arrays already contains the name, do nothing.
    - if the brand value arrays does not have that name, add that name
    to the array
- iterate over the brand value names
  - on each iteration, filter the input array for objects that contain
  the same brand name as the current brandname
  - get the length of the filtered array
  - add the length of the filtered array as a count to the first element
  of the filtered array and add that object to the result array
- return the result
*/

function simplifyList(array) {
  const result = [];
  const brandValues = [];

  array.forEach(obj => {
    let currentValue = Object.values(obj)[0];

    if (!brandValues.includes(currentValue)) {
      brandValues.push(currentValue);
    }
  });

  brandValues.forEach(brandName => {
    let duplicates = array.filter(obj => obj.brand === brandName);
    let count = duplicates.length;
    duplicates[0].count = count;
    result.push(duplicates[0]);
  });

  return result;
}


console.log(simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
]))// ➞ [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
//   { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
// ]

console.log(simplifyList([{ brand: 'NYX', name: 'Soft Matte Lip Cream' }]))
// [{ brand: 'NYX', name: 'Soft Matte Lip Cream', count: 1 }],))

console.log(simplifyList([
      { brand: 'e.l.f', name: 'Flawless Finish Foundation' },
      { brand: 'e.l.f', name: 'Flawless Finish Foundation' },
      { brand: 'e.l.f', name: 'Flawless Finish Foundation' },
      { brand: 'e.l.f', name: 'Flawless Finish Foundation' },
      { brand: 'Giorgio Armani', name: 'Luminous Silk Foundation' },
      { brand: 'Giorgio Armani', name: 'Luminous Silk Foundation' },
      { brand: 'Marc Jacobs', name: 'Beauty O!' },
      { brand: 'Hourglass', name: 'Ambient Lighting Bronzer' },
      { brand: 'Hourglass', name: 'Ambient Lighting Bronzer' },
      { brand: 'Hourglass', name: 'Ambient Lighting Bronzer' },
      { brand: 'EltaMD', name: 'Foaming Facial Cleanser' },
    ]))
// [
//   { brand: 'e.l.f', name: 'Flawless Finish Foundation', count: 4 },
//   { brand: 'Giorgio Armani', name: 'Luminous Silk Foundation', count: 2 },
//   { brand: 'Marc Jacobs', name: 'Beauty O!', count: 1 },
//   { brand: 'Hourglass', name: 'Ambient Lighting Bronzer', count: 3 },
//   { brand: 'EltaMD', name: 'Foaming Facial Cleanser', count: 1 },
// ]
