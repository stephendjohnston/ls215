##### JS210 Small Problems > Advanced 1

---

# Binary Search

It is quite common to find yourself in a situation where you need to perform a search on some data to find something you're looking for. Imagine that you need to search through the [yellow pages](https://en.wikipedia.org/wiki/Yellow_pages) to find the phone number of a particular business. A straightforward way to do this would be to go through the yellow pages one business at a time, checking if the current business name is the one you're trying to find.

This may be a simple and easy way to search, but it's not very efficient. In the worst case scenario, it could mean having to search through every single business name before finding out that the business isn't listed—or, slightly better, having to go through every letter from `'A'` to `'Z'` before finding the business. A *linear search* such as this can take quite a long time.

A *binary search* algorithm is a much more efficient alternative. This algorithm allows you to cut the search area in half on each iteration by discarding the half that you know your search term doesn't exist in. The binary search algorithm is able to do this by relying on the data being *sorted*. Going back to the yellow pages example, let's say that we're searching the following `yellowPages` data for the search item `'Pizzeria'`:

```javascript
// Yellow pages list of business names data:
const yellowPages = ['Apple Store', 'Bags Galore',
                     'Bike Store',  'Donuts R Us',
                     'Eat a Lot',   'Good Food',
                     'Pasta Place', 'Pizzeria',
                     'Tiki Lounge', 'Zooper'];
```

With a linear search, we would have to sequentially go through each of the items until we found the search item `'Pizzeria'`. In a binary search, however, the following sequence happens:

- Retrieve the middle value from the data (assume truncation to integer) --> `'Eat a Lot'`.

- If the middle value is equal to `'Pizzeria'`, stop the search.

- If the middle value is less than

   

  ```
  'Pizzeria'
  ```

  :

  - Discard the lower half, including the middle value --> `['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot']`.
  - Repeat the process from the top, using the upper half as the starting data --> `['Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper']`.

- If the middle value is greater than `'Pizzeria'`, do the same as the previous step, but with opposite halves.

Using the process described above, the search successfully ends on the second iteration when the middle value is `'Pizzeria'`.

Implement a `binarySearch` function that takes an array and a search item as arguments, and returns the index of the search item if found, or `-1` otherwise. You may assume that the array argument will always be sorted.

Examples:

```javascript
const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6
```

---

## Breakdown

### Input / Output

**Input**

- Array: contains numbers or strings sorted in ascending order
- Search Item: String or Number

**Output**

- Number: Index of the search element in the array or -1 if the search element does not exist in the array

### Rules / Definitions

- Cut the search area in half on each iteration by discarding the half that you know your search term doesn't exist in.
- return the index of the search item from the input array
- return -1 if the search item does not exist in the array

### Examples

```javascript
const yellowPages = ['Apple Store', 'Bags Galore',
                     'Bike Store',  'Donuts R Us',
                     'Eat a Lot',   'Good Food',
                     'Pasta Place', 'Pizzeria',
                     'Tiki Lounge', 'Zooper'];

binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6
```

### Mental Model

Continually split the input array in half, keeping the half of the array that the search item exists in by comparing the element found in the middle of the array with the searchItem. If the searchItem > middleElement, discard the bottom half of the array including the middle element. If the searchItem < middleElement, discard the top half of the array including the middle element. If the searchItem === middle Element, stop the search.

### Data Structure

Array

- Input: elements to search from

String

- possible elements in the input array

Number

- possible element in the input array
- Return value

### Algorithm

- Create a `count` variable to keep track of the index
  - If the searchItem is less than the middle value, then index will be 0 + `count`
  - If the searchItem is more than the middle value, then set `count`  to the index of the middle value + `count`

- While the array is not empty

- Retrieve the middle value from the data (array)
- If the middle value is equal to searchItem, stop the search.
- If the middle value is less than the searchItem
  - Discard the lower half, including the middle value
  - Repeat the process from the top, using the upper half as the starting data
- If the middle value is greater than the searchItem, do the same as the previous step, but with opposite halves.

### Code

```javascript
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
```

