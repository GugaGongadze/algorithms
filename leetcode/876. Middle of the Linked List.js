var middleNode = function (head) {
  let listLength = 0;

  let temp = head;

  while (temp) {
    listLength++;
    temp = temp.next;
  }

  let middleIdx = Math.floor(listLength / 2);

  let result = head;

  while (middleIdx > 0) {
    result = result.next;

    middleIdx--;
  }

  return result;
};
