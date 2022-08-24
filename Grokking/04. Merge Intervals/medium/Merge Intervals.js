class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return '[' + this.start + ', ' + this.end + ']';
  }
}

const merge = function (intervals) {
  let merged = [];

  for (let idx = 0; idx < intervals.length; idx++) {
    const currInterval = intervals[idx];

    if (merged.length === 0) {
      merged.push(currInterval);
      continue;
    }

    let lastInterval = merged.pop();

    if (lastInterval.end < currInterval.start || lastInterval.start > currInterval.end) {
      if (lastInterval.start < currInterval.start) {
        merged.push(lastInterval);
        merged.push(currInterval);
      } else {
        merged.push(currInterval);
        merged.push(lastInterval);
      }
    } else {
      let newStart = Math.min(lastInterval.start, currInterval.start);
      let newEnd = Math.max(lastInterval.end, currInterval.end);

      let newInterval = new Interval(newStart, newEnd);

      merged.push(newInterval);
    }
  }

  return merged;
};

merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
result = '';
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + ' ';
}
console.log(`Merged intervals: ${result}`);

merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = '';
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + ' ';
}
console.log(`Merged intervals: ${result}`);

merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = '';
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + ' ';
}
console.log(`Merged intervals: ${result}`);
