const findMinOperations = function (s1, s2) {
  function recursive(s1, s2, i1, i2) {
    if (i1 > s1.length && i2 > s2.length) return 0;

    if (s1[i1] === s2[i2]) return recursive(s1, s2, i1 + 1, i2 + 1);
    if (!s1[i1] || !s1[i2]) return 1;

    const withInsertion = recursive(s1, s2, i1, i2 + 1);
    const withDeletion = recursive(s1, s2, i1 + 1, i2);
    const withReplace = recursive(s1, s2, i1 + 1, i2 + 1);

    return Math.min(withInsertion, withDeletion, withReplace) + 1;
  }

  return recursive(s1, s2, 0, 0, 0);
};

console.log(findMinOperations('bat', 'but'));
console.log(findMinOperations('abdca', 'cbda'));
console.log(findMinOperations('passpot', 'ppsspqrt'));
