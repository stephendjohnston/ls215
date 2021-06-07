function shortLongShort(str1, str2) {
  [str1, str2] = [str1, str2].sort((a, b) => a.length - b.length);
  
  return str1 + str2 + str1;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"