class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const merge = function (intervals_a, intervals_b) {
  let result = [];

  let aPointer = 0;
  let bPointer = 0;

  while (aPointer < intervals_a.length && bPointer < intervals_b.length) {
    let aInterval = intervals_a[aPointer];
    let bInterval = intervals_b[bPointer];

    // If current intervals do not intersect
    // skip the iteration

    // A ends before B starts
    if (aInterval.end < bInterval.start) {
      aPointer++;
      continue;
    }

    // B ends before A starts
    if (bInterval.end < aInterval.start) {
      bPointer++;
      continue;
    }

    // intersection will start with "later-starting" interval
    let intersectionStart = Math.max(aInterval.start, bInterval.start);

    // intersection will end with "earlier-ending" interval
    let intersectionEnd = Math.min(aInterval.end, bInterval.end);

    result.push(new Interval(intersectionStart, intersectionEnd));

    // A interval ends before B interval
    if (aInterval.end < bInterval.end) {
      aPointer++;

      // B interval ends before A interval
    } else if (aInterval.end > bInterval.end) {
      bPointer++;
    } else {
      // both intervals end at the same time
      // move pointer to next intervals for both A and B
      aPointer++;
      bPointer++;
    }
  }

  return result;
};

process.stdout.write('Intervals Intersection: ');
let result = merge(
  [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
  [new Interval(2, 3), new Interval(5, 7)]
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals Intersection: ');
result = merge(
  [new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
  [new Interval(5, 10)]
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
