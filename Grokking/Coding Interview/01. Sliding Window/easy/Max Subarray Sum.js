function maxSubarraySum(array, k) {
  let maxSum = 0;
  let start = 0;
  let sum = 0;

  for (let end = 0; end < array.length; end++) {
    sum += array[end];

    if (end >= k - 1) {
      maxSum = Math.max(maxSum, sum);
      sum -= array[start];
      start++;
    }
  }

  return maxSum;
}

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3));
console.log(maxSubarraySum([2, 3, 4, 1, 5], 2));

/*
  Time Complexity:

  The time complexity of the above algorithm will be O(N)

  Space Complexity:

  The algorithm runs in constant space O(1)
*/
