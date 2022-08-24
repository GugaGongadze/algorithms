function smallestWindowContainingSubstring(str, pattern) {
  const patternMap = pattern.split('').reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: curr in acc ? acc[curr] + 1 : 1,
    };
  }, {});

  let match = 0;
  let start = 0;

  for (let end = 0; end < str.length; end++) {
    let rightEl = str[end];
    if (rightEl in patternMap) {
      patternMap[rightEl] -= 1;
      match++;
    }

    if (patternMap[rightEl] < 0) {
      while (start < end) {
        let leftEl = str[start];
        if (leftEl in patternMap) {
          patternMap[leftEl] += 1;
          match--;
        }

        start++;
      }
    }

    if (match === pattern.length) {
      return str.slice(start, end + 1);
    }
  }

  return '';
}

console.log(smallestWindowContainingSubstring('aabdec', 'abc')); // "abdec"
console.log(smallestWindowContainingSubstring('aabdec', 'abac')); // "aabdec"
console.log(smallestWindowContainingSubstring('abdbca', 'abc')); // "bca"
console.log(smallestWindowContainingSubstring('adcad', 'abc')); // ""
