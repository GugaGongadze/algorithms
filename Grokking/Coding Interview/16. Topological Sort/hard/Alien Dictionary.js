const find_order = function (words) {
  const edges = [];
  const processedPair = {};
  const uniqueLetters = new Set();

  // Build edges
  for (let idx = 0; idx < words.length; idx++) {
    const word = words[idx];
    const nextWord = words[idx + 1];

    if (!nextWord) break;

    let first = 0;
    let second = 0;

    while (first < word.length && second < nextWord.length) {
      const firstLetter = word[first];
      const secondLetter = nextWord[second];

      uniqueLetters.add(firstLetter);
      uniqueLetters.add(secondLetter);

      if (firstLetter === secondLetter) {
        first++;
        second++;
      } else {
        if (processedPair[firstLetter + secondLetter]) break;

        processedPair[firstLetter + secondLetter] = true;

        edges.push([firstLetter, secondLetter]);
        break;
      }
    }
  }

  const sortedGraph = [];

  const inDegree = {};
  uniqueLetters.forEach((letter) => {
    inDegree[letter] = 0;
  });

  const graph = {};
  uniqueLetters.forEach((letter) => {
    graph[letter] = [];
  });

  for (let idx = 0; idx < edges.length; idx++) {
    const [parent, child] = edges[idx];

    graph[parent].push(child);
    inDegree[child]++;
  }

  const sourceVertices = Object.entries(inDegree).reduce((acc, curr) => {
    const [letter, frequency] = curr;

    if (frequency === 0) return [...acc, letter];

    return acc;
  }, []);

  while (sourceVertices.length) {
    const vertex = sourceVertices.shift();

    sortedGraph.push(vertex);

    for (const child of graph[vertex]) {
      inDegree[child]--;

      if (inDegree[child] === 0) {
        sourceVertices.push(child);
      }
    }
  }

  if (sortedGraph.length !== uniqueLetters.size) return;

  return sortedGraph;
};

console.log(`Character order: ${find_order(['ba', 'bc', 'ac', 'cab'])}`);
console.log(`Character order: ${find_order(['cab', 'aaa', 'aab'])}`);
console.log(`Character order: ${find_order(['ywx', 'wz', 'xww', 'xz', 'zyy', 'zwz'])}`);
