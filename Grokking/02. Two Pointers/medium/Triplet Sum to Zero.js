function tripletSumToZero(arr) {
  arr.sort((a, b) => a - b);

  let map = arr.reduce((acc, curr, idx) => {
    return {
      ...acc,
      [curr]: idx,
    };
  }, {});

  let left = 0;
  let right = arr.length - 1;

  let result = [];
  let resultMap = {};

  while (left < right) {
    let leftEl = arr[left];
    let rightEl = arr[right];

    let sum = leftEl + rightEl;
    let remainder = 0 - sum;

    if (remainder in map) {
      let stringified = `${leftEl}${remainder}${rightEl}`;
      if (!(stringified in resultMap)) {
        resultMap[stringified] = true;
        result.push([leftEl, remainder, rightEl]);
      }
    }

    if (Math.abs(leftEl) > Math.abs(rightEl)) {
      left++;
    } else if (Math.abs(leftEl) < Math.abs(rightEl)) {
      right--;
    } else {
      if (remainder in map) {
        let distanceToLeft = map[remainder] - left;
        let distanceToRight = right - map[remainder];

        if (distanceToLeft > distanceToRight) {
          left++;
          continue;
        }

        if (distanceToLeft < distanceToRight) {
          right--;
          continue;
        }
      }
      left++;
      right--;
    }
  }

  return result;
}

// console.log(tripletSumToZero([-3, 0, 1, 2, -1, 1, -2])); // [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// console.log(tripletSumToZero([-5, 2, -1, -2, 3])); // [[-5, 2, 3], [-2, -1, 3]]

function search_triplets(arr) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      // skip same element to avoid duplicate triplets
      continue;
    }
    search_pair(arr, -arr[i], i + 1, triplets);
  }

  return triplets;
}

function search_pair(arr, target_sum, left, triplets) {
  let right = arr.length - 1;
  while (left < right) {
    const current_sum = arr[left] + arr[right];
    if (current_sum === target_sum) {
      // found the triplet
      triplets.push([-target_sum, arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] === arr[left - 1]) {
        left += 1; // skip same element to avoid duplicate triplets
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1; // skip same element to avoid duplicate triplets
      }
    } else if (target_sum > current_sum) {
      left += 1; // we need a pair with a bigger sum
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));

// Time complexity#

// Sorting the array will take O(N * logN). The searchPair() function will take O(N). As we are calling searchPair() for every number in the input array, this means that overall searchTriplets() will take O(N * logN + N^2)O(N∗logN+N2), which is asymptotically equivalent to O(N2)O(N^2).
// Space complexity#

// Ignoring the space required for the output array, the space complexity of the above algorithm will be O(N) which is required for sorting.
