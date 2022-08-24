function quadrupleSumToTarget(arr, target) {
  if (arr.length < 4) return [];

  let quadruplets = [];
  let low = 0;
  let high = low + 1;
  let curr = high + 1;

  arr.sort((a, b) => a - b);

  let map = arr.reduce((acc, curr, idx) => ({ ...acc, [curr]: idx }), {});

  while (high < arr.length - 1) {
    let currSum = arr[low] + arr[high] + arr[curr];
    let diffToMake = target - currSum;

    if (map[diffToMake] !== undefined && map[diffToMake] > curr) {
      quadruplets.push([arr[low], arr[high], arr[curr], diffToMake]);

      high++;
      curr = high + 1;
    } else if (curr === arr.length - 1) {
      if (high === arr.length - 2) {
        low++;
        high = low + 1;
        curr = high + 1;
      } else {
        high++;
        curr = high + 1;
      }
    } else {
      curr++;
    }
  }

  return quadruplets;
}

// quadrupleSumToTarget([4, 1, 2, -1, 1, -3], 1); // [-3, -1, 1, 4], [-3, 1, 1, 2]
// quadrupleSumToTarget([2, 0, -1, 1, -2, 2], 2); // [-2, 0, 2, 2], [-1, 0, 1, 2]

function search_quadruplets(arr, target) {
  arr.sort((a, b) => a - b);
  const quadruplets = [];
  for (let i = 0; i < arr.length - 3; i++) {
    // skip same element to avoid duplicate quadruplets
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < arr.length - 2; j++) {
      // skip same element to avoid duplicate quadruplets
      if (j > i + 1 && arr[j] === arr[j - 1]) {
        continue;
      }
      search_pairs(arr, target, i, j, quadruplets);
    }
  }
  return quadruplets;
}

function search_pairs(arr, targetSum, first, second, quadruplets) {
  let left = second + 1,
    right = arr.length - 1;
  while (left < right) {
    sum = arr[first] + arr[second] + arr[left] + arr[right];
    if (sum === targetSum) {
      // found the quadruplet
      quadruplets.push([arr[first], arr[second], arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] === arr[left - 1]) {
        left += 1; // skip same element to avoid duplicate quadruplets
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1; // skip same element to avoid duplicate quadruplets
      }
    } else if (sum < targetSum) {
      left += 1; // we need a pair with a bigger sum
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}

console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));
console.log(search_quadruplets([2, 0, -1, 1, -2, 2], 2));
