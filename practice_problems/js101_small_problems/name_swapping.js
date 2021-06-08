"use strict";

function swapName(name) {
  return name.replace(/(\w+)\s(\w+)/, '$2, $1');
}

// OR

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

// What if the person has one or more middle names?

function swapName(name) {
  let nameArray = name.split(' ');

  let firstName = nameArray.slice(-1).join(' ');
  let otherNames = nameArray.slice(0, -1).join(' ');

  return firstName + ', ' + otherNames;
}

// Student solution

let swapName = (str) => {
  let names = str.split(" ");
  return `${names.pop()}, ${names.shift()} ${names.join(" ")}`;
};

swapName('Joe Roberts');    // "Roberts, Joe"
swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"