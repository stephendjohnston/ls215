##### Edabit > Very Hard

---

# Premier League Champions

Create a function that takes an array of football clubs with properties: `name, wins, loss, draws, scored, conceded`, and returns the **team name** with the highest number of points. If two teams have the **same number of points**, return the team with the **largest goal difference**.

### How to Calculate Points and Goal Difference

```javascript
team = { name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
Goal Difference = scored - conceded = 88 - 20 = 68
```

### Examples

```javascript
champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  ])
➞ "Manchester United"
```

### Notes

Input is an array of teams.

---

## Breakdown

### Definitions / Rules

- Points: Calculated by multiplying `wins` * 3 and add the # of `draws`
  - `totalPoints`  =  `wins`  *  3  + `draws`
  - return the team name with the most `totalPoints`
- Goal Differential: The result of goals `scored` minus goals `conceded`
  - If two teams are tied in `totalPoints` return the team name with the largest `goalDifferential`

### Inputs / Outputs

**Input**

- Array
  - Elements are objects:
  - Contains 6 properties
    - name, wins, loss, draws, scored, conceded
    - all values are Numbers except for name which is a String

**Output**

- String
  - Name of the team with the highest `totalPoints`
  - If two teams are tied for `totalPoints` then return the team with largest `goalDifferential`



### Mental Model

Take the input array and return an array of objects with three properties: Name, totalPoints, goalDifferential. Reduce the array of objects based on totalPoints. If totalPoints are equal, then compare goalDifferential.

### Examples / Test Cases

```javascript
champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  ])
➞ "Manchester United"
```



### Data Structures

**Array**

- Input is an array of objects

**Objects**

- These are the elements of the input array
- Objects will be used to store the team name, totalPoints and goalDifferential

**Number**

- These are the values of properties except for `name`

**String**

- The value of the `name` property
- The return value

### Algorithm

- return a new array of objects that has 3 properties:
  - `name`, `totalPoints` and `goalDifferential`
- Reduce this array down to one object
  - the single object should be the one with the highest `totalPoints`
  - If two objects have the same `totalPoints`, compare `goalDifferential`
- Return the value of the `name` property from the object

### Code

```javascript
function champions(teams) {
  return teams.map(getNewTeamObject)
              .reduce(determineChampion)
              .name;
}

function getNewTeamObject(team) {
  return { 
    name: team.name,
    points: totalPoints(team),
    differential: goalDifferential(team)
  }
}

function totalPoints(team) {
  return team.wins * 3 + team.draws;
}

function goalDifferential(team) {
  return team.scored - team.conceded;
}

function determineChampion(team1, team2) {
  if (team1.points > team2.points) return team1;
  if (team2.points > team1.points) return team2;
  return team1.differential > team2.differential ? team1 : team2;
}

console.log(champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  ]))// "Manchester United"
```











