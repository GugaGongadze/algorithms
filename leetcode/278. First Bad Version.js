const isBadVersion = function (version) {
  return version === 4;
};

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let firstBadVersion = n;
    let low = 1;
    let high = n;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (isBadVersion(mid)) {
        firstBadVersion = Math.min(firstBadVersion, mid);
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return firstBadVersion;
  };
};

console.log(solution(isBadVersion)(5));
