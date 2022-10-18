/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];

  for (const interval of intervals) {
    if (result.length === 0) {
      result.push(interval);
      continue;
    }

    const lastMerged = result.pop();

    if (lastMerged[1] < interval[0]) {
      result.push(lastMerged, interval);
    } else {
      result.push([Math.min(lastMerged[0], interval[0]), Math.max(lastMerged[1], interval[1])]);
    }
  }

  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [[1,6],[8,10],[15,18]]
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
); // [[1,5]]
