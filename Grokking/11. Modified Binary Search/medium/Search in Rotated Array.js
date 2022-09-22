function find_max_in_bitonic_array(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    let midEl = arr[mid];
    let prevEl = arr[mid - 1];
    let nextEl = arr[mid + 1];

    if (midEl > nextEl || prevEl > midEl) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  // at the end of the while loop, 'start === end'
  return start;
}

const binary_search = (arr, start, end, key) => {
  let lo = start;
  let hi = end;

  while (lo <= hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);
    let midEl = arr[mid];

    if (midEl === key) {
      return mid;
    }

    if (midEl < key) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return -1;
};

const search_rotated_array = function (arr, key) {
  let maxIndex = find_max_in_bitonic_array(arr);

  let indexIfExistsInLeftPart = binary_search(arr, 0, maxIndex, key);

  if (indexIfExistsInLeftPart > -1) return indexIfExistsInLeftPart;

  let indexIfExistsInRightPart = binary_search(arr, maxIndex, arr.length - 1, key);

  if (indexIfExistsInRightPart > -1) return indexIfExistsInRightPart;

  return -1;
};

console.log(search_rotated_array([10, 15, 1, 3, 8], 15));
console.log(search_rotated_array([4, 5, 7, 9, 10, -1, 2], 10));
