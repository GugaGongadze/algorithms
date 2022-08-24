function wordsConcatenation(str, words) {
  result_indices = [];
  let wordLength = words[0].length;

  let start = 0;
  let end = wordLength - 1;

  while (end < str.length) {
    let word = str.substring(start, end + 1);
    let wordIndex = words.indexOf(word);

    if (wordIndex > -1) {
      let remainingWords = words.filter((w) => w !== word);
      let nextPossibleMatch = str.substring(start + wordLength, end + 1 + wordLength);

      if (remainingWords.includes(nextPossibleMatch)) {
        result_indices.push(start);
      }
    }

    start++;
    end++;
  }

  return result_indices;
}

console.log(wordsConcatenation('catfoxcat', ['cat', 'fox'])); // [0, 3]
console.log(wordsConcatenation('catcatfoxfox', ['cat', 'fox'])); // [3]

function find_word_concatenation(str, words) {
  if (words.length === 0 || words[0].length === 0) {
    return [];
  }

  wordFrequency = {};

  words.forEach((word) => {
    if (!(word in wordFrequency)) {
      wordFrequency[word] = 0;
    }
    wordFrequency[word] += 1;
  });

  const resultIndices = [],
    wordsCount = words.length;
  wordLength = words[0].length;

  for (i = 0; i < str.length - wordsCount * wordLength + 1; i++) {
    const wordsSeen = {};
    for (j = 0; j < wordsCount; j++) {
      next_word_index = i + j * wordLength;
      // Get the next word from the string
      word = str.substring(next_word_index, next_word_index + wordLength);
      if (!(word in wordFrequency)) {
        // Break if we don't need this word
        break;
      }

      // Add the word to the 'wordsSeen' map
      if (!(word in wordsSeen)) {
        wordsSeen[word] = 0;
      }
      wordsSeen[word] += 1;

      // no need to process further if the word has higher frequency than required
      if (wordsSeen[word] > (wordFrequency[word] || 0)) {
        break;
      }

      if (j + 1 === wordsCount) {
        // Store index if we have found all the words
        resultIndices.push(i);
      }
    }
  }

  return resultIndices;
}

console.log(find_word_concatenation('catfoxcat', ['cat', 'fox']));
console.log(find_word_concatenation('catcatfoxfox', ['cat', 'fox']));
