/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const sMap = {};
  const tMap = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (sChar in tMap && tMap[sChar] !== tChar) return false;
    if (tChar in sMap && sMap[tChar] !== sChar) return false;

    tMap[sChar] = tChar;
    sMap[tChar] = sChar;
  }

  return true;
};

console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
console.log(isIsomorphic('badc', 'baba')); // false
