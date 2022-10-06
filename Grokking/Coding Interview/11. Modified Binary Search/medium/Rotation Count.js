function find_max(arr) {
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

const count_rotations = function (arr) {
  let maxIndex = find_max(arr);

  // Array has not been rotated
  if (maxIndex === arr.length - 1) return 0;

  return maxIndex + 1;
};

console.log(count_rotations([10, 15, 1, 3, 8]));
console.log(count_rotations([4, 5, 7, 9, 10, -1, 2]));
console.log(count_rotations([1, 3, 8, 10]));
console.log(count_rotations([3, 3, 7, 3]));
