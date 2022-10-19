var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];

  function maxSubArrayRecursive(nums, idx) {
    if (idx >= nums.length) return [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

    const curr = nums[idx];

    const [incl, max] = maxSubArrayRecursive(nums, idx + 1);

    return [Math.max(incl + curr, curr), Math.max(curr, incl, max)];
  }

  return Math.max(...maxSubArrayRecursive(nums, 0));
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
console.log(maxSubArray([-2, -1])); // -1
