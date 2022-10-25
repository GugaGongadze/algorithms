var Trie = function () {
  this.trie = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  const [firstChar] = word;

  this.trie[firstChar] = this.trie[firstChar] || {};

  let temp = this.trie[firstChar];

  for (let i = 1; i < word.length; i++) {
    const char = word[i];

    if (!(char in temp)) {
      temp[char] = {};
    }

    temp = temp[char];
  }

  temp.null = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let temp = this.trie;
  console.log('temp', temp);

  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (!(char in temp)) return false;

    temp = temp[char];
  }

  return !!temp.null;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let temp = this.trie;

  for (let i = 0; i < prefix.length; i++) {
    const char = prefix[i];

    if (!(char in temp)) return false;

    temp = temp[char];
  }

  return true;
};

var trie = new Trie();
// trie.insert('apple');
console.log(trie.search('apple')); // return True
// console.log(trie.search('app')); // return False
// console.log(trie.startsWith('app')); // return True
// console.log(trie.insert('app'));
// console.log(trie.search('app')); // return True
