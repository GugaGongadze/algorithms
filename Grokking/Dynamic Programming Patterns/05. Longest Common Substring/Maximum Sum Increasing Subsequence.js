const findLISLengthBottomUp = (nums) => {
  const dp = Array(nums.length).fill(0);
  dp[0] = nums[0];

  let maxLength = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i];

    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && dp[i] < dp[j] + nums[i]) {
        dp[i] = dp[j] + nums[i];
      }
    }
    maxLength = Math.max(maxLength, dp[i]);
  }
  return maxLength;
};

console.log(
  `Length of Longest Increasing Subsequence: ---> ${findLISLengthBottomUp([
    4, 2, 3, 6, 10, 1, 12,
  ])}`
);
console.log(
  `Length of Longest Increasing Subsequence: ---> ${findLISLengthBottomUp([
    -4, 10, 3, 7, 15,
  ])}`
);
