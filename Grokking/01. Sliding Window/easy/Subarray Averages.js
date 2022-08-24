function find_averages_of_subarrays_eager(K, arr) {
  const result = [];
  for (let i = 0; i < arr.length - K + 1; i++) {
    // find sum of next 'K' elements
    let sum = 0.0;
    for (let j = i; j < i + K; j++) {
      sum += arr[j];
    }
    result.push(sum / K); // calculate average
  }

  return result;
}

const res = find_averages_of_subarrays_eager(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);

// Time complexity: O(N * K) where ‘N’ is the number of elements in the input array.

function find_averages_of_subarrays(K, arr) {
  const result = [];
  let windowSum = 0.0,
    windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (windowEnd >= K - 1) {
      result.push(windowSum / K); // calculate the average
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
  }

  return result;
}

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);

/*
  Time Complexity:

  The time complexity of the above algorithm will be O(N)

  Space Complexity:

  The algorithm runs in constant space O(1)
*/
