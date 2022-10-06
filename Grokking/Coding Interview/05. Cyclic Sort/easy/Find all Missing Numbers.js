const swap = (arr, idx1, idx2) => {
  let temp = arr[idx1];

  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

const find_missing_numbers = function (nums) {
  missingNumbers = [];

  let i = 0;

  while (i < nums.length) {
    let num = nums[i];

    if (num - 1 === i) {
      i++;
    } else if (num - 1 < i) {
      swap(nums, i, num - 1);
      i++;
    } else {
      // avoid cycle
      if (nums[i] === nums[num - 1]) {
        i++;
      } else {
        swap(nums, i, num - 1);
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];

    if (el - 1 !== i) {
      missingNumbers.push(i + 1);
    }
  }

  return missingNumbers;
};

console.log(find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1])); // 4, 6, 7
console.log(find_missing_numbers([2, 4, 1, 2])); // 3
console.log(find_missing_numbers([2, 3, 2, 1])); // 4
