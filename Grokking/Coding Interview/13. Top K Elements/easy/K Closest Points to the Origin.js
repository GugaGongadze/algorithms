const Heap = require('collections/heap');

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get_point() {
    return '[' + this.x + ', ' + this.y + '] ';
  }
}

const getDistance = (point) => {
  return Math.sqrt(point.x * point.x + point.y * point.y);
};

const find_closest_points = function (points, k) {
  let maxHeap = new Heap([], null, (a, b) => {
    let aDistance = getDistance(a);
    let bDistance = getDistance(b);

    return aDistance - bDistance;
  });

  for (let i = 0; i < k; i++) {
    maxHeap.push(points[i]);
  }

  for (let i = k; i < points.length; i++) {
    if (getDistance(points[i]) < getDistance(maxHeap.peek())) {
      maxHeap.pop();
      maxHeap.push(points[i]);
    }
  }

  return maxHeap.content;
};

points = find_closest_points([new Point(1, 3), new Point(3, 4), new Point(2, -1)], 2);
result = 'Here are the k points closest the origin: ';
for (i = 0; i < points.length; i++) result += points[i].get_point();
console.log(result);
