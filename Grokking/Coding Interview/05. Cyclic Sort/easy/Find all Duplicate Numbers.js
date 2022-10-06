const find_all_duplicates = function (nums) {
  duplicateNumbers = [];

  let i = 0;

  while (i < nums.length) {
    if (nums[i] - 1 === i) {
      i++;
      continue;
    }

    if (nums[i] === nums[nums[i] - 1]) {
      duplicateNumbers.push(nums[i]);
      i++;
      continue;
    }

    let j = nums[i] - 1;

    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  return duplicateNumbers;
};

console.log(find_all_duplicates([3, 4, 4, 5, 5])); //[4, 5]
console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3])); //[3, 5]
