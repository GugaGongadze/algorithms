function minimumWindowSort(arr) {
  if (arr.length < 2) return 0;

  let low = 0;
  let high = arr.length - 1;

  let sortStart = undefined;
  let sortEnd = undefined;

  while (low < arr.length - 1 && sortStart === undefined) {
    let prevEl = arr[low - 1];
    let currEl = arr[low];

    if (prevEl === undefined) {
      low++;
      continue;
    }

    if (prevEl <= currEl) {
      low++;
    } else {
      sortStart = low - 1;
    }

    while (currEl > arr[sortEnd]) {
      sortEnd++;
    }
  }

  while (high > 0 && sortEnd === undefined) {
    let prevEl = arr[high + 1];
    let currEl = arr[high];

    if (prevEl === undefined) {
      high--;
      continue;
    }

    if (currEl <= prevEl) {
      high--;
    } else {
      sortEnd = high + 1;
    }

    while (currEl < arr[sortStart]) {
      sortStart--;
    }
  }

  if (sortStart === undefined || sortEnd === undefined) return 0;

  sortStart = sortStart === -1 ? 0 : sortStart;
  sortEnd = sortEnd > arr.length - 1 ? arr.length - 1 : sortEnd;

  return sortEnd - sortStart + 1;
}

console.log(minimumWindowSort([1, 2, 5, 3, 7, 10, 9, 12])); // 5
console.log(minimumWindowSort([1, 3, 2, 0, -1, 7, 10])); // 5
console.log(minimumWindowSort([1, 2, 3])); // 0
console.log(minimumWindowSort([3, 2, 1])); // 3
