const Heap = require('collections/heap');

class Job {
  constructor(start, end, cpu_load) {
    this.start = start;
    this.end = end;
    this.cpu_load = cpu_load;
  }
}

const find_max_cpu_load = function (jobs) {
  jobs.sort((a, b) => a.start - b.start);

  let maxLoad = 0;
  let minHeap = new Heap([], null, (a, b) => a.end - b.end);
  let minHeapLoad = 0;

  for (let idx = 0; idx < jobs.length; idx++) {
    const job = jobs[idx];
    let currLoad = job.cpu_load;

    while (minHeap.length > 0 && minHeap.peek().end < job.start) {
      let removed = minHeap.pop();
      minHeapLoad -= removed.cpu_load;
    }

    if (minHeap.length > 0 && minHeap.peek().end > job.start) {
      currLoad += minHeapLoad;
    }

    minHeap.push(job);
    minHeapLoad += job.cpu_load;

    maxLoad = Math.max(maxLoad, currLoad);
  }

  return maxLoad;
};

console.log(
  `Maximum CPU load at any time: ${find_max_cpu_load([
    new Job(1, 4, 3),
    new Job(2, 5, 4),
    new Job(7, 9, 6),
  ])}`
);
console.log(
  `Maximum CPU load at any time: ${find_max_cpu_load([
    new Job(6, 7, 10),
    new Job(2, 4, 11),
    new Job(8, 12, 15),
  ])}`
);
console.log(
  `Maximum CPU load at any time: ${find_max_cpu_load([
    new Job(1, 4, 2),
    new Job(2, 4, 1),
    new Job(3, 6, 5),
  ])}`
);
