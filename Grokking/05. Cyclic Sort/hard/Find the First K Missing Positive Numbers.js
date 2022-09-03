const find_first_k_missing_positive = function (nums, k) {
  missingNumbers = [];

  let i = 0;

  while (i < nums.length) {
    let j = nums[i] - 1;

    if (nums[i] <= 0 || nums[i] > nums.length || j === i || nums[i] === nums[j]) {
      i++;
      continue;
    }

    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  let count = 0;
  let missing = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - 1 !== i) {
      missingNumbers.push(i + 1);
      count++;

      if (count === k) return missingNumbers;
    }

    missing = Math.max(missing, nums[i]);
  }

  // pad left overs
  while (count < k) {
    missingNumbers.push(missing + 1);
    missing++;
    count++;
  }

  return missingNumbers;
};

console.log(find_first_k_missing_positive([3, -1, 4, 5, 5], 3)); // [1, 2, 6]
console.log(find_first_k_missing_positive([2, 3, 4], 3)); // [1, 5, 6]
console.log(find_first_k_missing_positive([-2, -3, 4], 2)); // [1, 2]
