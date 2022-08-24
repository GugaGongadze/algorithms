function permutationInString(str, pattern) {
  const patternMap = pattern.split('').reduce((acc, curr) => {
    if (curr in acc) {
      return {
        ...acc,
        [curr]: (acc[curr] += 1),
      };
    }

    return {
      ...acc,
      [curr]: 1,
    };
  }, {});

  let currMap = { ...patternMap };

  for (let end = 0; end < str.length; end++) {
    let endEl = str[end];
    if (currMap[endEl] === undefined) {
      currMap = { ...patternMap };
    } else if (currMap[endEl] === 1) {
      delete currMap[endEl];
    } else {
      currMap[endEl] -= 1;
    }

    if (Object.keys(currMap).length === 0) return true;
  }

  return false;
}

console.log(permutationInString('oidbcaf', 'abc')); // true
console.log(permutationInString('odicf', 'dc')); // false
console.log(permutationInString('bcdxabcdy', 'bcdyabcdx')); // true
console.log(permutationInString('aaacb', 'abc')); // true

function find_permutation(str, pattern) {
  let windowStart = 0,
    matched = 0,
    charFrequency = {};

  for (i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }

  // Our goal is to match all the characters from the 'charFrequency' with the current window
  // try to extend the range [windowStart, windowEnd]
  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      // Decrement the frequency of matched character
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFrequency).length) {
      return true;
    }

    // Shrink the sliding window
    if (windowEnd >= pattern.length - 1) {
      leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }
  return false;
}

console.log(`Permutation exist: ${find_permutation('oidbcaf', 'abc')}`);
console.log(`Permutation exist: ${find_permutation('odicf', 'dc')}`);
console.log(`Permutation exist: ${find_permutation('bcdxabcdy', 'bcdyabcdx')}`);
console.log(`Permutation exist: ${find_permutation('aaacb', 'abc')}`);
