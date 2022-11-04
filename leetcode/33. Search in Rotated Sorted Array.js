var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  const memo = [];

  function binarySearch(nums, target, low, high) {
    if (high < low) return -1;
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) return mid;

    memo[low] = memo[low] || [];

    if (memo[low][high]) return memo[low][high];

    const idxInLeftHalf = binarySearch(nums, target, 0, mid - 1);
    const idxInRighthalf = binarySearch(nums, target, mid + 1, high);

    if (idxInLeftHalf === -1) {
      memo[low][high] = idxInRighthalf;
    } else {
      memo[low][high] = idxInLeftHalf;
    }

    return memo[low][high];
  }

  return binarySearch(nums, target, low, high);
};

console.log(
  search(
    [
      266, 267, 268, 269, 271, 278, 282, 292, 293, 298, 6, 9, 15, 19, 21, 26, 33, 35, 37,
      38, 39, 46, 49, 54, 65, 71, 74, 77, 79, 82, 83, 88, 92, 93, 94, 97, 104, 108, 114,
      115, 117, 122, 123, 127, 128, 129, 134, 137, 141, 142, 144, 147, 150, 154, 160, 163,
      166, 169, 172, 173, 177, 180, 183, 184, 188, 198, 203, 208, 210, 214, 218, 220, 223,
      224, 233, 236, 241, 243, 253, 256, 257, 262, 263,
    ],
    208
  )
); // 0
console.log(search([5, 1, 3], 5)); // 0
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1], 0)); // -1
console.log(search([5, 1, 3], 3)); // 2
