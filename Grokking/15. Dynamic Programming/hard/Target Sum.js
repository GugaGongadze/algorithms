const findTargetSubsets = function (nums, s) {
  if (nums.length === 0) return 0;

  let curr = nums[0];

  if (nums.length === 1) {
    let pos = curr === s ? 1 : 0;
    let neg = -1 * curr === s ? 1 : 0;

    return pos + neg;
  }

  let sum1 = curr + findTargetSubsets(nums.slice(1), s - curr);
  let sum2 = -1 * curr + findTargetSubsets(nums.slice(1), s - curr * -1);

  return sum1 + sum2;
};

console.log(`Count of Target sum is: ---> ${findTargetSubsets([1, 1, 2, 3], 1)}`);
console.log(`Count of Target sum is: ---> ${findTargetSubsets([1, 2, 7, 1], 9)}`);
