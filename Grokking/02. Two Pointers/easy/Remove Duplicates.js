function removeDuplicates(arr) {
  if (arr.length < 2) return 0;
  let start = 0;
  let end = start + 1;

  while (end < arr.length) {
    let startEl = arr[start];
    let endEl = arr[end];

    if (startEl !== endEl) {
      // if there is space between them swap
      if (endEl - startEl > 1) {
        start++;

        [arr[start], arr[end]] = [arr[end], arr[start]];
      } else {
        start++;
      }
    }

    end++;
  }

  return start + 1;
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])); // 4
console.log(removeDuplicates([2, 2, 2, 11])); // 2
