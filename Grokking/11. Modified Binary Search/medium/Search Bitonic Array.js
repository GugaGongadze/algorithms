function find_max_in_bitonic_array(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  // at the end of the while loop, 'start === end'
  return start;
}

const binary_search = (arr, start, end, key, isDescending = false) => {
  let lo = start;
  let hi = end;

  while (lo <= hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);
    let midEl = arr[mid];

    if (midEl === key) {
      return mid;
    }

    if (midEl < key) {
      if (isDescending) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    } else {
      if (isDescending) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
  }

  return -1;
};

const search_bitonic_array = function (arr, key) {
  let maxIndex = find_max_in_bitonic_array(arr);

  let indexIfExistsInLeftPart = binary_search(arr, 0, maxIndex, key);

  if (indexIfExistsInLeftPart > -1) return indexIfExistsInLeftPart;

  let indexIfExistsInRightPart = binary_search(arr, maxIndex, arr.length - 1, key, true);

  if (indexIfExistsInRightPart > -1) return indexIfExistsInRightPart;

  return -1;
};

console.log(search_bitonic_array([1, 3, 8, 4, 3], 4));
console.log(search_bitonic_array([3, 8, 3, 1], 8));
console.log(search_bitonic_array([1, 3, 8, 12], 12));
console.log(search_bitonic_array([10, 9, 8], 10));
