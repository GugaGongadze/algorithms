let canPartitionMemo = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;

  const memo = {};

  const traverse = (nums, target, idx) => {
    if (target === 0) return true;
    if (nums.length === 0 || idx >= target.length) return false;

    const [currentNum] = nums;

    if (!memo[idx + 1]) {
      memo[idx + 1] = [];
    }

    if (currentNum <= target) {
      if (memo[idx + 1][target - currentNum] === undefined) {
        memo[idx + 1][target - currentNum] = traverse(nums, target - currentNum, idx + 1);
      }

      return memo[idx + 1][target - currentNum];
    }

    if (memo[idx + 1][target] === undefined) {
      memo[idx + 1][target] = traverse(nums, target, idx + 1);
    }

    return memo[idx + 1][target];
  };

  return traverse(nums, target, 0);
};

const canPartitionBottomUp = (nums) => {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;

  const dp = new Array(nums.length).fill(0).map(() => new Array(target + 1).fill(false));

  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = true;
  }

  for (let i = 0; i < target + 1; i++) {
    dp[0][i] = nums[0] === i;
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = 1; j < target + 1; j++) {
      dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]] || false;
    }
  }

  return dp[nums.length - 1][target];
};

console.log(canPartitionBottomUp([1, 2, 3, 4])); // True
console.log(canPartitionBottomUp([1, 1, 3, 4, 7])); // True
console.log(canPartitionBottomUp([2, 3, 4, 6])); // False
