"use strict";

// Remove the Computer Virus
// -------------------------

/*
Problem:
--------

Your computer might have been infected by a virus! Create a function that 
finds the viruses in files and removes them from your computer.

Examples
removeVirus("PC Files: spotifysetup.exe, virus.exe, dog.jpg") 
➞ "PC Files: spotifysetup.exe, dog.jpg"

removeVirus("PC Files: antivirus.exe, cat.pdf, lethalmalware.exe, dangerousvirus.exe ") 
➞ "PC Files: antivirus.exe, cat.pdf"

removeVirus("PC Files: notvirus.exe, funnycat.gif") 
➞ "PC Files: notvirus.exe, funnycat.gif")

Notes:
------
- Bad files will contain "virus" or "malware", but "antivirus" and "notvirus" 
will not be viruses.
- Return "PC Files: Empty" if there are no files left on the computer.

PEDAC
-----

Inputs: String
  - Each string will start with "PC Files:" and then a list of files
  separated by a comma and space ", "
  - Each file will be two 'words' separated by a '.'
Outputs: String
  - the output will be the same format as the input but only containing the
  non virus files.

Rules:
  - Bad files are files that contain these words: ['virus', 'malware']
  - These words: ['antivirus', 'notvirus'] are not bad files
  - return a string with no bad files
  - if there are no files left on the computer, return "PC Files: Empty"

Examples:
removeVirus("PC Files: spotifysetup.exe, virus.exe, dog.jpg") 
➞ "PC Files: spotifysetup.exe, dog.jpg"
-> 'virus.exe' is removed

removeVirus("PC Files: antivirus.exe, cat.pdf, lethalmalware.exe, dangerousvirus.exe ") 
➞ "PC Files: antivirus.exe, cat.pdf"
-> 'lethalmalware.exe' is removed because it contains keyword 'malware'
-> 'dangerousvirus.exe' is removed because it contains keyword 'virus'

removeVirus("PC Files: notvirus.exe, funnycat.gif") 
➞ "PC Files: notvirus.exe, funnycat.gif")
-> Nothing is removed. No Bad Viruses!!

removeVirus("PC Files: virus.exe, malware.exe")
-> "PC Files: Empty"
- Both files removed leaving no files left on the computer


Mental Model:
Create an array with 1 string element , ['PC Files: ']. Split the input using
regex to split the string on ':' and ','. This will return an array of strings
beginning with "PC Files" which we dont need and can remove. The rest of the
array will be a strings of file names. We then can iterate over the array.
On each iteration, split the file name on '.', so we get the file name and
the file type separate. The file name will be index 0 of this array. We
then can use regex to determine if a filename contains 'antivirus' or 'notvirus'.
If the file names contains either of these, we can add the file to our files
array. Then we can check if the string contains 'virus' or 'malware'. If the filename
contains these words, do not add them to our file array. All other files can
be added to the files array. 
*/

// if (['antivirus', 'notvirus'].includes(fileName)) {
    //   files.push(file);
    // } else if (!/virus/.test(fileName) && !/malware/.test(fileName)) {
    //   files.push(file);
    // }

function removeVirus(strFiles) {
  let pcFiles = 'PC Files:';
  let virusFreeFiles = []

  let filesArr = strFiles.split(/[:,]/g).slice(1);

  filesArr.forEach(file => {
    let fileName = file.split('.')[0].trim();

    if (fileName.endsWith('antivirus') || fileName.endsWith('notvirus')) {
      virusFreeFiles.push(file);
    } else if (!fileName.endsWith('malware') && !fileName.endsWith('virus')) {
      virusFreeFiles.push(file);
    }
  })

  if (virusFreeFiles.length === 0) {
    return pcFiles + ' Empty';
  }
  return pcFiles + virusFreeFiles.join(',');
}

console.log(removeVirus("PC Files: spotifysetup.exe, virus.exe, dog.jpg")); 
// ➞ "PC Files: spotifysetup.exe, dog.jpg"

console.log(removeVirus("PC Files: antivirus.exe, cat.pdf, lethalmalware.exe, dangerousvirus.exe ")) 
// ➞ "PC Files: antivirus.exe, cat.pdf"

console.log(removeVirus("PC Files: notvirus.exe, funnycat.gif"))
// ➞ "PC Files: notvirus.exe, funnycat.gif")

console.log(removeVirus("PC Files: virus.exe, bestmalware.exe, memzvirus.exe"))
//  "PC Files: Empty"
