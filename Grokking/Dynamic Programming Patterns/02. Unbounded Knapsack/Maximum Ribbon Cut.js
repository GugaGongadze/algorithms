const countRibbonPieces = function (ribbonLengths, total) {
  function countRibbonPiecesRecursive(ribbonLengths, total, idx) {
    if (idx >= ribbonLengths.length) return Number.MIN_VALUE;

    if (total === 0) return 0;

    let inc = 0;
    if (total >= ribbonLengths[idx]) {
      const res = countRibbonPiecesRecursive(ribbonLengths, total - ribbonLengths[idx], idx);
      if (res !== Number.MIN_VALUE) {
        inc += res + 1;
      }
    }

    let exc = countRibbonPiecesRecursive(ribbonLengths, total, idx + 1);

    return Math.max(inc, exc);
  }

  const result = countRibbonPiecesRecursive(ribbonLengths, total, 0);
  return result === Number.MIN_VALUE ? -1 : result;
};

console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([2, 3, 5], 5)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([2, 3], 7)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([3, 5, 7], 13)}`);
console.log(`Maximum number of ribbons: ---> ${countRibbonPieces([3, 5], 7)}`);
