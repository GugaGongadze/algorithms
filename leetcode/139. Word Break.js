/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  if (!wordDict || wordDict.length === 0) return false;

  const set = new Set(wordDict);

  const dp = Array(s.length + 1).fill(false);

  dp[0] = true;

  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      const substring = s.slice(start, end);

      if (dp[start] === true && set.has(substring)) {
        dp[end] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

console.log(wordBreak('leetcode', ['leet', 'code'])); // true
console.log(wordBreak('applepenapple', ['apple', 'pen'])); // true
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])); // false
console.log(wordBreak('catsandogcat', ['cats', 'dog', 'sand', 'and', 'cat', 'an'])); // true
console.log(wordBreak('cars', ['car', 'ca', 'rs'])); // true
console.log(wordBreak('cbca', ['bc', 'ca'])); // false
console.log(wordBreak('bb', ['a', 'b', 'bbb', 'bbbb'])); // true
console.log(wordBreak('ccaccc', ['cc', 'ac'])); // true
console.log(
  wordBreak(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
    ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa']
  )
); // false
console.log(
  wordBreak(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    ['aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa', 'ba']
  )
); // false
