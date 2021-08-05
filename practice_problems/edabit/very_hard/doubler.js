"use strict";

// Doubler
// -------

/*
“Write a function called doubler that doubles every value in an array”.

Input: Array
  - string
    - split on characters
    - eg. 'hello' => ['h','e','l','l','o']
  - Number
    - array of digits
    - double each digit
    eg. 123 => [1, 2, 3] => [2, 4, 6]
  - object
    - ignore keys
    - use values and treat as normal array
  - undefined and null and booleans
    - return string 'invalid input'
  - Array
    - can contain any type
    String: 'hello' => 'hellohello'
    Number: 123 => 246
    Object: object and copy of object => 2 objects
    Array: same as object
    Null, undefined and boolean: add another one

Outputs: Array or String
  - string for invalid input
  -

Rules:
- return elements in the same order that they appear in the input
  - given an array:
    - for strings
      - concatenate strings
    - for numbers
      - double the number
    - for objects includes arrays, and for undefined, null or boolean
      - add another object, or value
  - given a string
    - split into array of characters and double each character
  - given a number
    - split into an array of digits and double each digit
  - given an object
    - get the values and treat as a normal array
  - undefined, null or booleans
    - return 'invalid input'

doubler(['hello', 'goodbye', 'seeyanever'])
=> ['hellohello', 'goodbyegoodbye', 'seeyanever']

doubler([123, 200, 400]) 
=> [246, 400, 800]

doubler([{a: 0, b: 4}, {4: ['f'], p: {e: 65}}])
=> [{a: 0, b: 4}, {a: 0, b: 4}, {4: ['f'], p: {e: 65}}, {4: ['f'], p: {e: 65}}]

doubler([undefined, true, null])
=> [undefined, undefined, true, true, null, null]

doubler(['hello', 200, {a: 0, b: 4}, [1,2,3], undefined, null, false])
=> ['hellohello', 400, {a: 0, b: 4}, {a: 0, b: 4}, [1,2,3], [1,2,3], undefined, undefined, null, null, false, false]
string => type string: concatenate
number => type number: double the value
{} => type object: double the object
[] => type object: double the object
undefined => type ?: double undefined
null => type object : double null
true or false => type boolean: double true, double false

  
doubler('hello there')
=> ['hh','ee','ll','oo', '  ', 'tt', 'hh', 'ee','rr','ee']

doubler(123)
[2, 4, 6]

doubler({a: 0, b: 4, c: 'hello'});
=> [0, 8, 'hellohello']

doubler(undefined)
=> 'invalid input'

doubler(null)
=> 'invalid input'

doubler(true)
=> 'invalid input'

Mental Model:

Validate input:
  - determine the type of input
  - if array
    - iterate over the elements of the array
      - determine type of element and perform appropriate operation
  - if string
    - split into array of characters and perform double of characters
  - if number
    - split into array of digtis and double each digit
  - if object
    - get values in array and treat as normal
  - if null, undefined, or boolean
    - return 'invalid input'

create a result array.

check the input for its type. if its a string, split the string into array
of characters.
If the input is a number, convert to a string, split to array of digit chars,
map over array and convert back to Number. 
If the input is type object and !== null, get the values into an array
using Object.values(object).
if input is null, undefined, or type boolean, then return 'invalid input'.

If it is an array. iterate over the array.
On each iteration, check the type of the current element. If the element is
a string concatenate the string to itself and push that string to result.
if the element is a number, double the number, and push taht number to the
result. if the element is anything else, push in that element to the result,
twice.


Data structure:

Everything

Algorithm:

- create result array
- create a variable and set that variable to the input
  - input = array
- if typeof array === 'string'
  - input = array.split('');
- if typeof array === 'number'
  - input = String(array).split('')
    - map using Number to get an array of numbers
    - input = array of numbers
- if typeof array === 'object' and array !=== null and !Array.isArray(array)
  - input = Object.values(array)
    - array of values which could be any type
- if array === null, undefined, or type boolean
  - return 'invalid input'

iterate over input array
  - if typeof element === 'string'
    - result.push(element + element)
  - if typeof element === 'number'
    - result.push(element * 2)
  - if the type of the element is anything else
    - result.push(element, element)
*/

function doubler(array) {
  const doubled = [];
  let input = array;

  if (typeof array === 'string') {
    input = array.split('');
  } else if (typeof array === 'number' && !Number.isNaN(array)) {
    input = String(array).split('').map(Number);
  } else if (typeof array === 'object' && array !== null && !Array.isArray(array)) {
    input = Object.values(array);
  } else if (array === undefined || array === null || typeof array === 'boolean' || Number.isNaN(array) || typeof array === 'function') {
    return 'invalid input';
  }

  input.forEach(element => {
    if (typeof element === 'string' || typeof element === 'number') {
      doubled.push(element + element);
    } else {
      doubled.push(element, element);
    }
  });

  return doubled;
}

console.log(doubler([NaN, Infinity, -Infinity]));   // [NaN, Infinity, -Infinity]
console.log(doubler("567hi"))                       // ["55", "66", "77", "hh", "ii"]
console.log(doubler([5, 6, 7]))                     // [10, 12, 14]
console.log(doubler(['a', 'b', 'c']));              // ['aa', 'bb', 'cc']
console.log(doubler(NaN))                           // "Invalid Input"
console.log(doubler([]));                           // []
console.log(doubler(""));                           // []
console.log(doubler({}));                           // []
console.log(doubler("ABC"));                        // ["AA", "BB", "CC"] 
console.log(doubler(123));                          // [2, 4, 6]
console.log(doubler(null));                         // "Invalid input"
console.log(doubler(undefined));                    // "Invalid input"
console.log(doubler(true));                         // "Invalid input"
console.log(doubler(doubler));                      // "Invalid input"
console.log(doubler(["a", "b", 5]));                // ["aa", "bb", 10]
console.log(doubler(["a", true, null]));            // ["aa", true, true, null, null]
console.log(doubler([[1, 2], 3, 4]));               // [[1, 2], [1, 2], 6, 8]
console.log(doubler([{a: 5}, "hello"]));            // [{a: 5}, {a: 5}, "hellohello"]
console.log(doubler());                             // "Invalid input"
console.log(doubler(0));                            // [0]
console.log(doubler(50));                           // [10, 0]
console.log(doubler({ a: 'A', b: [] }));            // ["AA", [], []]
console.log(doubler('NaN'))                         // ["NN', 'aa', 'NN']
