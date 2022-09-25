function find_single_numbers(nums) {
  // XOR of all numbers will leave XOR of single numbers
  let n1xn2 = 0;

  for (let i = 0; i < nums.length; i++) {
    n1xn2 = n1xn2 ^ nums[i];
  }

  let rightmost_set_bit = 1;
  while ((rightmost_set_bit & n1xn2) === 0) {
    rightmost_set_bit = rightmost_set_bit << 1;
  }

  let num1 = 0;
  let num2 = 0;

  nums.forEach((num) => {
    if ((num & rightmost_set_bit) !== 0) {
      // the bit is set
      num1 ^= num;
    } else {
      // the bit is not set
      num2 ^= num;
    }
  });
  return [num1, num2];
}

console.log(`Single numbers are: ${find_single_numbers([1, 4, 2, 1, 3, 5, 6, 2, 3, 5])}`);
console.log(`Single numbers are: ${find_single_numbers([2, 1, 3, 2])}`);
