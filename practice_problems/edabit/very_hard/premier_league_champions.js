"use strict";

// Premier League Champions

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

console.log(champions([
    {
      name: "Manchester City",
      wins: 30,
      loss: 8,
      draws: 0,
      scored: 67,
      conceded: 20,
    },
    {
      name: "Liverpool",
      wins: 34,
      loss: 2,
      draws: 2,
      scored: 118,
      conceded: 29,
    },
    {
      name: "Leicester City",
      wins: 22,
      loss: 8,
      draws: 8,
      scored: 98,
      conceded: 29,
    },
  ]))// "Liverpool"

console.log(champions([
    {
      name: "Manchester City",
      wins: 30,
      loss: 8,
      draws: 0,
      scored: 67,
      conceded: 20,
    },
    {
      name: "NewCastle United",
      wins: 34,
      loss: 2,
      draws: 2,
      scored: 118,
      conceded: 36,
    },
    {
      name: "Leicester City",
      wins: 34,
      loss: 2,
      draws: 2,
      scored: 108,
      conceded: 21,
    },
  ]))//"Leicester City"

console.log(champions([
    {
      name: "Manchester City",
      wins: 30,
      loss: 6,
      draws: 2,
      scored: 102,
      conceded: 20,
    },
    {
      name: "Liverpool",
      wins: 24,
      loss: 6,
      draws: 8,
      scored: 118,
      conceded: 29,
    },
    {
      name: "Arsenal",
      wins: 28,
      loss: 2,
      draws: 8,
      scored: 87,
      conceded: 39,
    },
  ]))//"Manchester City"

console.log(champions([
    {
      name: "Manchester City",
      wins: 30,
      loss: 6,
      draws: 2,
      scored: 102,
      conceded: 20,
    },
    {
      name: "Liverpool",
      wins: 24,
      loss: 6,
      draws: 8,
      scored: 118,
      conceded: 29,
    },
    {
      name: "Arsenal",
      wins: 30,
      loss: 0,
      draws: 8,
      scored: 87,
      conceded: 39,
    },
  ]))//"Arsenal"

console.log(champions([
    {
      name: "Chelsea",
      wins: 35,
      loss: 3,
      draws: 0,
      scored: 102,
      conceded: 20,
    },
    {
      name: "Liverpool",
      wins: 24,
      loss: 6,
      draws: 8,
      scored: 118,
      conceded: 29,
    },
    {
      name: "Arsenal",
      wins: 28,
      loss: 2,
      draws: 8,
      scored: 87,
      conceded: 39,
    },
  ]))//"Chelsea"