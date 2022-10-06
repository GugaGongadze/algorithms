const find_duplicate = function (nums) {
  let i = 0;

  while (i < nums.length) {
    if (nums[i] - 1 === i) {
      i++;
    } else {
      if (nums[i] === nums[nums[i]]) {
        return nums[i];
      }

      let j = nums[i];

      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  return -1;
};

console.log(find_duplicate([1, 4, 4, 3, 2])); // 4
console.log(find_duplicate([2, 1, 3, 3, 5, 4])); // 3
console.log(find_duplicate([2, 4, 1, 4, 4])); // 4
