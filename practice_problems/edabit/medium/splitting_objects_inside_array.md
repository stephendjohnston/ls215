##### Edabit > Very Hard > Should be in Very Easy

---

# Splitting Objects Inside an Array

You bought a few bunches of fruit over the weekend. Create a function that splits a bunch into singular objects inside an array.

### Examples

```
splitBunches([
  { name: "grapes", quantity: 2 }
]) ➞ [
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 }
]


splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]) ➞ [
  { name: "currants", quantity: 1},
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "bananas", quantity: 1 },
  { name: "bananas", quantity: 1 }
]
```

### Notes

- The input array will never be empty.
- Objects will always have a `name` and `quantity` over `0`.
- The returned object should have each fruit in the same order as the original.

---

## Breakdown 

### Input / Output

**Input** 

- Array - elements are objects with two properties
  - Property 1: name: "Fruit"
  - Property 2: quantity: Amount as Number

**Output**

- Array - elements are objects with same properties as input objects
- The quantity value determines how many of that object gets duplicated and return in array
  - Eg. quantity: 2 -> means that object gets returned as two separate objects with quantity: 1

**Rules**

- The input array will never be empty
- Objects will always have a name property and a quantity above 0
- The returned array should have the objects in the same order as the input array

### Examples / Test Cases

```javascript
splitBunches([
  { name: "grapes", quantity: 2 }
]) ➞ [
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 }
]


splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]) ➞ [
  { name: "currants", quantity: 1},
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "bananas", quantity: 1 },
  { name: "bananas", quantity: 1 }
]
```

### Mental Model

Iterate over the array of objects and on each iteration create a for loop that will loop from 0 up to the quantity amount for the current object. Update the object so it has a quantity of 1. Push this object to the result array. Repeat for all objects. Return result array.

### Data Structures

**Array**

- the input is an array
- the output will also be an array

**Object**

- Each element in the input array is an object
- The elements in the output array will also be objects

**Number**

- The quantity property will have a value as a Number

### Algorithm

- Create an empty array `result`

- iterate over the array of objects
  - on each iteration create a `for` loop that will loop from 0 up to the value of the quantity property
    - update the quantity property for the current object to a value of 1
    - push the current object into the result array on each loop
- return the result array

### Code

```javascript
function splitBunches(bunches) {
  let result = [];

  bunches.forEach(bunch => {
    let max = bunch.quantity
    for (let i = 0; i < max; i += 1) {
      bunch.quantity = 1;
      result.push(bunch);
    }
  });

  return result;
}

console.log(splitBunches([{ name: 'bananas', quantity: 1 }]))// [{ name: 'bananas', quantity: 1 }])
console.log(splitBunches([{ name: 'bananas', quantity: 2 }]))// [{ name: 'bananas', quantity: 1 }, { name: 'bananas', quantity: 1 }])
console.log(splitBunches([{ name: 'bananas', quantity: 2 }, { name: 'grapes', quantity: 2 }]))
// // [{ name: 'bananas', quantity: 1 }, { name: 'bananas', quantity: 1 }, { name: 'grapes', quantity: 1 }, { name: 'grapes', quantity: 1 }])
console.log(splitBunches([{ name: 'cherry tomatoes', quantity: 3}, { name: 'bananas', quantity: 1 }, { name: 'grapes', quantity: 2 }, { name: 'cherry tomatoes', quantity: 3}]))
// // [{ name: 'cherry tomatoes', quantity: 1}, { name: 'cherry tomatoes', quantity: 1}, { name: 'cherry tomatoes', quantity: 1}, { name: 'bananas', quantity: 1 }, { name: 'grapes', quantity: 1 }, { name: 'grapes', quantity: 1 }, { name: 'cherry tomatoes', quantity: 1}, { name: 'cherry tomatoes', quantity: 1}, { name: 'cherry tomatoes', quantity: 1}])
```



