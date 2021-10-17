"use strict";

// Edabit > Hard > Layers in a Rug

/*
Write a function that counts how many concentric layers a rug has.

Examples
countLayers([
  "AAAA",
  "ABBA",
  "AAAA"
]) ➞ 2

countLayers([
  "AAAAAAAAA",
  "ABBBBBBBA",
  "ABBAAABBA",
  "ABBBBBBBA",
  "AAAAAAAAA"
]) ➞ 3

countLayers([
  "AAAAAAAAAAA",
  "AABBBBBBBAA",
  "AABCCCCCBAA",
  "AABCAAACBAA",
  "AABCADACBAA",
  "AABCAAACBAA",
  "AABCCCCCBAA",
  "AABBBBBBBAA",
  "AAAAAAAAAAA"
]) ➞ 5

Notes:

- Multiple layers can share the same component so count them separately (example #2).
- Layers will be horizontally and vertically symmetric.
- There will be at least one layer for each rug.
*/

function countLayers(carpetArr) {
  return carpetArr.reduce((arr, layer) => {
    if (!arr.includes(layer)) {
      arr.push(layer);
    }
    
    return arr;
  }, []).length;
}

console.log(countLayers([
"AAA"]) === 1)

console.log(countLayers([
"AAAA", 
"AAAA", 
"AAAA"]) === 1)

console.log(countLayers([
"AAAA", 
"ABBA", 
"AAAA"]) === 2)

console.log(countLayers([
"AAAAAAAAA", 
"ABBBBBBBA", 
"ABBBBBBBA", 
"ABBBBBBBA", 
"AAAAAAAAA"]) === 2)

console.log(countLayers([
"AAAAAAAAA", 
"ABBBBBBBA", 
"ABBAAABBA", 
"ABBBBBBBA", 
"AAAAAAAAA"]) === 3)

console.log(countLayers([
"AAAAAAAAA", 
"ABBBBBBBA", 
"ABCCCCCBA", 
"ABBBBBBBA", 
"AAAAAAAAA"]) === 3)

console.log(countLayers([
"AAAAAAAAAAA", 
"AABBBBBBBAA",
"AABCCCCCBAA",
"AABCAAACBAA",
"AABCADACBAA", 
"AABCAAACBAA",
"AABCCCCCBAA",
"AABBBBBBBAA",
"AAAAAAAAAAA"]) === 5)

console.log(countLayers([
"AAAAAAAAAAA", 
"AABBBBBBBAA",
"AABCCCCCBAA",
"AABCAAACBAA",
"AABCABACBAA", 
"AABCAAACBAA",
"AABCCCCCBAA",
"AABBBBBBBAA",
"AAAAAAAAAAA"]) === 5)

console.log(countLayers([
"AAAAAAAAAAA", 
"AABBBBBBBAA",
"AABCCCCCBAA",
"AABCDDDCBAA",
"AABCDDDCBAA", 
"AABCDDDCBAA",
"AABCCCCCBAA",
"AABBBBBBBAA",
"AAAAAAAAAAA"]) === 4)

console.log(countLayers([
"FFFFFFFFFFFFFFFFFFFFFFFFF",
"FFFFFFFFFFFFFFFFFFFFFFFFF",
"FFFFGGGGGGGGGGGGGGGGGFFFF",
"FFFFGGGAAAAAAAAAAAGGGFFFF", 
"FFFFGGGAABBBBBBBAAGGGFFFF",
"FFFFGGGAABCCCCCBAAGGGFFFF",
"FFFFGGGAABCDDDCBAAGGGFFFF",
"FFFFGGGAABCDDDCBAAGGGFFFF", 
"FFFFGGGAABCDDDCBAAGGGFFFF",
"FFFFGGGAABCCCCCBAAGGGFFFF",
"FFFFGGGAABBBBBBBAAGGGFFFF",
"FFFFGGGAAAAAAAAAAAGGGFFFF", 
"FFFFGGGGGGGGGGGGGGGGGFFFF", 
"FFFFFFFFFFFFFFFFFFFFFFFFF", 
"FFFFFFFFFFFFFFFFFFFFFFFFF"]) === 6)