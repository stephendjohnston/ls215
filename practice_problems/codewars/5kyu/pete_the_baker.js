"use strict";

// Pete the Baker
// --------------

/*
Pete likes to bake some cakes. He has some recipes and ingredients. 
Unfortunately he is not good in maths. Can you help him to find out, how 
many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available 
ingredients (also an object) and returns the maximum number of cakes Pete 
can bake (integer). For simplicity there are no units for the amounts 
(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients 
that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 


PEDAC
-----

inputs: two Objects
- recipe
  - ingredients as keys and amounts(numbers) as values
- ingredients
outputs: Number
- number of cakes pete can make from the ingredients

Rules:
- if there is any ingredient that has smaller amount than what the
recipe needs, then return 0.
- the max number of cakes that can be made is whatever the smallest number is
after dividing the recipe amounts into the ingredient amounts
- if the number of ingredients is less than the recipe ingredients,
return 0
- 

Examples:
// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
-> recipe flour amount = 500, ingredient flour amount = 1200
  -> 1200 / 500 = 2 (rounded)
-> recipe sugar amount = 200, ingredient sugar amount = 1200
  -> 1200 / 200 = 6
-> recipe eggs amount = 1, ingredient eggs amount = 5
  -> 5 / 1 = 5
-> return 2 because you would not have enough flour to make any more cakes
even though you have extra of the other ingredients

// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
-> don't have all the ingredients required for the recipe

Mental Model:
get the keys of the recipe. Iterate over the keys and get the amount of
each ingredient from the recipe object and from the ingredients object. If
the ingredients returns undefined, then we do not have the ingredients to
make a cake and should retrun 0. Otherwise, divide the ingredients amount
by the recipe amount. If the amount is less than 1, return 0. otherwise 
round the amount down to a whole number. Store this number in an array.
Repeat for each of the ingredients in the recipe. return the lowest
number in the array.

Algorithm:
- create maxCakes array
- get the keys of the recipe array
  - Object.keys(recipe)
- use map to iterate over each key
  - on each iteration, get the amounts for each ingredient from the recipe
  object and from the ingredients object
    - if the ingredients object returns undefined, return 0
  - divide ingredient amount by recipe amount
    - round down
      - Math.floor()
    - return this number
- use Math.min() to get the smallest number from the array max cakes
and return it
*/

function cakes(recipe, available) {
  let maxCakes = Object.keys(recipe).map(ingredient => {
    let recipeAmount = recipe[ingredient];
    let availableAmount = available[ingredient] || 0;

    return Math.floor(availableAmount / recipeAmount);
  });

  return Math.min(...maxCakes);
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
