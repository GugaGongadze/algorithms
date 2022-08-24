function isMatch(s, p) {
  // if (p.length > s.length)

  let left = 0;
  let right = 0;

  while (left < s.length) {
    if (s[left] === p[right] || p[right] === '.') {
      left++;
      right++;
    } else if (p[right] === '*') {
      if (p[right - 1] === '.') {
        let hasFollowingCharacters = p[right + 1] !== undefined;

        if (!hasFollowingCharacters) return true;

        let characterToBeFollowedWith = p[right + 1];
        // Skip until that character is found
        while (left < s.length) {
          let characterToTest = s[left];

          if (characterToTest === characterToBeFollowedWith) {
            // if character is found move along the pointers
            // We'll determine the match in next iteration
            left++;
            right += 2;
            break;
          }

          if (characterToTest !== characterToBeFollowedWith && left < s.length - 1) {
            // move through the string trying to find the match
            left++;
            continue;
          }

          return false;
        }
      }

      while (s[left] === p[right - 1]) {
        let hasFollowingCharacters = p[right + 1] !== undefined;

        if (!hasFollowingCharacters) {
          left++;
          return;
        } else {
           let characterToBeFollowedWith = p[right + 1];
           
        }

        if (left >= s.length) {
          console.log(s[left]);
          console.log(p[right]);
        }
      }
      right++;
    } else if (p[right + 1] === '*') {
      right += 2;
    } else {
      return false;
    }
  }

  return true;
}

// console.log(isMatch('aa', 'a')); // false
// console.log(isMatch('aa', 'a*')); // true
// console.log(isMatch('ab', '.*')); // true
// console.log(isMatch('aaab', 'a*b')); // true
// console.log(isMatch('aaab', 'a*c')); // false
// console.log(isMatch('abc', '.*b')); // false
// console.log(isMatch('abc', '.*c')); // true
// console.log(isMatch('aab', 'c*a*b')); // true
// console.log(isMatch('ab', '.*c')); // false
// console.log(isMatch('aaa', 'aaaa')); // false
console.log(isMatch('aaa', 'a*a')); // true
// console.log(isMatch('a', 'ab*a')); // false
