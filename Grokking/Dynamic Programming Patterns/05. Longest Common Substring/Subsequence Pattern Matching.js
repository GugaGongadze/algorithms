const findSPMCount = function (str, pat) {
  const dp = new Array(pat.length + 1)
    .fill(0)
    .map(() => new Array(str.length + 1).fill(0));

  for (let i = 0; i <= str.length; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i <= pat.length; i++) {
    for (let j = 1; j <= str.length; j++) {
      if (pat[i - 1] === str[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }

  return dp[pat.length][str.length];
};

console.log(findSPMCount('baxmx', 'ax'));
console.log(findSPMCount('tomorrow', 'tor'));
