let findLPSLength = function (st) {
  const memo = {};
  function findLPSLengthRecursive(st, startIndex, endIndex) {
    if (startIndex > endIndex) return 0;

    // every sequence with one element is a palindrome of length 1
    if (startIndex === endIndex) return 1;

    memo[startIndex] = memo[startIndex] || [];

    if (memo[startIndex][endIndex]) return memo[startIndex][endIndex];

    // case 1: elements at the beginning and the end are the same
    if (st[startIndex] === st[endIndex]) {
      memo[startIndex][endIndex] =
        2 + findLPSLengthRecursive(st, startIndex + 1, endIndex - 1);
      return memo[startIndex][endIndex];
    }

    // case 2: skip one element either from the beginning or the end
    let c1 = findLPSLengthRecursive(st, startIndex + 1, endIndex);
    let c2 = findLPSLengthRecursive(st, startIndex, endIndex - 1);

    memo[startIndex][endIndex] = Math.max(c1, c2);
    return memo[startIndex][endIndex];
  }

  return findLPSLengthRecursive(st, 0, st.length - 1);
};

const findLPSLengthBottomUp = (st) => {
  // dp[i][j] stores the length of LPS from index 'i' to index 'j'
  var dp = Array(st.length)
    .fill(0)
    .map(() => Array(st.length).fill(0));

  // every sequence with one element is a palindrome of length 1
  for (let i = 0; i < st.length; i++) {
    dp[i][i] = 1;
  }

  for (let startIndex = st.length - 1; startIndex >= 0; startIndex--) {
    for (let endIndex = startIndex + 1; endIndex < st.length; endIndex++) {
      // case 1: elements at the beginning and the end are the same
      if (st.charAt(startIndex) == st.charAt(endIndex)) {
        dp[startIndex][endIndex] = 2 + dp[startIndex + 1][endIndex - 1];
      } else {
        // case 2: skip one element either from the beginning or the end
        dp[startIndex][endIndex] = Math.max(
          dp[startIndex + 1][endIndex],
          dp[startIndex][endIndex - 1]
        );
      }
    }
  }
  return dp[0][st.length - 1];
};

console.log('Length of LPS ---> ' + findLPSLength('abdbca'));
console.log('Length of LPS ---> ' + findLPSLength('cddpd'));
console.log('Length of LPS ---> ' + findLPSLength('pqr'));
