const swap = (arr, idx1, idx2) => {
  let temp = arr[idx1];

  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

const cyclic_sort = function (nums) {
  let pointer = 0;

  while (pointer < nums.length) {
    while (nums[pointer] - 1 !== pointer) {
      swap(nums, pointer, nums[pointer] - 1);
    }

    pointer++;
  }

  return nums;
};

// console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`);
// console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`);
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`);
