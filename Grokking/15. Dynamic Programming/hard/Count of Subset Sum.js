const traverse = (dp, nums, sum, idx) => {
  if (sum < 0) return 0;
  if (sum === 0) return 1;

  if (idx === nums.length - 1) {
    let num = nums[nums.length - 1];
    return num === sum ? 1 : 0;
  }

  if (!dp[idx]) {
    dp[idx] = [];
  }

  if (!dp[idx + 1]) {
    dp[idx + 1] = [];
  }

  let including =
    dp[idx + 1][sum] === undefined ? traverse(dp, nums, sum, idx + 1) : dp[idx + 1][sum];
  let excluding =
    dp[idx + 1][sum - nums[idx]] === undefined
      ? traverse(dp, nums, sum - nums[idx], idx + 1)
      : dp[idx + 1][sum - nums[idx]];

  dp[idx + 1][sum] = including;
  dp[idx + 1][sum - nums[idx]] = excluding;
  dp[idx] = including + excluding;

  return dp[idx];
};

const countSubsets = function (nums, sum) {
  let dp = {};
  return traverse(dp, nums, sum, 0);
};

const countSubsets2 = function (num, sum) {
  const dp = Array(sum + 1).fill(0);
  dp[0] = 1;

  // with only one number, we can form a subset only when the required sum is equal to its value
  for (let s = 1; s <= sum; s++) {
    dp[s] = num[0] == s ? 1 : 0;
  }

  // process all subsets for all sums
  for (let i = 1; i < num.length; i++) {
    for (let s = sum; s >= 0; s--) {
      if (s >= num[i]) {
        dp[s] += dp[s - num[i]];
      }
      console.log(dp);
    }
  }

  return dp[sum];
};

// console.log(`Count of subset sum is: ---> ${countSubsets2([1, 1, 2, 3], 4)}`);
console.log(`Count of subset sum is: ---> ${countSubsets2([1, 2, 7, 1, 5], 9)}`);
