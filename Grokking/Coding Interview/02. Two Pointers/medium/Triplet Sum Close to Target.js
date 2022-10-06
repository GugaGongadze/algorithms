function findClosestEl(arr, left, right, target) {
  let smallest = Infinity;
  for (let idx = left; idx < right; idx++) {
    let element = arr[idx];
    let currDiff = Math.abs(target - element);
    let smallestDiff = Math.abs(target - smallest);
    if (currDiff < smallestDiff) smallest = element;
  }

  return smallest;
}

function tripletSumCloseToTarget(arr, target_sum) {
  let left = 0;
  let right = arr.length - 1;
  let smallestSum = Infinity;

  while (left < right) {
    let leftEl = arr[left];
    let rightEl = arr[right];
    let sum = leftEl + rightEl;
    let diff = target_sum - sum;
    let closest = findClosestEl(arr, left + 1, right, diff);
    let closestSum = leftEl + rightEl + closest;

    let currentDiff = Math.abs(target_sum - closestSum);
    let smallestDif = Math.abs(target_sum - smallestSum);

    if (currentDiff < smallestDif) {
      smallestSum = closestSum;
    }

    if (Math.abs(rightEl - closest) > Math.abs(closest - leftEl)) {
      left++;
    } else {
      right--;
    }
  }

  return smallestSum === Infinity ? -1 : smallestSum;
}

console.log(tripletSumCloseToTarget([-2, 0, 1, 2], 2)); // 1
console.log(tripletSumCloseToTarget([-3, -1, 1, 2], 1)); // 0
console.log(tripletSumCloseToTarget([1, 0, 1, 1], 100)); // 3

function triplet_sum_close_to_target(arr, targetSum) {
  arr.sort((a, b) => a - b);
  let smallest_difference = Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const target_diff = targetSum - arr[i] - arr[left] - arr[right];
      if (target_diff === 0) {
        // we've found a triplet with an exact sum
        return targetSum; // return sum of all the numbers
      }

      // the second part of the following 'if' is to handle the smallest sum when we have more than one solution
      if (
        Math.abs(target_diff) < Math.abs(smallest_difference) ||
        (Math.abs(target_diff) === Math.abs(smallest_difference) &&
          target_diff > smallest_difference)
      ) {
        smallest_difference = target_diff; // save the closest and the biggest difference
      }

      if (target_diff > 0) {
        left += 1; // we need a triplet with a bigger sum
      } else {
        right -= 1; // we need a triplet with a smaller sum
      }
    }
  }
  return targetSum - smallest_difference;
}

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));
