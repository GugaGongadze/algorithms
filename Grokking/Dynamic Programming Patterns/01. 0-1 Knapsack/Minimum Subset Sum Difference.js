const partition = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  return Math.abs(nums[0] - partition(nums.slice(1)));
};

////////////////////////////////////////////////////////////////////////////////////

const traverse = (nums, idx) => {
  if (nums.length === idx) return 0;
  if (nums.length === idx + 1) return nums[idx];

  return Math.abs(nums[idx] - traverse(nums, idx + 1));
};

const partition2 = (nums) => {
  return traverse(nums, 0);
};

////////////////////////////////////////////////////////////////////////////////////

const partitionTopDown = (nums) => {
  const memo = {};

  const traverse = (nums, idx) => {
    if (nums.length === idx) return 0;
    if (nums.length === idx + 1) return nums[idx];

    memo[idx + 1] = memo[idx + 1] || traverse(nums, idx + 1);
    memo[idx] = Math.abs(nums[idx] - memo[idx + 1]);

    return memo[idx];
  };

  return traverse(nums, 0);
};

const partitionBottomUp = (nums) => {
  const dp = new Array(nums).fill(0);

  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    if (dp[i + 1] === undefined) {
      dp[i] = num;
    } else {
      dp[i] = Math.abs(num - dp[i + 1]);
    }
  }

  return dp[0];
};

console.log(partitionBottomUp([1, 2, 3, 9])); // 3
console.log(partitionBottomUp([1, 2, 7, 1, 5])); // 0
console.log(partitionBottomUp([1, 3, 100, 4])); // 92
