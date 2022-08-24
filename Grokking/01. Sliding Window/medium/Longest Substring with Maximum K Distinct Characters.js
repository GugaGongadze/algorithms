function longestSubstringWithMaximumKDistinctCharacters(str, k) {
  if (k >= str.length) return str.length;

  const arr = str.split('');

  let longestSubstringLength = 0;
  let start = 0;
  let set = new Set();

  for (let end = 0; end < arr.length; end++) {
    set.add(arr[end]);

    while (set.size > k) {
      longestSubstringLength = Math.max(longestSubstringLength, end - start);
      set.delete(arr[start]);
      start++;
    }
  }

  return longestSubstringLength;
}

// console.log(longestSubstringWithMaximumKDistinctCharacters('araaci', 2)); // 4
// console.log(longestSubstringWithMaximumKDistinctCharacters('araaci', 1)); // 2
// console.log(longestSubstringWithMaximumKDistinctCharacters('cbbebi', 3)); // 5
// console.log(longestSubstringWithMaximumKDistinctCharacters('cbbebi', 10)); // 6
// console.log(longestSubstringWithMaximumKDistinctCharacters('abcdef', 2)); // 2

/*

  Time Complexity:
    The above algorithm’s time complexity will be O(N), where N is the number of characters in the input string. Splitting into array takes O(N). The outer for loop runs for all characters, and the inner while loop processes each character only once; therefore, the time complexity of the algorithm will be O(N+N+N), which is asymptotically equivalent to O(N).

  Space Complexity:
    The algorithm’s space complexity is O(K), as we will be storing a maximum of K+1 characters in the Set.

*/

function solution(str, k) {
  let count = 0;
  let i = 0;
  let temp = '';
  let max = 0;

  for (let j = 0; j <= str.length; j++) {
    if (str[i] !== str[j] && count <= k) {
      count++;
      i = j;
      max = Math.max(max, temp.length);
    }

    temp += str[j];
  }

  return max;
}

// console.log(solution('araaci', 2)); // 4
// console.log(solution('araaci', 1)); // 2
// console.log(solution('cbbebi', 3)); // 5
// console.log(solution('cbbebi', 10)); // 6
console.log(solution('abcdef', 2)); // 2
