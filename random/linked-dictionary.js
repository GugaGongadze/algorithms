function DictNode(value, next) {
  this.value = value;
  this.next = next || null;
}

function solution(test) {
  for (const cs of test.testCases) {
    const map = {};

    const dict = cs.dictionary;

    for (const pair of dict) {
      const [first, second] = pair;

      if (Object.keys(map).length === 0) {
        map[first] = new DictNode(first, new DictNode(second));
        map[second] = new DictNode(second, new DictNode(first));
      } else {
        if (map[first] !== undefined) {
          let tail = map[first];

          while (tail.next) {
            tail = tail.next;
          }

          tail.next = new DictNode(second);
          map[second] = new DictNode(second, new DictNode(first));
        }

        if (map[second] !== undefined) {
          let tail = map[second];

          while (tail.next) {
            tail = tail.next;
          }

          tail.next = new DictNode(first);
          map[first] = new DictNode(first, new DictNode(second));
        }

        if (map[first] === undefined && map[second] === undefined) {
          map[first] = new DictNode(first, new DictNode(second));
          map[second] = new DictNode(second, new DictNode(first));
        }
      }
    }

    const queries = cs.queries;

    const res = [];

    for (const query of queries) {
      let [first, second] = query;

      first = first.toLowerCase();
      second = second.toLowerCase();

      if (first === second) {
        res.push('synonyms');
        continue;
      }

      const firstPool = getValuesFromLinkedList(map[first]);
      const secondPool = getValuesFromLinkedList(map[second]);

      const mergedPool = [...firstPool, ...secondPool];

      if (mergedPool.includes(first) && mergedPool.includes(second)) {
        res.push('synonyms');
      } else {
        res.push('different');
      }
    }

    console.log(res);
  }
}

function getValuesFromLinkedList(list) {
  const values = [];
  let pointer = list;

  while (pointer) {
    values.push(pointer.value);
    pointer = pointer.next;
  }

  return values;
}

const test = {
  T: 2,
  testCases: [
    {
      N: 4,
      Q: 6,
      dictionary: [
        ['big', 'large'],
        ['large', 'huge'],
        ['small', 'little'],
        ['apple', 'banana'],
      ],
      queries: [
        ['same', 'same'],
        ['big', 'huge'],
        ['huge', 'big'],
        ['apple', 'peach'],
        ['big', 'tall'],
        ['peach', 'PEACH'],
      ],
    },
    {
      N: 5,
      Q: 2,
      dictionary: [
        ['wood', 'FORest'],
        ['meadoW', 'PrAirIe'],
        ['WOOD', 'Lumber'],
        ['lumber', 'forest'],
        ['lumber', 'forest'],
      ],
      queries: [
        ['wood', 'LUMBER'],
        ['mEADOw', 'fire'],
      ],
    },
  ],
};

solution(test);
