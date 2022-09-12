const Heap = require('collections/heap'); //http://www.collectionsjs.com

class SlidingWindowMedian {
  constructor() {
    this.maxHeap = new Heap([], null, (a, b) => a - b); // containing first half of numbers
    this.minHeap = new Heap([], null, (a, b) => b - a); // containing second half of numbers
  }

  insert(num) {
    if (!num) return;

    if (this.maxHeap.length === 0 || this.maxHeap.peek() >= num) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }

    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.minHeap.length > this.maxHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  delete(num) {
    let deleted = false;

    deleted = this.maxHeap.delete(num);

    if (!deleted) {
      this.minHeap.delete(num);
    }
  }

  find_median() {
    if (this.maxHeap.length > this.minHeap.length) {
      return this.maxHeap.peek();
    }

    return this.maxHeap.peek() / 2 + this.minHeap.peek() / 2;
  }

  find_sliding_window_median(nums, k) {
    let result = [];

    for (let i = 0; i < k; i++) {
      this.insert(nums[i]);
    }

    let low = 0;
    let high = k - 1;

    while (high < nums.length) {
      result.push(this.find_median());

      this.delete(nums[low]);
      low++;
      high++;
      this.insert(nums[high]);
    }

    return result;
  }
}

var slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 2);

console.log(`Sliding window medians are: ${result}`);

slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 3);
console.log(`Sliding window medians are: ${result}`);
