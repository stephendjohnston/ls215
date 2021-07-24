"use strict";

// Supermarket
// -----------

/*
There is a queue for the self-checkout tills at the supermarket. Your task is
write a function to calculate the total time required for all the customers 
to check out!

input:
customers: an array of positive integers representing the queue. Each integer
represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.

output:
The function should return an integer, the total time required.

queueTime([5,3,4], 1)
should return 12
because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
should return 10
because here n=2 and the 2nd, 3rd, and 4th people in the
queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
should return 12

Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.
 

PEDAC
-----

Inputs: Array of integers, and Integer
  - array a queue
    - each element is a customer
    - the value of each element is a time value of how long it takes for a customer to check out at a till
  - The integer input is the number of tills available
Outputs: Integer
  - the total time required for all customers to checkout
  
Rules:
  - There is only one queue -array
  - the order of the queue never changes
  - the first customer in the queue proceeds to a till as soon as it becomes free
  - all test input will be valid
  - if there is only one till, just return the sum of the array

Examples:
queueTime([2,3,10], 2)
- till 1 -> 2
- till 2 -> 3
- till 1 -> 10
array[0].push(2) -> [[2], []]
array[1].push(3) -> [[2], [3]]
array[0].push(10) -> [[2, 10], [3]]

queueTime([10,2,3,3], 2)
- till 1 -> 10
- till 2 -> 2
- till 2 -> 3
- till 2 -> 3
array = [[], []]
array[0].push(10) -> [[10], []]
array[1].push(2) -> [[10], [2]]
array[1].push(3) -> [[10], [2, 3]]
array[1].push(3) -> [[10], [2, 3, 3]]

queueTime([3, 2, 10], 2) -> 12
till 1 -> 3
till 2 -> 2
till 2 -> 10

queueTime([1, 3, 5, 2, 10], 2) -> 15
- till 1 -> 1
- till 2 -> 3 - after till 1 finished till 2 will have 2 mins left
- till 1 -> 5 - 3 mins left when till 2 starts on value 2
- till 2 -> 2 - 
- till 2 -> 10
till 1 = 6 mins total
till 2 = 15 mins total

queueTime([5, 2, 2, 6], 2) -> 11
- till 1 -> 5
- till 2 -> 2
- till 2 -> 2
- till 2 -> 6

queueTime([5, 2, 4, 2, 6], 2) -> 12
- till 1 -> 5
- till 2 -> 2
- till 2 -> 4
- till 1 -> 2
- till 2 -> 6
array = [[], []]
start -> [[5], [2]] 
array[0].push(4) -> [[5], [2]] -> [[2], [5]]
array[0].push(4) -> [[2, 4], [5]]
array[0].push(2) -> [[5, 2], [2, 4]]
array[0].push(6) -> [[5, 2], [2, 4, 6]]



Mental Model
Create an array of arrays equal to the number of tills. Splice out the number of elements equal to the number of tills. Add these elements to each subarray so now we have an array of subarrays, where each subarray will have on element. Iterate over the remaining values using a for loop. Sort the array of arrays based on its total sum so the the array with the lowest sum will be at index 0 of the main array. Push the next value of the input array into the subarray at index 0. 

queueTime([3, 2, 10], 2) -> 12
till 1 -> 3
till 2 -> 2
till 2 -> 10
array[[3], [2]]
- > [[2], [3]]
array[0].push(10) -> [[2, 10], [3]]
return an array of [12, 3]
return the largest number, 12

Algorithm:

create array of arrays
- create result array
- use for loop to loop equal to the number of tills
  - on each loop push an array to an empty result array
- get an array of the first elements in the array from index 0 up to index equal to the number of tills
  - firstElemetns = array.slice(0, tills)
  - use for each to iterate over firstElements
    - on each iteration, push the current value to the result subarray at the same index of the current value
- input = input.slice(tills)
- use for loop to iterate up to the number of inputs still remaining
  - on each loop, sort the array of subarrays, based on the sum of
  their elements.
    - array[0].push(2) -> [[5, 2], [2, 4]]
    array.sort((till1, till2) => {
      let sumTill1 = till.reduce((acc, val) => acc + val)
      
      return sumTill1 - sumTill2
    })

  - push in the value at the current index of the loop from the input array into the first subarray. 
- get an array of integers, by summing the each subarray
  - map over the array of arrays
    - use reduce on each subarray to get a sum
  - return Math.max(...array);


*/

function queueTime(array, tills) {
  if (tills >= array.length) {
    return Math.max(...array);
  }
  
  if (tills === 1) {
    return array.reduce((acc, val) => acc + val);
  }
  
  let result = [];
  
  for (let i = 0; i < tills; i += 1) {
    result.push([]);
  }
  
  let firstElements = array.slice(0, tills);
  array = array.slice(tills);
  
  firstElements.forEach((val, idx) => result[idx].push(val));
  
  for (let i = 0; i < array.length; i += 1) {
    result.sort((till1, till2) => {
      let sumTill1 = till1.reduce((acc, val) => acc + val);
      let sumTill2 = till2.reduce((acc, val) => acc + val);
      
      return sumTill1 - sumTill2;
    });
    
    result[0].push(array[i]);
  }
  
  return Math.max(...result.map(till => {
    return till.reduce((acc, val) => acc + val);
  }));  
}

console.log(queueTime([5,3,4], 1))         // 12
console.log(queueTime([10,2,3,3], 2))      // 10
console.log(queueTime([2,3,10], 2))        // 12
console.log(queueTime([1,2,3,4], 1))       // 10
console.log(queueTime([2,2,3,3,4,4], 2))   // 9
console.log(queueTime([5, 2, 4, 2, 6], 2)) // 12
console.log(queueTime([5, 2, 2, 6], 2))    // 10
console.log(queueTime([1,2,3,4,5], 100))   // 5