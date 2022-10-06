class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get_list() {
    let result = '';
    let temp = this;
    while (temp !== null) {
      result += temp.value + ' ';
      temp = temp.next;
    }
    return result;
  }
}

const reverse_sub_list = function (head, p, q) {
  let start = head;
  let end = head;

  // find start
  let i = 1;
  while (i < p - 1 && start.next !== null) {
    start = start.next;
    i++;
  }

  // find end
  i = 1;
  while (i < q + 1 && start.next !== null) {
    end = end.next;
    i++;
  }

  // reverse sub-list
  let curr = start.next;
  let next = curr.next;
  let tail = curr;
  curr.next = null;

  while (next !== end) {
    let temp = next.next;

    next.next = curr;
    curr = next;
    next = temp;
  }

  // connect start with reversed
  start.next = curr;

  // connect reversed with end
  tail.next = end;

  return head;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(
  `Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`
);
