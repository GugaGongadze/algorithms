const Heap = require('collections/heap');

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const merge_lists = function (lists) {
  let heap = new Heap([], null, (a, b) => b.value - a.value);

  for (let i = 0; i < lists.length; i++) {
    let list_head = lists[i];

    while (list_head) {
      heap.push(list_head);
      list_head = list_head.next;
    }
  }

  let head = heap.pop();
  let temp = head;

  while (temp) {
    let el = heap.pop();
    temp.next = el;
    temp = temp.next;
  }

  return head;
};

function merge_lists_better(lists) {
  const minHeap = new Heap([], null, (a, b) => b.value - a.value);

  // put the root of each list in the min heap
  lists.forEach((a) => {
    if (a !== null) {
      minHeap.push(a);
    }
  });

  // take the smallest(top) element form the min-heap and add it to the result
  // if the top element has a next element add it to the heap
  let resultHead = null,
    resultTail = null;
  while (minHeap.length > 0) {
    const node = minHeap.pop();
    if (resultHead === null) {
      resultHead = resultTail = node;
    } else {
      resultTail.next = node;
      resultTail = resultTail.next;
    }
    if (node.next !== null) {
      minHeap.push(node.next);
    }
  }

  return resultHead;
}

l1 = new ListNode(2);
l1.next = new ListNode(6);
l1.next.next = new ListNode(8);

l2 = new ListNode(3);
l2.next = new ListNode(6);
l2.next.next = new ListNode(7);

l3 = new ListNode(1);
l3.next = new ListNode(3);
l3.next.next = new ListNode(4);

result = merge_lists([l1, l2, l3]);
output = 'Here are the elements form the merged list: ';
while (result != null) {
  output += result.value + ' ';
  result = result.next;
}
console.log(output);
