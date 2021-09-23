"use strict";

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

console.log(tournamentScores((["A 0 - 1 B", "C 2 - 0 D", "B 2 - 2 C", "D 3 - 1 A", "A 2 - 2 C", "B 2 - 0 D"])))// [["B", 7, 5, 3], ["C", 5, 6, 2], ["D", 3, 3, -2], ["A", 1, 3, -3]], "Example #1");
console.log(tournamentScores((["A 0 - 0 B", "C 3 - 5 D", "B 1 - 0 C", "D 1 - 1 A", "A 2 - 2 C", "B 1 - 0 D"])))// [["B", 7, 2, 2], ["D", 4, 6, 1], ["A", 3, 3, 0], ["C", 1, 5, -3]]);
console.log(tournamentScores((["A 4 - 0 B", "C 2 - 1 D", "B 1 - 0 C", "D 3 - 2 A", "A 1 - 3 C", "B 2 - 1 D"])))// [["C", 6, 5, 2], ["B", 6, 3, -2], ["A", 3, 7, 1], ["D", 3, 5, -1]], "Example #2");
console.log(tournamentScores((["A 3 - 3 B", "C 0 - 6 D", "B 4 - 2 C", "D 0 - 1 A", "A 1 - 2 C", "B 2 - 1 D"])))// [["B", 7, 9, 3], ["A", 4, 5, 0], ["D", 3, 7, 4], ["C", 3, 4, -7]]);
console.log(tournamentScores((["A 2 - 1 B", "C 3 - 0 D", "B 1 - 1 C", "D 1 - 0 A", "A 3 - 0 C", "B 2 - 4 D"])))// [["A", 6, 5, 3], ["D", 6, 5, 0], ["C", 4, 4, 0], ["B", 1, 4, -3]], "Example #3");
console.log(tournamentScores((["A 0 - 1 B", "C 2 - 0 D", "B 0 - 0 C", "D 0 - 1 A", "A 0 - 2 C", "B 3 - 1 D"])))// [["C", 7, 4, 4], ["B", 7, 4, 3], ["A", 3, 1, -2], ["D", 0, 1, -5]]);