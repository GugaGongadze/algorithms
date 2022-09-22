const search_ceiling_of_a_number = function (arr, key) {
  if (arr.length === 0) return -1;
  if (arr.length === 1) return arr[0] >= key ? 0 : -1;
  if (arr[arr.length - 1] < key) return -1;

  let lo = 0;
  let hi = arr.length - 1;
  let currMax = {
    index: -1,
    value: Infinity,
  };

  while (lo <= hi) {
    let mid = Math.floor((hi + lo) / 2);
    let el = arr[mid];

    if (el === key) return mid;

    if (el > key) {
      if (el < currMax.value) {
        currMax = {
          index: mid,
          value: el,
        };
      }
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return currMax.index;
};

console.log(search_ceiling_of_a_number([4, 6, 10], 6)); // 1
console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12)); // 4
console.log(search_ceiling_of_a_number([4, 6, 10], 17)); // -1
console.log(search_ceiling_of_a_number([4, 6, 10], -1)); // 0
