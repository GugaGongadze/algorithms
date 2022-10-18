/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  if (nums.length === 1) return nums;

  let left = 0;
  let right = left + 1;

  while (left < nums.length) {
    if (nums[left] === 0) {
      left++;
      right = left + 1;
      continue;
    }

    if (nums[right] === 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right = left + 1;
      continue;
    }

    if (nums[right] < nums[left]) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right++;
      continue;
    }

    if (right === nums.length) {
      left++;
      right = left + 1;
    } else {
      right++;
    }
  }

  return nums;
};

console.log(betterSort([2, 0, 2, 1, 1, 0])); // [0,0,1,1,2,2]
console.log(betterSort([2, 0, 1])); // [0,1,2]
console.log(betterSort([1, 2, 2, 2, 2, 0, 0, 0, 1, 1])); // [0,1,2]
