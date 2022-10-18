function getOptimalStringLength(countA, countB, maxA, maxB) {
  let result = '';

  while (countA > 0 || countB > 0) {
    const lastChar = result[result.length - 1];

    if (lastChar === 'A') {
      if (countB > 0) {
        result += 'B';
        countB--;
      }
    } else if (lastChar === 'B') {
      if (countA > 0) {
        result += 'A';
        countA--;
      }
    } else {
      if (countA > countB) {
        result += 'A';
        countA--;
      } else {
        result += 'B';
        countB--;
      }
    }
  }

  return result.length;
}

console.log(getOptimalStringLength(3, 5, 1, 1));
console.log(getOptimalStringLength(2, 4, 2, 1));
console.log(getOptimalStringLength(3, 3, 3, 3));
