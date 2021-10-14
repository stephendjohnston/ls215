"use strict";

/*
In early recorded Chinese history, time was reckoned using the sexagenary (60-year) cycle, generated from two subcycles:

Five heavenly stems (elements) in this order: wood, fire, earth, metal, water. The stems change every two years.
Twelve earthly branches (animals) in this order: rat, ox, tiger, rabbit, dragon, snake, horse, sheep, monkey, rooster, dog, pig. The branches change yearly.
The combinations between these two sub-cycles result in a 60-year cycle where no two years are the same — for example, the 5 years of the Rat have 5 different elements: 1924 Wood Rat, 1936 Fire Rat, 1948 Earth Rat, 1960 Metal Rat, 1972 Water Rat.

The first 14 years of the current cycle are shown in the table below:

Gregorian Year  Stem  Branch
1984  Wood  Rat
1985  Wood  Ox
1986  Fire  Tiger
1987  Fire  Rabbit
1988  Earth Dragon
1989  Earth Snake
1990  Metal Horse
1991  Metal Sheep
1992  Water Monkey
1993  Water Rooster
1994  Wood  Dog
1995  Wood  Pig
1996  Fire  Rat
1997  Fire  Ox
These days, the sexagenary cycle is used mainly for historical celebrations and events, and in Chinese astrology. The Gregorian calendar is now the standard means of reckoning time.

Create a function that takes a number representing a year in the Gregorian calendar, and returns a string consisting of the corresponding stem-and-branch combination in the sexagenary cycle.

Examples
sexagenary(1971) ➞ "Metal Pig"

sexagenary(1927) ➞ "Fire Rabbit"

sexagenary(1974) ➞ "Wood Tiger"

- check if the input year is greater than or less than the benchmark year.
- if the benchmark year > input -> benchmark % input
- if input > benchmark -> input % benchmark
- take the remainder and get the remainder of of this number divided by 12
  - remainder % 12, this will give the index in the BRANCHES array for the element we need
- we can use the same logic for the STEMS except we divide the remainder by 10 and use the remainder of this operation to get the element in the STEMS array.
*/

const STEMS = ['Wood', 'Wood', 'Fire', 'Fire', 'Earth', 'Earth', 'Metal', 'Metal', 'Water', 'Water'];
const BRANCHES = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep', 'Monkey', 'Rooster', 'Dog', 'Pig'];

function sexagenary(year) {
  const BENCHMARK_YEAR = 1984;
  
  if (year === BENCHMARK_YEAR) return "Wood Rat"
  
  let remainder;
  
  if (year > BENCHMARK_YEAR) {
    remainder = year % BENCHMARK_YEAR;
  } else {
    remainder = BENCHMARK_YEAR % year;
  }
  
  let stemsIndex = remainder % STEMS.length;
  let branchesIndex = remainder % BRANCHES.length;
  
  if (BENCHMARK_YEAR > year) {
    stemsIndex = (STEMS.length - stemsIndex) % 10;
    branchesIndex = (BRANCHES.length - branchesIndex) % 12;
  }
  
  return [STEMS[stemsIndex], BRANCHES[branchesIndex]].join(' ');
}


console.log(sexagenary(1971))// ➞ "Metal Pig"

console.log(sexagenary(1927))// ➞ "Fire Rabbit"

console.log(sexagenary(1974))// ➞ "Wood Tiger"

console.log(sexagenary(1990))// -> "Metal Horse"

console.log(sexagenary(2000))// -> "Metal Dragon"

console.log(sexagenary(2017))// 'Fire Rooster'

console.log(sexagenary(1958))// 'Earth Dog'

console.log(sexagenary(1942))// 'Water Horse'

console.log(sexagenary(1984))// 'Wood Rat'

console.log(sexagenary(1985))// 'Wood Ox'