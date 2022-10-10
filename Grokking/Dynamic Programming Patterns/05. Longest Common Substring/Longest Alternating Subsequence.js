const findLASLength = function (nums) {
  if (nums.length < 2) return 0;
  if (nums.length === 2) return 2;

  const memo = [];

  function findLASLengthRecursive(nums, idx, alt) {
    const curr = nums[idx];
    const prev = nums[idx - 1];

    if (idx === nums.length) return 0;

    memo[idx] = memo[idx] || [];

    if (memo[idx][alt]) return memo[idx][alt];

    if ((curr > prev && alt) || (curr < prev && !alt)) {
      memo[idx][alt] = 1 + findLASLengthRecursive(nums, idx + 1, !alt);
    } else {
      memo[idx][alt] = findLASLengthRecursive(nums, idx + 1, alt);
    }

    return memo[idx][alt];
  }

  return 2 + findLASLengthRecursive(nums, 2, nums[0] > nums[1]);
};

const findLASLengthBottomUp = (nums) => {
  if (nums.length < 2) return 0;
  if (nums.length === 2) return 2;

  let alt = nums[0] > nums[1];
  let counter = 2;

  let i = 2;

  while (i < nums.length) {
    let curr = nums[i];
    let prev = nums[i - 1];

    if ((curr > prev && alt) || (curr < prev && !alt)) {
      counter++;
      alt = !alt;
    }

    i++;
  }

  return counter;
};

console.log(findLASLengthBottomUp([1, 2, 3, 4])); // 2
console.log(findLASLengthBottomUp([3, 2, 1, 4])); // 3
console.log(findLASLengthBottomUp([1, 3, 2, 4])); // 4
