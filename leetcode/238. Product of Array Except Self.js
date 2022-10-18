/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let leftArr = [1];
  let leftProduct = 1;

  for (let i = 1; i < nums.length; i++) {
    leftArr[i] = leftProduct * nums[i - 1];
    leftProduct *= nums[i - 1];
  }

  let rightArr = [];
  let rightProduct = 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    rightArr[i] = rightProduct * nums[i + 1];
    rightProduct *= nums[i + 1];
  }

  rightArr.push(1);

  return rightArr.map((el, idx) => el * leftArr[idx]);
};
console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
