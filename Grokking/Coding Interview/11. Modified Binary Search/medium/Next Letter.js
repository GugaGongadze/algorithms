const search_next_letter = function (letters, key) {
  if (letters.length === 0) return -1;
  if (letters.length === 1) return letters[0] >= key ? 0 : -1;

  let lo = 0;
  let hi = letters.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((hi + lo) / 2);

    let el = letters[mid];

    if (el > key) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return lo === letters.length ? letters[0] : letters[lo];
};

console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f'));
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'b'));
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm'));
