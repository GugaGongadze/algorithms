const binary_search = function (arr, key) {
  if (arr.length === 0) return -1;
  if (arr[0] === arr[arr.length - 1]) return arr[0] === key ? 0 : -1;

  let isAsc = arr[0] < arr[arr.length - 1];

  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((hi + lo) / 2);
    let el = arr[mid];

    if (el === key) return mid;

    if (el > key) {
      if (isAsc) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    } else {
      if (isAsc) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
  }

  return -1;
};

console.log(binary_search([4, 6, 10], 10)); // 2
console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5)); // 4
console.log(binary_search([10, 6, 4], 10)); // 0
console.log(binary_search([10, 6, 4], 4)); // 2
