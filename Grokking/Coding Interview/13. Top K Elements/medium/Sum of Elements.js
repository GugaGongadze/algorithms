const find_sum_of_elements = function (nums, k1, k2) {
  nums.sort((a, b) => a - b);

  let between_arr = nums.slice(k1, k2 - 1);

  return between_arr.reduce((acc, curr) => acc + curr, 0);
};

console.log(
  `Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements(
    [1, 3, 12, 5, 15, 11],
    3,
    6
  )}`
);
console.log(
  `Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements(
    [3, 5, 8, 7],
    1,
    4
  )}`
);
