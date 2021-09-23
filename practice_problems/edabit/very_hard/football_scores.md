##### Edabit > Very Hard

---

# Football Tournament Scores

Four football teams face each other in a tournament and you must determine the final classification. Depending on the match result, a team gets a certain amount of points:

- A win is worth **3** points.
- A draw is worth **1** point.
- A defeat is worth **0** points.

Each team faces another once, for a total of six played games. For each game the result is provided with the following notation:

```
"Team X - X Team"
```

(*with X being the number of goals scored by both teams*)

```
"A 0 - 1 B" ➞ B wins and gets 3 points, A lose and gets 0 points
"C 2 - 2 D" ➞ It's a draw, both C and D get 1 point
```

At the end of the tournament, points are counted for each team. If two or more teams have the same number of points, two further criteria are applied to determine who gets the best placement, in the order:

- The greater number of goals scored.
- The greater goals difference (goals scored minus goals conceded).

Given an array `arr` containing strings with the results of the six played games, you have to implement a function that returns an array containing four arrays, one for each team, in the following notation:

```
[Team, PT, GS, GD]
```

- `Team`: A string, name of the team.
- `PT`: An integer, points obtained.
- `GS`: An integer, the sum of scored goals.
- `GD`: An integer, scored goals minus conceded goals (can be negative).

The main array containing the teams' info must be ordered in such a way as to present the correct placement of each team as if it were a summary of the final classification and performance.

### Examples

```
tournamentScores(["A 0 - 1 B", "C 2 - 0 D", "B 2 - 2 C", "D 3 - 1 A", "A 2 - 2 C", "B 2 - 0 D"]) ➞ [ [ "B", 7, 5, 3 ], [ "C", 5, 6, 2 ], [ "D", 3, 3, -2 ], [ "A", 1, 3, -3 ] ]
// Final order is B, C, D, A. All teams have different points, so that a simple descendant sort by points obtained is enough.

tournamentScores([["A 4 - 0 B", "C 2 - 1 D", "B 1 - 0 C", "D 3 - 2 A", "A 1 - 3 C", "B 2 - 1 D"]) ➞ [ [ "C", 6, 5, 2 ], [ "B", 6, 3, -2 ], [ "A", 3, 7, 1 ], [ "D", 3, 5, -1 ] ]
// Final order is C, B, A, D (C and B have same points, but C has more scored goals than B; A and D have same points but A has more scored goals than D).

tournamentScores([["A 2 - 1 B", "C 3 - 0 D", "B 1 - 1 C", "D 1 - 0 A", "A 3 - 0 C", "B 2 - 4 D"]) ➞ [ "A", 6, 5, 3 ], [ "D", 6, 5, 0 ], [ "C", 4, 4, 0 ], [ "B", 1, 4, -3 ]]
// Final order is A, D, C, B (A and D have same points and same number of scored goals, but A has a greater goals difference than D).
```

### Notes

- For the exercise scope, every given case is working with the given set of instructions, despite in real life football when teams share points, scored goals and goal difference, other criteria are used to determine the placement (sometimes even a coin toss!).

---

## Breakdown

### Input

- Array
  - elements are strings with the following format:
    - "Team X - X Team" where Team is single capitalized alpha char from A-D

### Output

- Array
  - 4 elements: [Team, PT, GS, GD]
  - Team is a String while the rest are Numbers

### Rules / Definitions

- There are always 4 teams
- Each team plays another team once for a total of 6 games in a tournament
- The team with most points is the champion
  - if two teams are tied in points, the teams are placed based on Goals Score, and if they are tied in that, compare on Goal Differential
- A **win** is worth 3 points
- A **draw** is worth 1 point
- A **loss** is 0 points
- Return an array of 4 arrays, one array for each team in the following format
  - [Team, PT, GS, GD]
  - Team is a String
  - PT = Points is an integer: Wins + Draws
  - GS = Goals Scored is an integer
  - GD = Goal Differential is an integer: the Goals Scored minus Goals conceded
- The return array must be arranged with in order of placement according PT's, GS, GD in that order
  - The team with the most PT will be placed ahead of a team with less PT
  - If two teams have the same PT, they will be compared using GS and then GD if neccessary
  - No other criteria will be required for this problem

### Examples / Test Cases

```javascript
tournamentScores(["A 0 - 1 B", "C 2 - 0 D", "B 2 - 2 C", "D 3 - 1 A", "A 2 - 2 C", "B 2 - 0 D"]) ➞ [ [ "B", 7, 5, 3 ], [ "C", 5, 6, 2 ], [ "D", 3, 3, -2 ], [ "A", 1, 3, -3 ] ]
// Final order is B, C, D, A. All teams have different points, so that a simple descendant sort by points obtained is enough.

tournamentScores([["A 4 - 0 B", "C 2 - 1 D", "B 1 - 0 C", "D 3 - 2 A", "A 1 - 3 C", "B 2 - 1 D"]) ➞ [ [ "C", 6, 5, 2 ], [ "B", 6, 3, -2 ], [ "A", 3, 7, 1 ], [ "D", 3, 5, -1 ] ]
// Final order is C, B, A, D (C and B have same points, but C has more scored goals than B; A and D have same points but A has more scored goals than D).

tournamentScores([["A 2 - 1 B", "C 3 - 0 D", "B 1 - 1 C", "D 1 - 0 A", "A 3 - 0 C", "B 2 - 4 D"]) ➞ [ "A", 6, 5, 3 ], [ "D", 6, 5, 0 ], [ "C", 4, 4, 0 ], [ "B", 1, 4, -3 ]]
// Final order is A, D, C, B (A and D have same points and same number of scored goals, but A has a greater goals difference than D).
```

### Mental Model

Create an object with 4 properties - one for each team where the key is the Team Name (A-D) and the value is an array for the PT's, GS and GD all set to 0. Iterate over the array of strings. Split each string into two parts - Team1 and Team2. Split each team into an array of chars where the Team will be at index 0 and the Goals Scored will be at index 1. Compare Team1's Goals with Team2's goals to determine the winner of the match. Increase the winning Teams PT's by 3. If it is a tie, increase PT's for both teams by 1. Increment each Teams Goals Scored. Calculate a teams new Goal Differential by subtracting Goals Scored for that game minus Goals Conceded for that game. Add this Differential to GD. Repeat this for each String in the array. 

Get the keys of the object. Map over the keys and return an array of the Team, PT, GS, GD. Sort this array based on PT. If two teams PT are equal, Sort by GS, if they are equal, Sort by GD. Return the sorted array. 

### Data Structure

**Array**

- Input will be an array of strings
- need to separate each string by " - " to give us 2 elements
  - need to separated this two elements by " " (space) to get [Team, GS]
- Output will be an array of 4 arrays - one for each team

**String**

- Team will be a string - A, B, C or D

**Number**

- PT, GS, GD will all be integers
  - GD can be negative



#### Intermediary Data Structure

**Object**

- Use an object with four properties - one for each team where the key is the Team char and the value is an array with 3 elements all set to 0
  - Index 0 = PT
  - Index 1 = GS
  - Index 2 = GD



### Algorithm

- Create a `teams` object with this format
  - {team: [PT, GS, GD]}

- Iterate over the array of strings and split each string by " - ". This will get a two element array of ["Team GS", "Team GS"]
  - Team1 will be index 0 and Team2 will be index 1
    - Split each string by " "
      - Index 0 will be teamName and index 1 will be teamGS for each team of each split string
  - Compare each teams GS, give the team with the high GS 3 points
  - if GS are equal, increment PT by 1
  - Increment each teams GS by the GS in the game
  - Take the difference of GS - GC and add that number to GD
- Get the keys of the object in array, map over the array of keys and for each key, return an array in this format: [Team, PT, GS, GD]
- Sort this array based on PT, GS, GD in that order

### Code

```javascript
function tournamentScores(scores) {
  const teamStats = {
    A: [0, 0 ,0], B: [0, 0, 0], C: [0, 0, 0], D: [0, 0, 0]
  }

  scores.forEach(game => {
    let [team1, team2] = game.split(' - ');

    updateTeamStats(team1, team2, teamStats);
  });

  return Object.keys(teamStats)
               .map(name => {
                 return [name, teamStats[name][0], teamStats[name][1], teamStats[name][2]];
               })
               .sort(byPointsGSGD);
}

function updateTeamStats(team1, team2, teamStats) {
  let [team1Name, team1GS] = team1.split(' ');
  let [team2GS, team2Name] = team2.split(' ');
  [team1GS , team2GS] = [Number(team1GS), Number(team2GS)]

  updateTeamGoalsScored(team1Name, team1GS, teamStats);
  updateTeamGoalsScored(team2Name, team2GS, teamStats);
  updateTeamGoalDifferential(team1Name, team1GS - team2GS, teamStats);
  updateTeamGoalDifferential(team2Name, team2GS - team1GS, teamStats);
  updateTeamPoints(team1GS, team1Name, team2GS, team2Name, teamStats);
}

function updateTeamGoalsScored(name, goals, teamStats) {
  teamStats[name][1] += goals;
}

function updateTeamGoalDifferential(name, goalDifferential, teamStats) {
  teamStats[name][2] += goalDifferential;
}

function updateTeamPoints(team1GS, team1Name, team2GS, team2Name, teamStats) {
  if (team1GS > team2GS) {
    teamStats[team1Name][0] += 3;
  } else if (team2GS > team1GS) {
    teamStats[team2Name][0] += 3;
  } else {
    teamStats[team1Name][0] += 1;
    teamStats[team2Name][0] += 1;
  }
}

function byPointsGSGD(team1, team2) {
  let [team1PT, team2PT] = [team1[1], team2[1]];
  let [team1GS, team2GS] = [team1[2], team2[2]];
  let [team1GD, team2GD] = [team1[3], team2[3]];

  if (team1PT !== team2PT) return team2PT - team1PT;
  if (team1GS !== team2GS) return team2GS - team1GS;
  return team2GD - team1GD;
}
```

#### Notes

I would've liked to have figured out how to not pass in teamStats to every function. If you initialize it outside of the function, this is possible, but the consequence being that teamStats does not get reset after each `tournamentScores` function call. All the stats get added up with each function call. Once I learn JavaScript OOP, this will easier to do. 