"use strict";

function knapsack(capacity, items) {
  let sortedItems = items.slice().sort((a, b) => b.value - a.value);
  
  let combinedWeight = 0;;
  let knapsackItems = sortedItems.filter(item => {
    if (item.weight + combinedWeight <= capacity) {
      combinedWeight += item.weight;
      return true;
    }
  
    return false;
  });
  
  let knapsackItemsSorted = sortItemsToOriginalOrder(knapsackItems, items);
  
  return {
    capacity: capacity,
    items: knapsackItemsSorted,
    weight: combinedWeight,
    value: knapsackItemsSorted.reduce((acc, item) => acc + item.value, 0)
  }
}

function sortItemsToOriginalOrder(knapsackItems, items) {
  let result = [];

  for (let i = 0; i < items.length; i += 1) {
    let currentName = items[i].name;
    for (let j = 0; j < knapsackItems.length; j += 1) {
      if (currentName === knapsackItems[j].name) {
        result.push(knapsackItems[j])
      }
    }
  }

  return result;
}

var items = [
  {name:"desk lamp",weight:2,value:12},
  {name:"beach towel",weight:1,value:10},
  {name:"textbook",weight:3,value:20},
  {name:"wall clock",weight:2,value:15},
  {name:"frozen dinners",weight:10,value:50},
  {name:"tablet",weight:7,value:1400},
  {name:"smartphone",weight:1,value:200},
  {name:"paper",weight:2,value:5},
  {name:"laser printer",weight:25,value:400},
  {name:"shoes",weight:1,value:79},
  {name:"medicine",weight:1,value:17},
  {name:"decorative cushion",weight:1,value:11},
  {name:"gold necklace",weight:1,value:2500},
  {name:"toaster oven",weight:5,value:129}
];

console.log((knapsack(0, items)))
// ({
//   capacity: 0,
//   items: [],
//   weight: 0,
//   value: 0
// }));

console.log((knapsack(1, items)))
// ({
//   capacity: 1,
//   items: [
//     {name:"gold necklace",weight:1,value:2500}
//   ],
//   weight: 1,
//   value: 2500
// }));

console.log((knapsack(2, items)))
// ({
//   capacity: 2,
//   items: [
//     {name:"smartphone",weight:1,value:200},
//     {name:"gold necklace",weight:1,value:2500}
//   ],
//   weight: 2,
//   value: 2700
// }));

console.log((knapsack(5, items)))
// ({
//   capacity: 5,
//   items: [
//     {name:"smartphone",weight:1,value:200},
//     {name:"shoes",weight:1,value:79},
//     {name:"medicine",weight:1,value:17},
//     {name:"decorative cushion",weight:1,value:11},
//     {name:"gold necklace",weight:1,value:2500}
//   ],
//   weight: 5,
//   value: 2807
// }));

console.log((knapsack(14, items)))// ({
//   capacity: 14,
//   items: [
//     {name:"tablet",weight:7,value:1400},
//     {name:"smartphone",weight:1,value:200},
//     {name:"gold necklace",weight:1,value:2500},
//     {name:"toaster oven",weight:5,value:129}
//   ],
//   weight: 14,
//   value: 4229
// }));

var items2 = [
  {name:"desk lamp",weight:2,value:12},
  {name:"textbook",weight:3,value:20},
  {name:"wall clock",weight:2,value:15},
  {name:"frozen dinners",weight:10,value:50},
  {name:"tablet",weight:7,value:1400},
  {name:"smartphone",weight:1,value:200},
  {name:"paper",weight:2,value:5},
  {name:"laser printer",weight:25,value:400},
  {name:"shoes",weight:1,value:79},
  {name:"medicine",weight:1,value:17},
  {name:"toaster oven",weight:5,value:129}
];

console.log((knapsack(31, items2)))
// ({
//   capacity: 31,
//   items: [
//     {name:"textbook",weight:3,value:20},
//     {name:"wall clock",weight:2,value:15},
//     {name:"frozen dinners",weight:10,value:50},
//     {name:"tablet",weight:7,value:1400},
//     {name:"smartphone",weight:1,value:200},
//     {name:"shoes",weight:1,value:79},
//     {name:"medicine",weight:1,value:17},
//     {name:"toaster oven",weight:5,value:129}
//   ],
//   weight: 30,
//   value: 1910
// }));

console.log((knapsack(36, items2)))
// ({
//   capacity: 36,
//   items: [
//     {name:"tablet",weight:7,value:1400},
//     {name:"smartphone",weight:1,value:200},
//     {name:"laser printer",weight:25,value:400},
//     {name:"shoes",weight:1,value:79},
//     {name:"medicine",weight:1,value:17}
//   ],
//   weight: 35,
//   value: 2096
// }));

console.log((knapsack(100, items2)))
// ({
//   capacity: 100,
//   items: [
//     {name:"desk lamp",weight:2,value:12},
//     {name:"textbook",weight:3,value:20},
//     {name:"wall clock",weight:2,value:15},
//     {name:"frozen dinners",weight:10,value:50},
//     {name:"tablet",weight:7,value:1400},
//     {name:"smartphone",weight:1,value:200},
//     {name:"paper",weight:2,value:5},
//     {name:"laser printer",weight:25,value:400},
//     {name:"shoes",weight:1,value:79},
//     {name:"medicine",weight:1,value:17},
//     {name:"toaster oven",weight:5,value:129}
//   ],
//   weight: 59,
//   value: 2327
// }));

// from Niklas
// ************ Did not solve for this edge case ********

// var items3 = [
//  {name:"desk lamp",weight:1,value:1000},
//  {name:"beach towel",weight:29,value:900},
//  {name:"textbook",weight:1,value:899},
//  {name:"wall clock",weight:1,value:850},
// ];

// console.log((knapsack(30, items3)))
// // ({
//   capacity: 30,
//   items: [
//     {name:'desk lamp', weight:1,value:1000},
//     {name:'textbook', weight:1,value:899},
//     {name:'wall clock', weight:1,value:850}
//   ],
//   weight: 3,
//   value: 2749
// }));