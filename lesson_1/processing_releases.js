/*
Processing Releases
-------------------
Write a Function named processReleaseData that processes the following movie 
release data:

**See code below

The Function should generate an Array of Objects that contain only the id and 
title key/value pairs. You may assume that id and title, when existing, is an 
integer greater than 0 and non-empty string respectively. Here are the rules:

- Keep only releases that have both id and title property present.
- Keep only the id and title data for each release.

Function should return: 

[{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];

Problem:
--------

Take an array of objects that contain data relating to movies, and return an array
of objects(movies) that contain an id and title key. The key and title should
also be the only data represented in the return array of objects for each object.

Rules:
  Explicit
    - only keep movies that have both id and title property present
    - only keep the id and title data for each movie

Algorithm:
---------

step 1: filter out movies that don't have both id and title properties
- iterate over the release data
  - return the current object if it includes the id and title property
- we now have an array with only the objects that contain an id and title
property
Step 2: return the array of objects that only contain the id title property
- declare and initialize a new empty array
- iterate of the array of objects and at each index add
*/

function processReleaseData(data) {
  let idAndTitleMovies = data.filter(movie => {
    return movie.id && movie.title;
  });

  let result = [];

  idAndTitleMovies.forEach(movie => {
    result.push({ id: `${movie.id}`, title: `${movie.title}`});
  });

  return result;
}

// LS Solution:

function processReleaseData(data) {
  return data.filter(release => release.id && release.title)
             .map(release => {
               return {
                 id: release.id,
                 title: release.title,
               };
             });
}

let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

processReleaseData(newReleases);