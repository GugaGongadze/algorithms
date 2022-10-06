class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const overlaps = (interval1, interval2) =>
  !(interval1.end < interval2.start || interval2.end < interval1.start);

const insert = function (intervals, new_interval) {
  let merged = [];

  let idx = 0;

  while (idx < intervals.length) {
    const interval = intervals[idx];

    if (overlaps(interval, new_interval)) {
      // find out if new interval overlaps following intervals
      let minStart = Math.min(interval.start, new_interval.start);
      let maxEnd = Math.max(interval.end, new_interval.end);

      let nextIdx = idx + 1;

      while (nextIdx && nextIdx < intervals.length) {
        let nextInterval = intervals[nextIdx];
        if (!overlaps(nextInterval, new_interval)) break;

        minStart = Math.min(minStart, nextInterval.start);
        maxEnd = Math.max(maxEnd, nextInterval.end);

        nextIdx++;
        idx = nextIdx;
      }

      merged.push(new Interval(minStart, maxEnd));
    } else {
      merged.push(interval);
    }

    idx++;
  }

  return merged;
};

process.stdout.write('Intervals after inserting the new interval: ');
let result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 6)
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 10)
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([new Interval(2, 3), new Interval(5, 7)], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

function insert(intervals, new_interval) {
  let merged = [],
    i = 0;

  // skip and add to output) all intervals that come before the 'new_interval'
  while (i < intervals.length && intervals[i].end < new_interval.start) {
    merged.push(intervals[i]);
    i += 1;
  }

  // merge all intervals that overlap with 'new_interval'
  while (i < intervals.length && intervals[i].start <= new_interval.end) {
    new_interval.start = Math.min(intervals[i].start, new_interval.start);
    new_interval.end = Math.max(intervals[i].end, new_interval.end);
    i += 1;
  }

  // insert the new_interval
  merged.push(new_interval);

  // add all the remaining intervals to the output
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i += 1;
  }

  return merged;
}
