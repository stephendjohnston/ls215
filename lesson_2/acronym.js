// regex to split string by non-word characters, in this instance we need
// to split by these characters: , : - as well as spaces.
// Use of the + quantifier lets us match spots where there one or more
// consecutive appearances of these characters.

function acronym(string) {
  return string.split(/\W+/g)
               .map(word => word[0].toUpperCase())
               .join('');
}

// OR

function acronym(string) {
 return string.replace(/-/g, ' ')
              .split(' ')
              .map(word => word[0].toUpperCase())
              .join('');
}

acronym('Portable Network Graphics');                  // "PNG"
acronym('First In, First Out');                        // "FIFO"
acronym('PHP: HyperText Preprocessor');                // "PHP"
acronym('Complementary metal-oxide semiconductor');    // "CMOS"
acronym('Hyper-text Markup Language');                 // "HTML"