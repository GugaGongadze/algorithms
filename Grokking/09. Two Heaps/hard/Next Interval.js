const Heap = require('collections/heap');

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const find_next_interval = function (intervals) {
  let result = [];

  let maxHeap = new Heap([], null, (a, b) => a[0].start - b[0].start);

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];

    maxHeap.push([interval, i]);
  }

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];

    let minHeap = new Heap([], null, (a, b) => b[0].start - a[0].start);
    let maxHeapClone = new Heap(maxHeap, null, (a, b) => a[0].start - b[0].start);

    while (
      maxHeapClone.peek() !== undefined &&
      maxHeapClone.peek()[0].start >= interval.end
    ) {
      minHeap.push(maxHeapClone.pop());
    }

    let minNext = minHeap.pop();

    if (minNext === undefined) {
      result.push(-1);
    } else {
      result.push(minNext[1]);
    }
  }

  return result;
};

result = find_next_interval([new Interval(2, 3), new Interval(3, 4), new Interval(5, 6)]);
console.log(`Next interval indices are: ${result}`);

result = find_next_interval([new Interval(3, 4), new Interval(1, 5), new Interval(4, 6)]);
console.log(`Next interval indices are: ${result}`);
