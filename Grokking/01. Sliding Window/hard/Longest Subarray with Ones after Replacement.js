function longestSubarrayWithOnesAfterReplacement(arr, k) {
  let currZeroes = 0;
  let longest = 0;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    if (arr[end] === 0) {
      currZeroes++;
    }

    if (currZeroes > k) {
      if (arr[start] === 0) {
        currZeroes--;
      }
      start++;
    }

    longest = Math.max(longest, end - start + 1);
  }

  return longest;
}

console.log(
  longestSubarrayWithOnesAfterReplacement([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)
); // 6
console.log(
  longestSubarrayWithOnesAfterReplacement([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)
); // 9
