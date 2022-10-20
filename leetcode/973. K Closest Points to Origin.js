/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  function distanceToOrigin(point) {
    const [x, y] = point;
    return Math.sqrt(x * x + y * y);
  }

  points.sort((a, b) => distanceToOrigin(a) - distanceToOrigin(b));

  return points.slice(0, k);
};

console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    (k = 1)
  )
); // [[-2,2]]

console.log(
  kClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4],
    ],
    (k = 2)
  )
); // [[3,3],[-2,4]]
