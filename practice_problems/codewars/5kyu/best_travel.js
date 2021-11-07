"use strict";

// Best Travel

/*
John and Mary want to travel between a few towns A, B, C ... Mary has on a 
sheet of paper a list of distances between these towns. 
ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that 
he doesn't want to drive more than t = 174 miles and he will visit only 3 
towns.

Which distances, hence which towns, they will choose so that the sum of the 
distances is the biggest possible to please Mary and John?

Example:
With list ls and 3 towns to visit they can make a choice between: 
[50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],
[55,57,60],[55,58,60],[57,58,60].

The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173,
175.

The biggest possible sum taking a limit of 174 into account is then 173 and 
the distances of the 3 corresponding towns is [55, 58, 60].

The function chooseBestSum (or choose_best_sum or ... depending on the 
language) will take as parameters t (maximum sum of distances, integer >= 0),
k (number of towns to visit, k >= 1) and ls (list of distances, all 
distances are positive or zero integers and this list has at least one 
element). The function returns the "best" sum ie the biggest possible sum 
of k distances less than or equal to the given limit t, if that sum exists, 
or otherwise nil, null, None, Nothing, depending on the language.

Examples:
ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

xs = [50] choose_best_sum(163, 3, xs) -> null

ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

Notes:
try not to modify the input list of distances ls

PEDAC
-----

inputs: Integer (max distance), Integer (max # towns), Array (distances as Integers)
- max distance will be >= 0
- towns to visit is >= 1
- all distances are 0 or positive and list has at least one element
outputs: Number or null
- Sum of the distances closest to the max distance without going over
- null if no sum exists

Rules:
- maxDistance >= 0
- maxTowns >= 1
- distances will have at least one element and all number are positive
- find the sum of the maxTowns distances that is closest to maxDistance
without going over
  - eg. if maxTowns is 3, find the three distances that have a sum less than
  or equal to maxDistance

Examples:
ts = [50, 55, 57, 58, 60] choose_best_sum(174, 3, ts) -> 173
- get an array of arrays where each subarray is a unique combination
of distances
[50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],
[55,57,60],[55,58,60],[57,58,60]
- get an array of the sums of these nested arrays:
 [162, 163, 165, 165, 167, 168, 170, 172, 173, 175]
- find the sum that is closest to maxDistance(174)
173

Get unique combinations:
[50, 55, 57, 58, 60]
- [50, 55, 57], [50, 55, 58], [50, 55, 60]

indexes
[0, 1, 2]
[0, 1, 3]
[0, 1, 4]

[0, 2, 3]
[0, 2, 4]

[0, 3, 4]

[1, 2, 3]
[1, 2, 4]

[1, 3, 4]

[2, 3, 4]



Mental Model:
Take the input list of distances and get all the unique combinations of
distances as nested arrays within a main array. Take each nested array
and compute the sum of the distances within each array. Get the highest sum
that is closest, and less than or equal to maxDistance.

Algorithm:
Getting unique combinations:
- 
*/

function chooseBestSum(maxDistance, maxTowns, distances) {
  let combinations = [];
  if (maxTowns > distances.length) return null;

  for (let i = 0; i < distances.length - 2; i += 1) {
    for (let j = i + 1; j < distances.length - 1; j += 1) {
      for (let k = j + 1; k < distances.length; k += 1) {
        let combo = [];
        combo.push(distances[i], distances[j], distances[k]);
        combinations.push(combo);
      }
    }
  }

  let distancesTotal = combinations.map(combo => {
    return combo.reduce((acc, val) => acc + val);
  });

  let validDistances = distancesTotal.filter(distance => {
    return distance <= maxDistance;
  });

  return Math.max(...validDistances);
}

console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]))//=== 163)
console.log(chooseBestSum(163, 3, [50]))//=== null)
console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]))//=== 228)
