const find_first_smallest_missing_positive = function (nums) {
  let i = 0;

  while (i < nums.length) {
    let j = nums[i] - 1;

    if (nums[i] === nums[j]) {
      i++;
      continue;
    }

    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - 1 !== i) return i + 1;
  }

  return -1;
};

console.log(find_first_smallest_missing_positive([-3, 1, 5, 4, 2])); // 3
console.log(find_first_smallest_missing_positive([3, -2, 0, 1, 2])); // 4
console.log(find_first_smallest_missing_positive([3, 2, 5, 1])); // 4
