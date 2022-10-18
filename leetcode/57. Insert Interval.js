/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];

  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);

  let i = 0;

  while (i < intervals.length - 1) {
    const [currStart, currEnd] = intervals[i];
    const [nextStart, nextEnd] = intervals[i + 1];

    if (currEnd >= nextStart) {
      intervals[i] = [Math.min(currStart, nextStart), Math.max(currEnd, nextEnd)];

      intervals.splice(i + 1, 1);
    } else {
      i++;
    }
  }

  return intervals;
};

console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
); // [[1,5],[6,9]]
console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
); // [[1,2],[3,10],[12,16]]
