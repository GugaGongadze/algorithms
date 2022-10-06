let traverse = (nums, idx) => {
  if (idx === nums.length - 1) return nums[nums.length - 1];
  if (idx === nums.length - 2)
    return Math.abs(nums[nums.length - 2] - nums[nums.length - 1]);

  return Math.abs(nums[idx] - traverse(nums, idx + 1));
};

let canPartition = function (nums) {
  return traverse(nums, 0);
};

console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 3, 9])}`);
console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 7, 1, 5])}`);
console.log(`Minimum subset difference is: ---> ${canPartition([1, 3, 100, 4])}`);
