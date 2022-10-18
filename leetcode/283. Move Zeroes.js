/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length < 2) return nums;

  let low = 0;
  let high = low + 1;

  while (high < nums.length) {
    if (nums[low] === 0 && nums[high] === 0) {
      high++;
      continue;
    }

    if (nums[low] === 0) {
      [nums[low], nums[high]] = [nums[high], nums[low]];
    }

    low++;
    high = low + 1;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
