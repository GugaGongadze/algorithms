function countOfPalindromicSubstrings(st) {
  const memo = {};
  function findLPSLengthRecursive(st, startIndex, endIndex) {
    if (startIndex > endIndex) return 0;

    // every sequence with one element is a palindrome of length 1
    if (startIndex === endIndex) return 1;

    memo[startIndex] = memo[startIndex] || [];

    if (memo[startIndex][endIndex]) return memo[startIndex][endIndex];

    // case 1: elements at the beginning and the end are the same
    if (st[startIndex] === st[endIndex]) {
      const target =
        endIndex - startIndex - 1 + Math.floor((endIndex - startIndex - 1) / 2);
      const result = findLPSLengthRecursive(st, startIndex + 1, endIndex - 1);
      if (target === result) {
        memo[startIndex][endIndex] = result + 3;
      } else {
        memo[startIndex][endIndex] = result + 2;
      }
      return memo[startIndex][endIndex];
    }

    // case 2: skip one element either from the beginning or the end
    let c1 = findLPSLengthRecursive(st, startIndex + 1, endIndex) + 1;
    let c2 = findLPSLengthRecursive(st, startIndex, endIndex - 1) + 1;

    memo[startIndex][endIndex] = Math.max(c1, c2);

    return memo[startIndex][endIndex];
  }

  return findLPSLengthRecursive(st, 0, st.length - 1);
}

console.log(countOfPalindromicSubstrings('abdbca')); // 7
console.log(countOfPalindromicSubstrings('cddpd')); // 7
console.log(countOfPalindromicSubstrings('pqr')); // 3
