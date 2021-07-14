"use strict";

// The Fiscal Code
// ---------------

/*
Problem:
--------

Each person in Italy has an unique identifying ID code issued by the national 
tax office after the birth registration: the Fiscal Code (Codice Fiscale). 
Check the Resources tab for more info on this.

Given an object containing the personal data of a person (name, surname, 
gender and date of birth) return the 11 code characters as a string following 
these steps:

- Generate 3 capital letters from the surname, if it has:
  -> At least 3 consonants then the first three consonants are used. 
  (Newman -> NWM).
  -> Less than 3 consonants then vowels will replace missing characters in 
  the same order they appear (Fox -> FXO | Hope -> HPO).
  -> Less than three letters then "X" will take the third slot after the 
  consonant and the vowel (Yu -> YUX).

- Generate 3 capital letters from the name, if it has:
  -> Exactly 3 consonants then consonants are used in the order they appear 
  (Matt -> MTT).
  -> More than 3 consonants then first, third and fourth consonant are used 
  (Samantha -> SNT | Thomas -> TMS).
  -> Less than 3 consonants then vowels will replace missing characters in 
  the same order they appear (Bob -> BBO | Paula -> PLA).
  -> Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).

- Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:
  -> Take the last two digits of the year of birth (1985 -> 85).
  -> Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
  -> For males take the day of birth adding one zero at the start if is less 
  than 10 (any 9th day -> 09 | any 20th day -> 20).
  -> For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).

Examples:
---------
fiscalCode({
  name: "Matt",
  surname: "Edabit",
  gender: "M",
  dob: "1/1/1900"
}) ➞ "DBTMTT00A01"

fiscalCode({
  name: "Helen",
  surname: "Yu",
  gender: "F",
  dob: "1/12/1950"
}) ➞ "YUXHLN50T41"

fiscalCode({
  name: "Mickey",
  surname: "Mouse",
  gender: "M",
  dob: "16/1/1928"
}) ➞ "MSOMKY28A16"

Notes:
------
- Code letters must be uppercase.
- Date of birth is given in D/M/YYYY format.
- The conversion table for months is already in the starting code.
- Y is not a vowel.

PEDAC
-----

Inputs: Object
  Keys:
    - name, surname, gender, dob
Outputs: String
  - 3 capital letters from surname
  - 3 capital letters from name
  - 2 numbers, 1 letter and 2 numbers from date of birth and gender
  - 2 numbers for the last two digits of the year of birth
  - A letter corresponding to the month of birth
  - 2 numbers for the day of birth

Rules:
- Code letters must be uppercase.
- Date of birth is given in D/M/YYYY format.
- The conversion table for months is given.
- Y is not a vowel.
- assume all entries are valid and that there are no extra characters
in strings like spaces, or punctuation eg. "Matt "

3 letters from surname:
  - Uppercase
  - if at least 3 consonants appear in surname then the first 3 that appear
  are used
  - if the surname does not have 3 consonants:
    - get however many consonants are in surname and then use vowels
      - consonants appear first, then vowels
  - If there are less than 3 letters then use 'X' to fill in until the name
  has 3 letters

3 letters from name:
  - Uppercase
  - if surname has exactly 3 consonants, then use those 3
  - if surname has more than 3 consonants, then use 1st, 3rd, and 4th
  - less than 3 consonants, then vowels will replace missing letters
    - consonants appear first, then vowels
  - less than 3 letters, then 'X' will be used to fill remaining spots
  until string is 3 letters

DOB
  Two Numbers:
    - Get the last two digits of the year
  Letter:
    - Generate letter corresponding to the month of birth using the 
    provided conversion table
  Last Two Numbers:
    - for males:
      - if the day of birth is less than 10, return the day of birth
      prepended with a 0
      - otherwise return day as is
    - for females:
      - take the day of birth and add 40

Examples:

fiscalCode({
  name: "Matt",
  surname: "Edabit",
  gender: "M",
  dob: "1/1/1900"
}) ➞ "DBTMTT00A01"

- surname = first 3 consonants = DBT
- name = exactly 3 consonants in Matt = MTT
- dob
  - year = 00
  - month = jan = 1 => 'A'
  - gender = 'M', day = 1 => '01'

fiscalCode({
  name: "Helen",
  surname: "Yu",
  gender: "F",
  dob: "1/12/1950"
}) ➞ "YUXHLN50T41"

- surname = less than 3 consonants and letters = 'X' to make 3 letters
  - 'YUX'
- name = exactly 3 consonants = 'HLN'
- dob
  - year = '50'
  - month = dec = 'T'
  - gender = 'F', day = 1 => '41'

fiscalCode({
  name: "Mickey",
  surname: "Mouse",
  gender: "M",
  dob: "16/1/1928"
}) ➞ "MSOMKY28A16"

- surname = less than 3 consonants = 'MSO'
- name = more than 3 consonants = 1st, 3rd, 4th = 'MKY'
- dob
  - year = '28'
  - month = jan = 'A'
  - gender = 'M', day = 16 = '16'

Mental Model:
Get the keys of the input object into an array. Reorder the array of keys
so that surname appears first and name second. Create a function for each
part of the return string. The first function will use surname, the second
function will use name, and the third function will use gender and dob;
Each function will return it's string value and then join the strings
together to get the main function return value.

Data Structures:
Array
  - keys
String
  - return values

Algorithm:

- initialize and declare a variable set it to an array of the keys of the
object
- create a function that returns the number of consonants in a string
  - string.match(/[^aeiou]/gi).length
SURNAME FUNCTION
  - return all consonants to an array
  - if the name is less than 3 letters
    - return the consonant first then then vowel then an 'X'
  - if length of consonants array is > 2
    - join the array and then slice the first 3 letters
    - convert to uppercase
  - if the length of consonants array is < 3
    - return consonants and then vowels

*/

const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" }

function fiscalCode(person) {
  let surnamePart = getSurnamePart(person.surname);
  let namePart = getNamePart(person.name);
  let dobPart = getDOBPart(person.gender, person.dob);

  return surnamePart + namePart + dobPart;
}

function getDOBPart(gender, dob) {
  let [day, month, year] = dob.split('/');
  year = year.slice(2);
  month = months[month];

  if (gender === 'M') {
    day = Number(day) < 10 ? '0' + day : day;
  } else {
    day = String(Number(day) + 40);
  }

  return year + month + day;
}

function getNamePart(name) {
  let [consonants, vowels] = separateConsonantsVowels(name);
  let consonantLength = consonants.length;

  if (name.length < 3) {
    return consonants + vowels + 'X';
  } else if (consonantLength === 3) {
    return consonants;
  } else if (consonantLength > 3) {
    return consonants[0] + consonants.slice(2, 4);
  } else {
    return (consonants + vowels).slice(0, 3);
  }
}

function getSurnamePart(surname) {
  let [consonants, vowels] = separateConsonantsVowels(surname);
  
  if (surname.length < 3) {
    return consonants + vowels + 'X';
  } else if (consonants.length >= 3) {
    return consonants.slice(0, 3);
  } else {
    return (consonants + vowels).slice(0, 3);
  }
}

function separateConsonantsVowels(string) {
  let consonants = string.match(/[^aeiou]/gi).join('');
  let vowels = string.match(/[aeiou]/gi).join('');

  return [consonants.toUpperCase(), vowels.toUpperCase()];
}

console.log(fiscalCode({ name: "Brendan", surname: "Eich", gender: "M", dob: "1/12/1961" }) === "CHEBND61T01")
console.log(fiscalCode({ name: "Helen", surname: "Yu", gender: "F", dob: "1/12/1950" }) === "YUXHLN50T41")
console.log(fiscalCode({ name: "Al", surname: "Capone", gender: "M", dob: "17/1/1899" }) === "CPNLAX99A17")
console.log(fiscalCode({ name: "Mickey", surname: "Mouse", gender: "M", dob: "16/1/1928" }) === "MSOMKY28A16")
console.log(fiscalCode({ name: "Marie", surname: "Curie", gender: "F", dob: "7/11/1867" }) === "CRUMRA67S47")