function longestWord(words) {
  console.log(myReduce(words, longest));
  return myReduce(words, longest);
}

// OR inline style:

function longestWord(words) {
  return myReduce(words, function (result, currentWord) {
    return currentWord.length >= result.length ? currentWord : result;
  });
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

function myReduce(array, func, initial) {
  let value;
  let index;

  if (initial === undefined) {
    value = array[0];
    index = 1;
  } else {
    value = initial;
    index = 0;
  }

  array.slice(index).forEach(element => value = func(value, element));
  return value;
}

longestWord(['abc', 'launch', 'targets', '']);      // "targets"