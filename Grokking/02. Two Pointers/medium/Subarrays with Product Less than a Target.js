function subarraysWithProductLessThanTarget(arr, target) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr[0] < target ? [arr] : [];

  let left = 0;
  let right = left;
  let prevProd = 1;

  let subarrays = [];

  while (left < arr.length) {
    if (left === right) {
      if (arr[right] < target) {
        subarrays.push([arr[right]]);
        prevProd = arr[right];
        right++;
      } else {
        left++;
        right++;
        prevProd = 1;
      }
    } else if (arr[right] === undefined) {
      if (arr[left + 1] < target) {
        subarrays.push([arr[left + 1]]);
        prevProd = arr[left + 1];
        left++;
      } else {
        left++;
        prevProd = 1;
      }
    } else {
      if (prevProd * arr[right] < target) {
        subarrays.push(arr.slice(left, right + 1));
        prevProd = prevProd * arr[right];
        right++;
      } else {
        left++;
        right = left;
        prevProd = 1;
      }
    }
  }

  return subarrays;
}

console.log(subarraysWithProductLessThanTarget([2, 5, 3, 10], 30)); // [2], [5], [2, 5], [3], [5, 3], [10]
console.log(subarraysWithProductLessThanTarget([8, 2, 6, 5], 50)); // [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]
