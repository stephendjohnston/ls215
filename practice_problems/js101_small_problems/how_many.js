"use strict";

function countOccurrences(vehicles) {
  let count = {};

  vehicles.forEach(vehicle => {
    vehicle = vehicle.toLowerCase();
    count[vehicle] = (count[vehicle] || 0) + 1;
  });

  logResult(count);
}

function logResult(count) {
  for (let vehicle in count) {
    console.log(`${vehicle} => ${count[vehicle]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2