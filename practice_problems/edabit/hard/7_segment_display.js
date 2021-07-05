"use strict";

function longest7SegmentWord(wordArray) {
  const validWords = wordArray.filter(word => !/[kmvwx]/gi.test(word));
  return validWords.sort((a, b) => b.length - a.length)[0] || '';
}

longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"]); // "parental"
longest7SegmentWord(["coding", "crackers", "edabit", "celebration"]); // "celebration")
longest7SegmentWord(["velocity", "mackerel", "woven", "kingsmen"]); // ""
longest7SegmentWord(["embarrassment", "perceive", "front"]); // "front"
longest7SegmentWord(["truck", "accessible", "undermine", "unique", "tear", "cat", "avenue", "labour", "goat", "dance", "rise", "scale"]); // "accessible"
longest7SegmentWord(["act", "adjust", "proud", "battery", "tear", "beautiful", "avenue", "thoughtful", "victory", "mobile", "straight"]); // "thoughtful"
longest7SegmentWord(["fair", "tear", "truck"]); // "fair"
longest7SegmentWord(["scale", "pass", "act", "sector", "vain", "scale"]); // "sector"
longest7SegmentWord(["vegetarian", "unique", "sensitivity", "goat", "nature", "attract", "suntan", "mobile", "pillow", "economist", "arrest", "galaxy", "proud", "proud"]); // "attract"
longest7SegmentWord(["vat", "suntan", "murder", "dance", "course", "institution"]); // "institution"
longest7SegmentWord(["adjust", "garlic", "preoccupation", "nature", "garlic", "undermine", "pavement", "payment", "fair", "twin", "expertise", "pillow", "dance", "economist", "establish", "nervous", "sector"]); // "preoccupation"