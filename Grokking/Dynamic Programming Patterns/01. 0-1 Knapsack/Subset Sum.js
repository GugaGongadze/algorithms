const canPartitionTopDown = function (nums, sum) {
  const memo = {};

  const traverse = (nums, target, idx) => {
    if (target === 0) return true;
    if (nums.length === 0 || idx >= nums.length) return false;

    const currentNum = nums[idx];

    memo[idx] = memo[idx] || [];

    if (memo[idx][target] === undefined) {
      if (currentNum <= target) {
        memo[idx][target] = traverse(nums, target - currentNum, idx + 1);
      } else {
        memo[idx][target] = traverse(nums, target, idx + 1);
      }
    }

    return memo[idx][target];
  };

  return traverse(nums, sum, 0);
};

const canPartitionBottomUp = (nums, sum) => {
  const dp = new Array(nums.length).fill(false).map(() => new Array(sum + 1).fill(false));

  nums.forEach((_, i) => {
    dp[i][0] = true;
  });

  for (let i = 0; i < sum + 1; i++) {
    dp[0][i] = nums[0] === i;
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = 1; j <= sum; j++) {
      if (dp[i - 1][j]) {
        dp[i][j] = dp[i - 1][j];
      } else if (j >= nums[i]) {
        dp[i][j] = dp[i - 1][j - nums[i]];
      }
    }
  }

  return dp[nums.length - 1][sum];
};

const canPartitionBottomUpSpaceOptimized = (nums, sum) => {
  const dp = new Array(sum + 1).fill(false);

  dp[0] = true;

  for (let i = 1; i < sum; i++) {
    dp[i] = nums[0] === i;
  }

  // process all subsets for all sums
  for (let i = 1; i < nums.length; i++) {
    for (let j = sum; j >= 0; j--) {
      if (!dp[j] && j >= nums[i]) {
        dp[j] = dp[j - nums[i]];
      }
    }
  }

  return dp[nums.length - 1][sum];
};

// console.log(canPartitionBottomUpSpaceOptimized([1, 2, 3, 7], 6)); // True
// console.log(canPartitionBottomUpSpaceOptimized([1, 2, 7, 1, 5], 10)); // True
console.log(canPartitionBottomUpSpaceOptimized([1, 3, 4, 8], 6)); // False
