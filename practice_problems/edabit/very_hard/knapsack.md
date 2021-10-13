##### Edabit > Very Hard

---

# A Knapsack

Given a knapsack with a certain weight capacity, fill it with loot from a list of items to achieve the highest value possible.

The function takes two parameters: an int specifying the maximum weight the knapsack can hold, and an array of item Objects to choose from. Each item has a name, a weight, and a value. The total weight of all chosen items cannot exceed the capacity of the knapsack.

The function should return an object containing the capacity of the bag, a list of items that were added to the bag (in the same order that they were given), the total weight of those items, and the total value of the items.

### Example

```
knapsack(0, items) ➞ {
  capacity: 0,
  items: [],
  weight: 0,
  value: 0
}
```

---

## Breakdown

### Input / Output

**Input**

- Number: Capacity of the backpack
- Array: elements are objects (items)
  - each object contains 3 properties:
    - Name: represented as a String
    - Weight: represented as a Number
    - Value: represented as a Number

**Output**

- Object: 4 properties
  - Capacity: Number - Max weight capacity of the knapsack
  - Items: [ ]
  - Weight: Number - sum of the weights for each item
  - Value: Number - sum of the values for each item

**Rules**

- fill the knapsack with loot from a list of items to achieve the ***highest value*** possible.

- The ***total weight*** of all chosen items cannot exceed the ***capacity*** of the knapsack.
- Return an object containing:
  - the capacity of the knapsack
  - An array of the items that have the highest value possible from the list of items without exceeding the weight capacity
    - items should be in the order that they were listed in the 
  - sum of the items weights
  - sum of the items values

### Examples

```javascript
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

console.log((knapsack(2, items))
// ({
//   capacity: 2,
//   items: [
//     {name:"smartphone",weight:1,value:200},
//     {name:"gold necklace",weight:1,value:2500}
//   ],
//   weight: 2,
//   value: 2700
// }));
            
console.log((knapsack(14, items))
// ({
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
```

## Algorithm

Find all the combinations of items that have a combined weight under or equal to the capacity of the knapsack. 

Given:

```javascript
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

Sort this array based on value:
items.sort((a, b) => b.value - a.value);

[
  { name: 'gold necklace', weight: 1, value: 2500 },
  { name: 'tablet', weight: 7, value: 1400 },
  { name: 'laser printer', weight: 25, value: 400 },
  { name: 'smartphone', weight: 1, value: 200 },
  { name: 'toaster oven', weight: 5, value: 129 },
  { name: 'shoes', weight: 1, value: 79 },
  { name: 'frozen dinners', weight: 10, value: 50 },
  { name: 'textbook', weight: 3, value: 20 },
  { name: 'medicine', weight: 1, value: 17 },
  { name: 'wall clock', weight: 2, value: 15 },
  { name: 'desk lamp', weight: 2, value: 12 },
  { name: 'decorative cushion', weight: 1, value: 11 },
  { name: 'beach towel', weight: 1, value: 10 },
  { name: 'paper', weight: 2, value: 5 }
]

Filter this array. For each element, check if the weight of the item will fit in the capacity of the knapsack. If it does, add this weight to the a total weight that will be used to keep track of the total weight that has been accumulated so far. Return the current item if its weight plus the total weight is under or equal to the capacity. 

let combinedWeight = 0;
let capacity = 5;
sortedItems.filter(item => {
  if (item.weight + combinedWeight <= capacity) {
    combinedWeight += item.weight;
    return true;
  }
  
  return false;
})

[
  { name: 'gold necklace', weight: 1, value: 2500 },
  { name: 'smartphone', weight: 1, value: 200 },
  { name: 'shoes', weight: 1, value: 79 },
  { name: 'medicine', weight: 1, value: 17 },
  { name: 'decorative cushion', weight: 1, value: 11 }
]

// weight: 5,
// value: 2807

This array of items needs to be sorted back into the order that the items were displayed in the original items array. 

Iterate over the original unsorted array of items. On each iteration, set the current itemName to the name of the current item -> currentName = item.name.
For each name, iterate over the array of the items that were chose. If currentName === chosenName, add this item to an array.

let result = [];
for (let i = 0; i < items.length; i += 1) {
  let currentName = items[i].name;
  for (let j = 0; j < chosenItems.length; j += 1) {
    if (currentName === chosenItems[j].name) {
      result.push(chosenItems[j])
    }
  }
}

```

## Code

```javascript
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
```

