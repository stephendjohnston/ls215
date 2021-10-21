"use strict";

const template1 = "The ${adjective} brown ${noun} ${adverb} ${verb} the " +
                "${adjective} yellow ${noun}, who ${adverb} ${verb} his " +
                "${noun} and looks around."

const template2 = "The ${noun} ${verb} the ${noun}'s ${noun}.";

function madlibs(template) {
  const REPLACEMENT_WORDS = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats']
  }

  function replaceText(match) {
    const key = match.replace(/[^a-z]/g, '');
    const index = Math.floor(Math.random() * REPLACEMENT_WORDS[key].length);
    return REPLACEMENT_WORDS[key][index];
  }

  return template.replace(/\${[a-z]+}/g, replaceText);
}

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2));     // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".