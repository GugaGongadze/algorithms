/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
  let stv = 0;
  return A.map((bit) => {
    stv = stv * 2 + bit;
    //adding 1 binary bit means whether the number gets doubled (if add 0) or gets doubled and plus 1 (if add 1)
    //Example: decimal 2 is 10 in binary. If add 0 in binary: 10 will be 100 which is 4 in decimal (the number gets doubled). If add 1 in binary: 10 will be 101 which is 5 in decimal(the number gets doubled and plus 1).
    stv %= 5;
    //to prevent overflow
    return stv == 0;
  });
};

console.log(
  prefixesDivBy5([
    1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0,
    1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1,
  ])
);
