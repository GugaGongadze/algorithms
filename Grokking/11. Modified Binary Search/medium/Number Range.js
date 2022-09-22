const find_range = function (arr, key) {
  let range = [-1, -1];

  if (arr.length === 0) return range;

  let lo = 0;
  let hi = arr.length - 1;
  let start, end;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    let el = arr[mid];

    if (el === key) {
      start = mid;
      end = mid;
      while (arr[start] === key) {
        start--;
      }

      while (arr[end] === key) {
        end++;
      }

      return [start + 1, end - 1];
    } else if (el > key) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return range;
};

console.log(find_range([4, 6, 6, 6, 9], 6)); // [1, 3]
console.log(find_range([1, 3, 8, 10, 15], 10)); // [3, 3]
console.log(find_range([1, 3, 8, 10, 15], 12)); // [-1, -1]
