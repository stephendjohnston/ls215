/*
- Split the text into an array of words
  - split on empty spaces and newlines eg. \n
- iterate of over the array of words on check to see if the current word
is included in the positive or negative list.
- add word to positive list if positive or to negative list if negative
- do nothing if the word is neutral.
...
*/

let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

// Solution 2

function sentiment(text) {
  let sentiments = {
    positive: [], posSentiment: 'Positive',
    negative: [], negSentiment: 'Negative', 
    neutralSentiment: 'Neutral',
  };
  let cleanTextArray = cleanText(text);

  filterSentiments(cleanTextArray, sentiments);
  let theSentiment = determineSentiment(sentiments);
  logSentiment(sentiments, theSentiment);
}

function cleanText(text) {
  return text.replace(/(\s|\W)/g, ' ')  // replaces any whitespace characters and non-word characters with spaces
             .split(/ +/g);  // splits text on 1 or more consecutive spaces
}

function logSentiment(sentiments, theSentiment) {
  let positiveWords = sentiments.positive;
  let negativeWords = sentiments.negative;

  console.log(`There are ${positiveWords.length} positive words in the text.`);
  console.log(`Positive sentiments: ${positiveWords.join(', ')}`);
  console.log(' ');
  console.log(`There are ${negativeWords.length} negative words in the text.`);
  console.log(`Negative sentiments: ${negativeWords.join(', ')}`);
  console.log(' ');
  console.log(`The sentiment of the text is ${theSentiment}.`);
}

function filterSentiments(textArray, sentiments) {
  textArray.forEach(word => {
    if (positiveWords.includes(word)) {
      sentiments.positive.push(word);
    } else if (negativeWords.includes(word)) {
      sentiments.negative.push(word);
    }
  });
}

function determineSentiment(sentiments) {
  let positiveScore = sentiments.positive.length;
  let negativeScore = sentiments.negative.length;

  if (positiveScore > negativeScore) {
    return sentiments.posSentiment;
  } else if (positiveScore < negativeScore) {
    return sentiments.negSentiment;
  }
  return sentiments.neutralSentiment;
}

// Solution 1:

function sentiment(text) {
  let positiveArray = [];
  let negativeArray = [];
  let cleanTextArray = cleanText(text);

  cleanTextArray.forEach(word => {
    if (positiveWords.includes(word)) {
      positiveArray.push(word);
    } else if (negativeWords.includes(word)) {
      negativeArray.push(word);
    }
  });

  let sentimentCharge = determineSentiment(positiveArray, negativeArray);
  sentimentOutput(positiveArray, negativeArray, sentimentCharge);
}

function cleanText(text) {
  return text.replace(/(\s|\W)/g, ' ')
             .split(/ +/g);
}

function sentimentOutput(positives, negatives, sentiment) {
  console.log(`There are ${positives.length} positive words in the text.`);
  console.log(`Positive sentiments: ${positives.join(', ')}`);
  console.log(' ');
  console.log(`There are ${negatives.length} negative words in the text.`);
  console.log(`Negative sentiments: ${negatives.join(', ')}`);
  console.log(' ');
  console.log(`The sentiment of the text is ${sentiment}`);
}

function determineSentiment(positives, negatives) {
  if (positives.length > negatives.length) {
    return 'Positive';
  } else if (positives.length < negatives.length) {
    return 'Negative';
  }
  return 'Neutral';
}

sentiment(textExcerpt);

// LS Solution:

function sentiment(text) {
  let wordList = text.toLowerCase().match(/[a-z']+/g);

  let positives = wordList.filter(word => positiveWords.indexOf(word) >= 0);
  let negatives = wordList.filter(word => negativeWords.indexOf(word) >= 0);

  console.log('There are ' + String(positives.length) + ' positive words in the text.');
  console.log('Positive sentiments: ' + positives.join(', '));
  console.log('');
  console.log('There are ' + String(negatives.length) + ' negative words in the text.');
  console.log('Negative sentiments: ' + negatives.join(', '));
  console.log('');

  let textSentiment;
  if (positives.length > negatives.length) {
    textSentiment = 'Positive';
  } else if (positives.length < negatives.length) {
    textSentiment = 'Negative';
  } else {
    textSentiment = 'Neutral';
  }

  console.log('The sentiment of the text is ' + textSentiment + '.');
}

// console output

// There are 5 positive words in the text.
// Positive sentiments: fortune, dream, respect, love, resolution

// There are 6 negative words in the text.
// Negative sentiments: die, heartache, die, death, weary, death

// The sentiment of the text is Negative.