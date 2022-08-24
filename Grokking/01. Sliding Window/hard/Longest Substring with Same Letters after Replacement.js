function longestSubstringWithSameLettersAfterReplacement(str, k) {
  const sum = (arr) => arr.reduce((curr, acc) => acc + curr, 0);
  let longest = 0;
  let start = 0;
  let map = {};

  for (let end = 0; end < str.length; end++) {
    let baseChar = str[start];
    let currChar = str[end];

    if (currChar !== baseChar) {
      map[currChar] = map[currChar] === undefined ? 1 : map[currChar] + 1;
    }

    while (sum(Object.values(map)) > k) {
      start++;
      delete map[str[start]];
    }

    longest = Math.max(longest, end - start + 1);
  }

  return longest;
}

console.log(longestSubstringWithSameLettersAfterReplacement('aabccbb', 2)); // 5
// console.log(longestSubstringWithSameLettersAfterReplacement('abbcb', 1)); // 4
// console.log(longestSubstringWithSameLettersAfterReplacement('abccde', 1)); // 3

function length_of_longest_substring(str, k) {
  let windowStart = 0,
    maxLength = 0,
    maxRepeatLetterCount = 0,
    frequencyMap = {};

  // Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 0;
    }
    frequencyMap[rightChar] += 1;

    // we don't need to place the maxRepeatLetterCount under the below 'if', see the
    // explanation in the 'Solution' section above.
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar]);

    // Current window size is from windowStart to windowEnd, overall we have a letter which is
    // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
    // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
    // if the remaining letters are more than 'k', it is the time to shrink the window as we
    // are not allowed to replace more than 'k' letters
    if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
      leftChar = str[windowStart];
      frequencyMap[leftChar] -= 1;
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

// console.log(length_of_longest_substring('aabccbb', 2));
// console.log(length_of_longest_substring('abbcb', 1));
// console.log(length_of_longest_substring('abccde', 1));
