function palindromicPartitioning(str) {
  const dp = [];
  const dpIsPalindrome = [];

  function isPalindrome(st, x, y) {
    dpIsPalindrome[x] = dpIsPalindrome[x] || [];
    if (typeof dpIsPalindrome[x][y] === 'undefined') {
      dpIsPalindrome[x][y] = true;
      let i = x,
        j = y;
      while (i <= j) {
        if (st[i++] != st[j--]) {
          dpIsPalindrome[x][y] = false;
          break;
        }
        // use memoization to find if the remaining string is a palindrome
        dpIsPalindrome[i] = dpIsPalindrome[i] || [];
        if (i < j && typeof dpIsPalindrome[i][j] !== 'undefined') {
          dpIsPalindrome[x][y] = dpIsPalindrome[i][j];
          break;
        }
      }
    }
    return dpIsPalindrome[x][y];
  }

  function palindromicPartitioningRecursive(str, start, end) {
    if (start > end || isPalindrome(str, start, end)) return 0;

    let minimumCuts = end - start;
    for (let i = start; i <= end; i++) {
      if (isPalindrome(str, start, i)) {
        // we can cut here as we have a palindrome from 'start' to 'i'
        minimumCuts = Math.min(
          minimumCuts,
          1 + palindromicPartitioningRecursive(str, i + 1, end)
        );
      }
    }
    return minimumCuts;
  }

  return palindromicPartitioningRecursive(str, 0, str.length - 1);
}

const findMPPCuts = function (st) {
  // isPalindrome[i][j] will be 'true' if the string from index 'i' to index 'j' is a palindrome
  const isPalindrome = Array(st.length)
    .fill(false)
    .map(() => Array(st.length).fill(false));

  // every string with one character is a palindrome
  for (let i = 0; i < st.length; i++) {
    isPalindrome[i][i] = true;
  }

  // populate isPalindrome table
  for (let startIndex = st.length - 1; startIndex >= 0; startIndex--) {
    for (let endIndex = startIndex + 1; endIndex < st.length; endIndex++) {
      if (st.charAt(startIndex) == st.charAt(endIndex)) {
        // if it's a two character string or if the remaining string is a palindrome too
        if (endIndex - startIndex == 1 || isPalindrome[startIndex + 1][endIndex - 1]) {
          isPalindrome[startIndex][endIndex] = true;
        }
      }
    }
  }

  // now lets populate the second table, every index in 'cuts' stores the minimum cuts needed
  // for the substring from that index till the end
  const cuts = Array(st.length).fill(0);
  for (let startIndex = st.length - 1; startIndex >= 0; startIndex--) {
    let minCuts = st.length; // maximum cuts
    for (let endIndex = st.length - 1; endIndex >= startIndex; endIndex--) {
      if (isPalindrome[startIndex][endIndex]) {
        // we can cut here as we got a palindrome
        // also we dont need any cut if the whole substring is a palindrome
        minCuts =
          endIndex == st.length - 1 ? 0 : Math.min(minCuts, 1 + cuts[endIndex + 1]);
      }
    }
    cuts[startIndex] = minCuts;
  }

  return cuts[0];
};

console.log(`Minimum palindrome partitions ---> ${findMPPCuts('abdbca')}`);
console.log(`Minimum palindrome partitions ---> ${findMPPCuts('cdpdd')}`);
console.log(`Minimum palindrome partitions ---> ${findMPPCuts('pqr')}`);
console.log(`Minimum palindrome partitions ---> ${findMPPCuts('pp')}`);
console.log(`Minimum palindrome partitions ---> ${findMPPCuts('madam')}`);

console.log(palindromicPartitioning('abdbca')); // 3
console.log(palindromicPartitioning('cddpd')); // 2
console.log(palindromicPartitioning('pqr')); // 2
console.log(palindromicPartitioning('pp')); // 0
