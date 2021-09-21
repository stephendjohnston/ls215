##### Edabit > Very Hard

---

# Standard Competition Ranking

Standard competition ranking (also known as "1224" ranking) assigns the same rank to matching values. Rank numbers are increased each time, so ranks are sometimes *skipped*. If we have 5 scores (the highest score having a rank of 1):

No matching values:

```
Scores = [99, 98, 97, 96, 95]
Rank = 1,  2,  3,  4,  5
```

With matching values:

```
Scores = [99, 98, 98, 96, 95]
Rank = 1,  2,  2,  4,  5

// Second and third scores are equal, so rank "3" is skipped.
```

Given an object containing the names and scores of 5 competitors, and a competitor name, return the *rank* of that competitor after applying competition ranking.

### Examples

```
competition_rank({
  George: 96,
  Emily: 95,
  Susan: 93,
  Jane: 89,
  Brett: 82
  }, "Jane") ➞ 4

competition_rank({
  Kate: 92,
  Carol: 92,
  Jess: 87,
  Bruce: 87,
  Scott: 84
  }, "Bruce") ➞ 3
```

### Notes

The highest score has a rank value of 1.

---

### Definitions / Rules

- Rank is number value that is given to scores based on their relative place among other scores
  - A rank of 1 would be given to the highest score with each consecutive score receiving a rank 1 lower than the previous score, unless there are consecutive scores with the same score value where those scores will be given an equal rank.
    - If there are consecutive equal scores, then the first score following consecutive scores will be given the rank that would be given to it if there were not consecutive scores.
- The Highest score is given the rank of `1` no matter what
- The ranks increment by 1
- the same rank is applied to matching values

### Input / Output

**Input**

- Object
  - contains one key-value pair	
    - "name of person": Score
    - key is capitalized
    - value is Integer
- String
  - Name of Person
  - Capitalize name

### Mental Model

Take an object and get the scores for each person in the object. Sort the scores from highest to lowest. Create an array that will assign ranks based on the scores. Create an array of objects for each person. Apply the rank to each person object. Return the rank of person from the given string.

### Examples / Test Cases

```javascript
competitionRank({
  George: 96,
  Emily: 95,
  Susan: 93,
  Jane: 89,
  Brett: 82
  }, "Jane") ➞ 4

competitionRank({
  Kate: 92,
  Carol: 92,
  Jess: 87,
  Bruce: 87,
  Scott: 84
  }, "Bruce") ➞ 3

// No name input given
competitionRank({
  George: 96,
  Emily: 95,
  Susan: 93,
  Jane: 89,
  Brett: 82
}) -> 0

// No properties in object
competitionRank({}, "Jane") -> 0
```

### Data Structures

Object

- Input: key will be person's name

Array

- Scores

Number

- Rank
- Score

String

- Input String: name of person

### Algorithm

- Create an array of arrays where each array has the name of the person as the first element and their score as the second element
  - Sort this array based on the score value
- create a `rank` variable and set the value to `1`
- Map over the array of arrays
  - if the idx === 0 
    - Push the current rank value onto the current array 
  - if the score of the current array !== score of the next array
    - increment `rank` by `1`
- Iterate over the array of arrays
  - Check to see if the name of current array === input name
    - if it does, return the rank of the current array
- If the input name does not match any of the names, return `0`

### Code

```javascript
function competitionRank(results, person) {
  let personsArray = arrayOfPersonsInfo(results);
  let personsRanked = applyRank(personsArray);

  for (let i = 0; i < personsRanked.length; i += 1) {
    if (personsRanked[i][0] === person) return personsRanked[i][2];
  }

  return 0;
}

// competitionRank({Aria: 90, Brooke: 90, Olivia: 90, Eve: 74, Ellie: 87}, "Ellie")

// Creates an array of arrays where each array has two elements: [Name, score]
// and sorts them from highest score to lowest score;

// [
//   [ 'Aria', 90 ],
//   [ 'Brooke', 90 ],
//   [ 'Olivia', 90 ],
//   [ 'Ellie', 87 ],
//   [ 'Eve', 74 ]
// ]

function arrayOfPersonsInfo(results) {
  return Object.keys(results)
               .map(name => [name, results[name]])
               .sort((a, b) => b[1] - a[1]);
}

// Takes the array of arrays where each subarray is: [name, score] and pushes
// the appropriate rank onto each subarray:

// [
//   [ 'Aria', 90, 1 ],
//   [ 'Brooke', 90, 1 ],
//   [ 'Olivia', 90, 1 ],
//   [ 'Ellie', 87, 4 ],
//   [ 'Eve', 74, 5 ]
// ]

function applyRank(persons) {
  let rank = 1;

  return persons.map((person, idx) => {
    if (idx === 0) {
      person.push(rank);
      return person;
    }

    if (person[1] !== persons[idx - 1][1]) rank = idx + 1;

    person.push(rank);
    return person;
  });
}
```



