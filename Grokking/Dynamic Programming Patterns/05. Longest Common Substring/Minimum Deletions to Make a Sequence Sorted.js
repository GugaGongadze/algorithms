const findMinimumDeletions = function (nums) {
  const dp = new Array(nums.length).fill(0);

  dp[0] = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    } else {
      dp[i] = dp[i - 1];
    }
  }

  return dp[dp.length - 1];
};

console.log(findMinimumDeletions([4, 2, 3, 6, 10, 1, 12]));
console.log(findMinimumDeletions([-4, 10, 3, 7, 15]));
console.log(findMinimumDeletions([3, 2, 1, 0]));
