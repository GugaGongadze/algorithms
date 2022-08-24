function stringAnagrams(str, pattern) {
  result_indexes = [];

  const patternMap = pattern.split('').reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: curr in acc ? acc[curr] + 1 : 1,
    };
  }, {});

  let match = 0;
  let start = 0;

  for (let end = 0; end < str.length; end++) {
    const el = str[end];

    if (el in patternMap) {
      patternMap[el] -= 1;

      // If more than necessary characters have been found
      // undo all work done and start again with updated window
      if (patternMap[el] < 0) {
        while (start < end) {
          let leftEl = str[start];
          if (leftEl in patternMap) {
            patternMap[leftEl] += 1;
          }
          start++;
          match--;
        }
      }

      if (patternMap[el] === 0) {
        match++;
      }
    }

    if (match === Object.keys(patternMap).length) {
      patternMap[str[start]] += 1;
      result_indexes.push(start);
      start++;
      match--;
    }
  }

  return result_indexes;
}

stringAnagrams('ppqp', 'pq'); // [1, 2]
stringAnagrams('abbcabc', 'abc'); // [2, 3, 4]
