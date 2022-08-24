function pairWithTargetSum(arr, target_sum) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let startEl = arr[start];
    let endEl = arr[end];

    if (startEl + endEl === target_sum) return [start, end];

    if (startEl + endEl > target_sum) {
      end--;
    } else {
      start++;
    }
  }

  return [-1, -1];
}

console.log(pairWithTargetSum([1, 2, 3, 4, 6], 6)); // [1, 3]
console.log(pairWithTargetSum([2, 5, 9, 11], 11)); // [0, 2]
