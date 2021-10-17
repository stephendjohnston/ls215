"use strict";

// Edabit > Hard > Learn Lodash (14) _.countBy, Count Items in an Array

const vehicles = [
  { make: "toyota", color: "red", engine: "v6", type: "hatchback", year: 2018, mileage: 113312, isUsed: true },
  { make: "toyota", color: "blue", engine: "v6", type: "hatchback", year: 2018, mileage: 324312, isUsed: true },
  { make: "toyota", color: "yellow", engine: "v6", type: "hatchback", year: 2018, mileage: 113452, isUsed: false },
  { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
  { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
  { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
  { make: "mazda", color: "grey", engine: "v8", type: "sedan", year: 2021, mileage: 0, isUsed: false },
  { make: "ford", color: "green", engine: "v8", type: "truck", year: 2008, mileage: 25467, isUsed: true },
];

const vehiclesAsObject = {
  stall1: { make: "toyota", color: "red", engine: "v6", type: "hatchback", year: 2018, mileage: 113312, isUsed: true },
  stall2: { make: "toyota", color: "blue", engine: "v6", type: "hatchback", year: 2018, mileage: 324312, isUsed: true },
  stall3: { make: "toyota", color: "yellow", engine: "v6", type: "hatchback", year: 2018, mileage: 113452, isUsed: false },
  stall4: { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
  stall5: { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
  stall6: { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
  stall7: { make: "mazda", color: "grey", engine: "v8", type: "sedan", year: 2021, mileage: 0, isUsed: false },
  stall8: { make: "ford", color: "green", engine: "v8", type: "truck", year: 2008, mileage: 25467, isUsed: true },
};


function countByValue(collection, iteratee) {
  if (!Array.isArray(collection)) {
    let keys = Object.keys(collection);
    let vehicles = keys.map(key => collection[key]);
    return vehicles.reduce((obj, vehicle) => {
      let key = vehicle[iteratee];
      obj[key] = (obj[key] || 0) + 1;
      return obj;
    }, {});
  }
  
  if (typeof iteratee === 'function') {
    return collection.reduce((obj, vehicle) => {
      let key = iteratee(vehicle);
      obj[key] = (obj[key] || 0) + 1;
      return obj;
    }, {});
  } else {
    return collection.reduce((obj, vehicle) => {
      let key = vehicle[iteratee];
      obj[key] = (obj[key] || 0) + 1;
      return obj;
    }, {})
  }
}


console.log(countByValue(vehicles, "make"))
// {
//   toyota: 3,
//   ford: 4,
//   mazda: 1,
// }

console.log(countByValue(vehicles, "engine"))
// {
//   v6: 3,
//   v4: 3,
//   v8: 2,
// }

console.log(countByValue(vehicles, (d) => d.year > 2020))
// {
//   false: 7,
//   true: 1,
// }

console.log(countByValue(vehicles, (car) => car.mileage > 10000))
  // {
    // true: 4,
    // false: 4,
  // }

console.log(countByValue(vehiclesAsObject, "type"))
// {
//   hatchback: 3,
//   car: 3,
//   sedan: 1,
//   truck: 1,
// });

console.log(countByValue(vehiclesAsObject, "mileage"))
// {
//   0: 4,
//   25467: 1,
//   113312: 1,
//   113452: 1,
//   324312: 1,
// }