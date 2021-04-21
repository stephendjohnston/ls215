function leadingSubstrings(string) {
  return string.split("").map((_, index, arr) => {
    return string.slice(0, index + 1)
  });
}

function substrings(string) {
  let result = [];

  for (let i = 0; i < string.length; i += 1) {
    result.push(leadingSubstrings(string.slice(i)));
  }

  return result.flat();
}

// OR

function substrings(string) {
  return string
         .split("")
         .map((_, index) => leadingSubstrings(string.slice(index)))
         .flat();
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

// LS Solution: Uses concat and therefore does not need to use flat()

function substrings(string) {
  let substrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    let substring = string.substring(startIndex);
    substrings = substrings.concat(leadingSubstrings(substring));
  }

  return substrings;
}