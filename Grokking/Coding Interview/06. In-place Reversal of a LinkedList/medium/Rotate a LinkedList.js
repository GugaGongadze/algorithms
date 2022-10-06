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

const rotate = function (head, rotations) {
  let listLength = 0;
  let temp = head;

  while (temp !== null) {
    temp = temp.next;
    listLength++;
  }

  let adjustedRotations = rotations % listLength;

  // get first part
  let i = 1;
  let start_of_first_part = head;
  let end_of_first_part = start_of_first_part;

  while (i < adjustedRotations) {
    end_of_first_part = end_of_first_part.next;
    i++;
  }

  let start_of_next_part = end_of_first_part.next;

  end_of_first_part.next = null;

  let end_of_next_part = start_of_next_part;

  while (end_of_next_part.next !== null) {
    end_of_next_part = end_of_next_part.next;
  }

  end_of_next_part.next = start_of_first_part;

  return start_of_next_part;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(`Nodes of rotated LinkedList are: ${rotate(head, 3).get_list()}`);
