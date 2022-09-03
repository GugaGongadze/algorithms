const find_missing_number = function (nums) {
  let currSum = 0;

  nums.forEach((num) => {
    currSum += num;
  });

  let sumOfSeq = ((nums.length + 1) * nums.length) / 2;

  return sumOfSeq - currSum;
};

console.log(find_missing_number([4, 0, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));
