const findSI = function (m, n, p) {
  if (m.length + n.length !== p.length) return false;

  let mi = 0;
  let ni = 0;
  let pi = 0;

  while (pi < p.length) {
    const mChar = m[mi];
    const nChar = n[ni];
    const pChar = p[pi];

    if (pChar !== nChar && pChar !== mChar) return false;

    if (pChar === nChar) {
      ni++;
    } else {
      mi++;
    }

    pi++;
  }

  return true;
};

console.log(findSI('abd', 'cef', 'abcdef'));
console.log(findSI('abd', 'cef', 'adcbef'));
console.log(findSI('abc', 'def', 'abdccf'));
console.log(findSI('abcdef', 'mnop', 'mnaobcdepf'));
