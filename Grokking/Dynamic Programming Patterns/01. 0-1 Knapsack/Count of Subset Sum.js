const count_subsets = (nums, sum) => {
  if (sum === 0) return 1;

  if (nums.length === 1) return nums[0] === sum ? 1 : 0;

  const including = count_subsets(nums.slice(1), sum - nums[0]);
  const excluding = count_subsets(nums.slice(1), sum);

  return including + excluding;
};

const count_subsets_top_down = (nums, sum) => {
  const memo = {};

  const count_subsets = (nums, sum, idx) => {
    if (sum === 0) return 1;

    const currNum = nums[idx];

    if (nums.length === idx + 1) return currNum === sum ? 1 : 0;

    memo[idx] = memo[idx] || [];
    memo[idx + 1] = memo[idx + 1] || [];

    const withoutCurrNum = sum - currNum;

    memo[idx + 1][withoutCurrNum] =
      memo[idx + 1][withoutCurrNum] || count_subsets(nums, withoutCurrNum, idx + 1);

    memo[idx + 1][sum] = memo[idx + 1][sum] || count_subsets(nums, sum, idx + 1);

    memo[idx][sum] = memo[idx + 1][withoutCurrNum] + memo[idx + 1][sum];

    return memo[idx][sum];
  };

  return count_subsets(nums, sum, 0);
};

const count_subsets_bottom_up = (nums, sum) => {
  const dp = new Array(nums.length).fill(0).map(() => new Array(sum + 1).fill(0));

  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i < sum; i++) {
    dp[0][i] = nums[0] === i ? 1 : 0;
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = 1; j <= sum; j++) {
      dp[i][j] = dp[i - 1][j];

      if (j >= nums[i]) {
        dp[i][j] += dp[i - 1][j - nums[i]];
      }
    }
  }

  return dp[nums.length - 1][sum];
};

const count_subsets_bottom_up_ultimate = (nums, sum) => {
  const dp = new Array(sum + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = sum; j >= 0; j--) {
      if (j >= nums[i]) {
        dp[j] = dp[j] + dp[j - nums[i]];
      }
    }
  }

  return dp[sum];
};

console.log(count_subsets_bottom_up_ultimate([1, 1, 2, 3], 4)); // 3
console.log(count_subsets_bottom_up_ultimate([1, 2, 7, 1, 5], 9)); // 3
