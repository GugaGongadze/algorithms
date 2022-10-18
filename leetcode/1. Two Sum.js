/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = nums.reduce((acc, curr, idx) => {
    acc[curr] = idx;
    return acc;
  }, {});

  for (let idx = 0; idx < nums.length; idx++) {
    const num = nums[idx];
    const remainder = target - num;
    const remainderIdx = map[remainder];

    if (remainder in map && idx !== remainderIdx) {
      return [idx, map[remainder]];
    }
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
