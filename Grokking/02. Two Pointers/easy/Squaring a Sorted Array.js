function squaringSortedArray(arr) {
  let squared = arr.map((e) => e * e);

  let min = Math.min(...squared);
  let left = squared.indexOf(min);

  if (squared[left - 1] === undefined) return squared;
  if (squared[left + 1] === undefined) return squared.reverse();

  let right = left + 1;

  let sorted = [];

  while (right - left <= squared.length) {
    let leftItem = squared[left];
    let rightItem = squared[right];

    if (leftItem === undefined) {
      sorted.push(rightItem);
      right++;
      continue;
    }

    if (rightItem === undefined) {
      sorted.push(leftItem);
      left--;
      continue;
    }

    if (leftItem === rightItem) {
      sorted.push(leftItem);
      sorted.push(rightItem);
      right++;
      left--;
    } else if (leftItem < rightItem) {
      sorted.push(leftItem);
      left--;
    } else {
      sorted.push(rightItem);
      right++;
    }
  }

  return sorted;
}

console.log(squaringSortedArray([-2, -1, 0, 2, 3])); // [0, 1, 4, 4, 9]
console.log(squaringSortedArray([-3, -1, 0, 1, 2])); // [0, 1, 1, 4, 9]

function make_squares(arr) {
  const n = arr.length;
  squares = Array(n).fill(0);
  let highestSquareIdx = n - 1;
  let left = 0,
    right = n - 1;
  while (left <= right) {
    let leftSquare = arr[left] * arr[left],
      rightSquare = arr[right] * arr[right];
    if (leftSquare > rightSquare) {
      squares[highestSquareIdx] = leftSquare;
      left += 1;
    } else {
      squares[highestSquareIdx] = rightSquare;
      right -= 1;
    }
    highestSquareIdx -= 1;
  }

  return squares;
}

console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);
