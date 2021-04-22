/*
Algorithm:

we have an array of arrays. We need to iterate over the arrays, on each
iteration we need to create a loop that loops the same amount of times equal
to the value at subarray[subarray.length - 1]. On each of those loops, we
can push the value that is at index 0 of the subarray to our result array
*/

function buyFruit(list) {
  const fruits = [];

  list.forEach(item => {
    for (let quantity = 0; quantity < item[1]; quantity += 1) {
      fruits.push(item[0]);
    }
  });

  return fruits;
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]