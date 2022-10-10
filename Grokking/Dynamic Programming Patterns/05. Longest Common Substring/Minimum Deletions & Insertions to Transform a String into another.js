const findMDI = function (s1, s2) {
  function findMDIRecursive(s1, s2, i1, i2, ins, del) {
    if (i1 > s1.length && i2 > s2.length) return ins + del;

    if (s1[i1] === s2[i2]) return findMDIRecursive(s1, s2, i1 + 1, i2 + 1, ins, del);

    if (s1[i1] === undefined) return ins + 1 + del;
    if (s1[i2] === undefined) return ins + del + 1;

    const withInsertion = findMDIRecursive(s1, s2, i1, i2 + 1, ins + 1, del);
    const withDeletion = findMDIRecursive(s1, s2, i1 + 1, i2, ins, del + 1);
    const withInsertionAndDeletion = findMDIRecursive(
      s1,
      s2,
      i1 + 1,
      i2 + 1,
      ins + 1,
      del + 1
    );

    return Math.min(withInsertion, withDeletion, withInsertionAndDeletion);
  }

  return findMDIRecursive(s1, s2, 0, 0, 0, 0);
};

const findMDIBottomUp = (s1, s2) => {
  const dp = new Array(s2.length + 1).fill(0).map(() => new Array(s1.length + 1).fill(0));

  for (let i = 0; i <= s1.length; i++) {
    dp[0][i] = i;
  }

  for (let i = 0; i <= s2.length; i++) {
    dp[i][0] = i;
  }

  for (let i = 1; i <= s2.length; i++) {
    for (let j = 1; j <= s1.length; j++) {
      if (s2[i - 1] === s1[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        const withInsertion = dp[i][j - 1] + 1;
        const withDeletion = dp[i - 1][j] + 1;
        const withInsertionAndDeletion = dp[i - 1][j - 1] + 2;

        dp[i][j] = Math.min(withInsertion, withDeletion, withInsertionAndDeletion);
      }
    }
  }

  return dp[s2.length][s1.length];
};

console.log(findMDIBottomUp('abc', 'fbc'));
console.log(findMDIBottomUp('abdca', 'cbda'));
console.log(findMDIBottomUp('passport', 'ppsspt'));
