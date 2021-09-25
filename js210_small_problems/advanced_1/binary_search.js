"use strict";

// JS210 Small Problems > Advanced 1

// Binary Search

function binarySearch(elements, searchItem) {
  let itemIndex = 0;

  while (elements.length > 0) {
    let middleIndex = Math.floor(elements.length / 2);
    if (elements.length % 2 === 0) middleIndex -= 1;
    let middleElement = elements[middleIndex];

    if (middleElement === searchItem) {
      itemIndex = itemIndex + elements.indexOf(searchItem);
      return itemIndex;
    } else if (middleElement < searchItem) { 
      elements = elements.slice(middleIndex + 1)
      itemIndex = itemIndex + middleIndex + 1;
    } else if (middleElement > searchItem) {
      elements = elements.slice(0, middleIndex);
    }
  }

  return -1;
}

/*
My solution using .slice() defeats the purpose of doing a binary search, 
because .slice() has to iterate over the array to make an array slice. 
For each comparison, it has to iterate over half the remaining array. 
It turns a O(log n) solution into an O(n).

It's essentially the same algorithm, just ineffecient. The LS solution
exemplifies this.
*/

// LS Solution

function binarySearch(array, searchItem) {
  let high = array.length - 1;
  let low = 0;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (array[mid] === searchItem) {
      return mid;
    } else if (array[mid] < searchItem) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6