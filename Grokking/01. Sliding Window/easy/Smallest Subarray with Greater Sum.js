function smallestSubarrayWithGreaterSum(arr, s) {
  let smallestSubarrayLength = Infinity;
  let start = 0;
  let sum = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    while (sum >= s) {
      smallestSubarrayLength = Math.min(smallestSubarrayLength, end - start + 1);
      sum -= arr[start];
      start++;
    }
  }

  return smallestSubarrayLength === Infinity ? 0 : smallestSubarrayLength;
}

console.log(smallestSubarrayWithGreaterSum([2, 1, 5, 2, 3, 2], 7));
console.log(smallestSubarrayWithGreaterSum([2, 1, 5, 2, 8], 7));
console.log(smallestSubarrayWithGreaterSum([3, 4, 1, 1, 6], 8));

/*

  Time Complexity:
  The time complexity of the above algorithm will be O(N). The outer for loop runs for all elements, and the inner while loop processes each element only once; therefore, the time complexity of the algorithm will be O(N+N), which is asymptotically equivalent to O(N).

  Space Complexity:
  The algorithm runs in constant space O(1).

*/
