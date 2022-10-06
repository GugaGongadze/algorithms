const Heap = require('collections/heap');

class KthLargestNumberInStream {
  constructor(nums, k) {
    this.heap = new Heap([], null, (a, b) => b - a);

    for (let i = 0; i < nums.length; i++) {
      if (i < k) {
        this.heap.push(nums[i]);
        continue;
      }

      if (this.heap.peek() < nums[i]) {
        this.heap.pop();
        this.heap.push(nums[i]);
      }
    }

    this.k = k;
  }

  add(num) {
    if (this.heap.peek() < num) {
      this.heap.pop();
      this.heap.push(num);
    }
    return this.heap.peek();
  }
}

kthLargestNumber = new KthLargestNumberInStream([3, 1, 5, 12, 2, 11], 4);
console.log(`4th largest number is: ${kthLargestNumber.add(6)}`);
console.log(`4th largest number is: ${kthLargestNumber.add(13)}`);
console.log(`4th largest number is: ${kthLargestNumber.add(4)}`);
