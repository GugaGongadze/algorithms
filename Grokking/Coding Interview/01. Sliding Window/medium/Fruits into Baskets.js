function fruitsIntoBaskets(fruits) {
  let selected = new Set();
  let start = 0;
  let fruitCount = 0;

  for (let end = 0; end < fruits.length; end++) {
    selected.add(fruits[end]);

    while (selected.size > 2) {
      selected.delete(fruits[start]);
      start++;
    }

    fruitCount = Math.max(fruitCount, end - start + 1);
  }

  return fruitCount;
}

console.log(fruitsIntoBaskets(['A', 'B', 'C', 'A', 'C'])); // 3
console.log(fruitsIntoBaskets(['A', 'B', 'C', 'B', 'B', 'C'])); // 5

/**
 * Time Complexity:
 * The above algorithm’s time complexity will be O(N), where ‘N’ is the number of characters in the input array.
 * The outer for loop runs for all characters, and the inner while loop processes each character only once;
 * therefore, the time complexity of the algorithm will be O(N+N), which is asymptotically equivalent to O(N).
 * Space Complexity#
 * The algorithm runs in constant space O(1) as there can be a maximum of three types of fruits stored in the frequency map.
 */
