const findTargetSubsets = function (nums, s) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return Math.abs(nums[0]) === Math.abs(s) ? 1 : 0;

  const [currNum] = nums;

  return (
    findTargetSubsets(nums.slice(1), s - currNum) +
    findTargetSubsets(nums.slice(1), s - currNum * -1)
  );
};

const findTargetSubsetsMemo = function (nums, s) {
  const memo = {};

  const findTargetSubsetsRecursive = function (nums, s, idx) {
    if (idx === nums.length) return 0;
    if (idx === nums.length - 1) return Math.abs(nums[idx]) === Math.abs(s) ? 1 : 0;

    const currNum = nums[idx];

    memo[idx] = memo[idx] || [];
    memo[idx + 1] = memo[idx + 1] || [];

    const pos =
      memo[idx + 1][s - currNum] ||
      findTargetSubsetsRecursive(nums, s - currNum, idx + 1);

    const neg =
      memo[idx + 1][s - currNum * -1] ||
      findTargetSubsetsRecursive(nums, s - currNum * -1, idx + 1);

    return pos + neg;
  };

  return findTargetSubsetsRecursive(nums, s, 0);
};

const findTargetSubsetsBottomUp = (nums, s) => {
  const dp = new Array(s + 1).fill(0);

  dp[0] = 1;

  for (let i = 1; i <= s; i++) {
    dp[i] = nums[0] === i ? 1 : 0;
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = s; j >= 0; j--) {
      if (j >= nums[i]) {
        dp[j] += dp[j - nums[i]];
      }

      if (j >= nums[i] * -1) {
        if (dp[j - nums[i] * -1]) {
          dp[j] += dp[j - nums[i] * -1];
        }
      }
    }
  }

  return dp[s];
};

console.log(`Count of Target sum is: ---> ${findTargetSubsetsBottomUp([1, 1, 2, 3], 1)}`);
console.log(`Count of Target sum is: ---> ${findTargetSubsetsBottomUp([1, 2, 7, 1], 9)}`);
