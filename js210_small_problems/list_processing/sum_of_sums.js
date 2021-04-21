function sumOfSums(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    sum += array.slice(0, i + 1).reduce((acc, val) => acc + val);
  }

  return sum;
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

// LS Solution:

function sumOfSums(numbers) {
  return numbers.map((number, idx) => numbers.slice(0, idx + 1)
                                             .reduce((sum, value) => sum + value))
                                             .reduce((sum, value) => sum + value);
}