"use strict";

// Help the Bookseller
// -------------------

/*
A bookseller has lots of books classified in 26 categories labeled A, B, 
... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st 
character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code c is followed by a space and by a 
positive integer n (int n >= 0) which indicates the quantity of books of 
this code in stock.

For example an extract of a stocklist could be:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
or
L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....

You will be given a stocklist (e.g. : L) and a list of categories in capital 
letters e.g :

M = {"A", "B", "C", "W"} 
or
M = ["A", "B", "C", "W"] or ...

and your task is to find all the books of L with codes belonging to each 
category of M and to sum their quantity according to each category.

For the lists L and M of example you have to return the string 
(in Haskell/Clojure/Racket a list of pairs):

(A : 20) - (B : 114) - (C : 50) - (W : 0)

where A, B, C, W are the categories, 20 is the sum of the unique book of 
category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 
corresponding to "CDXEF" and 0 to category 'W' since there are no code 
beginning with W.

If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).

Note:
- In the result codes and their values are in the same order as in M.


PEDAC
-----

Inputs: Two Arrays
- first array is the stocklist
  - contains strings that are made up of two parts:
    - code where the first letter of the code is the category
    - quantity of the books in that category
- second array is the list of categories
  - contains strings of single capital letters
Outputs: String
- contains the category and the number of total books for that category for
each book separated by a dash '-'

Rules:
- for every category in the list of categories, get the sum of the total books
for each category and return each category with its total quantity in a string
wrapped in parantheses like this: "(A : 20) - (B : 114)"
- in the stocklist, each code is followed by a space and a positive integer
  - "ABART 20"
- The first char of the code represents the book category
  - "A" (from "ABART")
- if stocklist or categoris are empty, return empty string
- the result should keep the same order as they occur from the stocklist
- inputs will be arrays

Examples:

L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] 
M = ["A", "B", "C", "W"]
result = (A : 20) - (B : 114) - (C : 50) - (W : 0)

M is categories, and contains different categories.
L is stocklist and contains 5 codes.
The first category of M is "A". This means we need to get the total quantity
of books from the stocklist that contain a code that starts with "A".
-> "ABART 20" -> total = 20
Same for "B"
-> "BKWRK 25" and "BTSQZ 89" -> total = 114
"C"
-> "CDXEF 50" -> total = 50
"W"
-> no code starts with "W" -> total = 0

Empty input:
------------

L = []
M = ["A", "B" "C"]
res = ""

or

L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
M = []
res = ""

Mental Models:
If either array is empty, return empty string
Create an empty array. Iterate over the categories. On each iteration,
iterate over the array of codes. On each iteration, create a sum = 0.
If the first letter of the current code is equal to the current category, 
split the code by spaces and take the second element of the split code and
convert it to a number and add it to the sum. After every code has been checked
Add "(${category} : ${sum})" to the array. After all codes and catergories
have been check, join the result array by dashes "-".

Data Structure:
Array
  - inputs
  - output: array of strings
    - "(category : quantity)"

Algorithm:
- if either array has a lenght of 0, return empty string
- create an empty array
- iterate over categories array using forEach
  - create a sum variable equal to 0
  - iterate over the stocklist(codes) using forEach
    - split the code on spaces to get a two element array
      - ["ABART", "20"]
      - if (array[0][0] === current category) 
        - sum += Number(array[1])
  - push the category and sum to the result array
    - result.push("(${category} : ${sum})")
- join the result array on dashes
  - result.join(' - ')
- return result

*/

function stockList(codes, categories) {
  if (codes.length === 0 || categories.length === 0) return "";

  let result = [];

  categories.forEach(category => {
    let sum = 0;

    codes.forEach(code => {
      let [codeChars, quantity] = code.split(' ');
      if (codeChars[0] === category) {
        sum += Number(quantity);
      }
    });

    result.push("(" + category + " : " + String(sum) + ")");
  });

  return result.join(" - ");
}

let d = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
let e = ["A", "B"]
let resu = "(A : 200) - (B : 1140)"
console.log(stockList(d, e) === resu)

let b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
let c = ["A", "B", "C", "W"]
let res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
console.log(stockList(b, c) === res)