const findLISLength = function (nums) {
  const memo = [];

  function findLISLengthRecursive(nums, i1, i2) {
    if (nums.length < 2) return nums.length;
    if (i2 > nums.length - 1) return 1;

    memo[i1] = memo[i1] || [];

    if (memo[i1][i2]) return memo[i1][i2];

    const curr = nums[i1];
    const next = nums[i2];

    if (curr < next) return findLISLengthRecursive(nums, i1 + 1, i2 + 1) + 1;
    if (curr === next) return findLISLengthRecursive(nums, i1 + 1, i2 + 1);

    const withCurr = findLISLengthRecursive(nums, i1, i2 + 1);
    const withNext = findLISLengthRecursive(nums, i1 + 1, i2);

    memo[i1][i2] = Math.max(withCurr, withNext);

    return memo[i1][i2];
  }

  return findLISLengthRecursive(nums, 0, 1);
};

const findLISLengthBottomUp = (nums) => {
  const dp = Array(nums.length).fill(0);
  dp[0] = 1;

  let maxLength = 1;
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && dp[i] <= dp[j]) {
        dp[i] = dp[j] + 1;
        maxLength = Math.max(maxLength, dp[i]);
      }
    }
  }
  return maxLength;
};

console.log(
  `Length of Longest Increasing Subsequence: ---> ${findLISLength([
    4, 2, 3, 6, 10, 1, 12,
  ])}`
);
console.log(
  `Length of Longest Increasing Subsequence: ---> ${findLISLength([-4, 10, 3, 7, 15])}`
);
