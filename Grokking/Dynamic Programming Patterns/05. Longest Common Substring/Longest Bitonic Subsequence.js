const findLBSLength = function (nums) {
  if (nums.length < 3) return 0;

  const memo = [];

  function findLBSLengthRecursive(nums, start, end) {
    const n1 = nums[start];
    const next = nums[start + 1];

    const n2 = nums[end];
    const prev = nums[end - 1];

    if (next === prev) {
      if (n1 > next && next > n2) return 3;
      if (n1 < next && next < n2) return 3;

      return 0;
    }

    memo[start] = memo[start] || [];

    if (memo[start][end]) return memo[start][end];

    if (n1 < next && n2 < prev) {
      memo[start][end] = 2 + findLBSLengthRecursive(nums, start + 1, end - 1);
      return memo[start][end];
    }

    let l1 = 0;
    if (n1 > next) {
      l1 = findLBSLengthRecursive(nums, start + 1, end);
    }

    let l2 = 0;
    if (n2 > prev) {
      l2 = findLBSLengthRecursive(nums, start, end - 1);
    }

    memo[start][end] = Math.max(l1, l2);

    return memo[start][end];
  }

  return findLBSLengthRecursive(nums, 0, nums.length - 1);
};

console.log(findLBSLength([4, 2, 3, 6, 10, 1, 12]));
console.log(findLBSLength([4, 2, 5, 9, 7, 6, 10, 3, 1]));
