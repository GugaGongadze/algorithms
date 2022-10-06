class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return '[' + this.start + ', ' + this.end + ']';
  }
}

const mergeIntervals = (intervals) => {
  let result = [...intervals];

  let idx = 0;

  while (idx < result.length) {
    let currInt = result[idx];
    let nextInt = result[idx + 1];

    if (nextInt === undefined) break;

    if (currInt.end >= nextInt.start) {
      result = [
        ...result.slice(0, idx),
        new Interval(currInt.start, nextInt.end),
        ...result.slice(idx + 2),
      ];
    } else {
      idx++;
    }
  }

  return result;
};

const gaps = (intervals) => {
  const result = [];

  for (let idx = 0; idx < intervals.length; idx++) {
    const currInt = intervals[idx];
    const nextInt = intervals[idx + 1];

    if (nextInt === undefined) break;

    result.push(new Interval(currInt.end, nextInt.start));
  }

  return result;
};

const flatten = (array) => {
  return array.reduce((acc, curr) => {
    if (curr instanceof Interval) {
      return [...acc, curr];
    } else {
      return [...acc, ...flatten(curr)];
    }
  }, []);
};

const find_employee_free_time = function (schedules) {
  const flattened = flatten(schedules);
  flattened.sort((a, b) => a.start - b.start);

  const merged = mergeIntervals(flattened);

  const free_intervals = gaps(merged);

  return free_intervals;
};

input = [
  [new Interval(1, 3), new Interval(5, 6)],
  [new Interval(2, 3), new Interval(6, 8)],
];
intervals = find_employee_free_time(input);
result = 'Free intervals: ';
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);

input = [
  [new Interval(1, 3), new Interval(9, 12)],
  [new Interval(2, 4)],
  [new Interval(6, 8)],
];
intervals = find_employee_free_time(input);
result = 'Free intervals: ';
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);

input = [
  [new Interval(1, 3)],
  [new Interval(2, 4)],
  [new Interval(3, 5), new Interval(7, 9)],
];
intervals = find_employee_free_time(input);
result = 'Free intervals: ';
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);
