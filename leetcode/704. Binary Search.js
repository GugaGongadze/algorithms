var search = function (nums, target) {
  function binarySearch(nums, target, start, end) {
    if (start > end) return -1;

    const midIdx = Math.floor((end + start) / 2);
    const curr = nums[midIdx];

    if (curr === target) return midIdx;

    if (curr > target) return binarySearch(nums, target, start, midIdx - 1);

    return binarySearch(nums, target, midIdx + 1, end);
  }

  return binarySearch(nums, target, 0, nums.length - 1);
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
