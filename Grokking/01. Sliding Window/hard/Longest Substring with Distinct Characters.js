function longestSubstringWithDistinctCharacters(str) {
  let longest = 0;
  let start = 0;
  let map = {};

  for (let end = 0; end < str.length; end++) {
    if (map[str[end]] === undefined) {
      map[str[end]] = 0;
    }

    map[str[end]] = map[str[end]] + 1;

    while (Object.keys(map).length < end - start + 1) {
      longest = Math.max(longest, end - start);

      if (map[str[end]] === 0) {
        delete map[str[end]];
      } else {
        map[str[end]] = map[str[end]] - 1;
      }
      start++;
    }
  }

  return longest;
}

console.log(longestSubstringWithDistinctCharacters('aabccbb')); // 3
console.log(longestSubstringWithDistinctCharacters('abbbb')); // 2
console.log(longestSubstringWithDistinctCharacters('abccde')); // 3

/**
 * Time Complexity:
 * O(N+K)
 *
 * Space Complexity:
 * O(1)
 */
