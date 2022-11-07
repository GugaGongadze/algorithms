var TimeMap = function () {
  this.memo = {};
  this.timeMap = [];
  this.minTime = 0;
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  this.timeMap[timestamp] = { [key]: value };
  this.minTime = Math.min(this.minTime, timestamp);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  this.memo[key] = this.memo[key] || [];

  if (this.memo[key][timestamp]) return this.memo[key][timestamp];

  this.memo[key][timestamp] = '';

  for (let i = timestamp; i >= this.minTime; i--) {
    const element = this.timeMap[i];
    if (element && element[key]) {
      this.memo[key][timestamp] = element[key];
      break;
    }
  }

  return this.memo[key][timestamp];
};

var obj = new TimeMap();
// obj.set('ctondw', 'ztpearaw', 1);
// obj.set('vrobykydll', 'hwliiq', 2);
// obj.set('gszaw', 'ztpearaw', 3);
// obj.set('ctondw', 'gszaw', 4);
// console.log(obj.get('gszaw', 5));

obj.set('foo', 'bar', 1);
console.log(obj.get('foo', 1));
console.log(obj.get('foo', 3));
obj.set('foo', 'bar2', 4);
console.log(obj.timeMap);
console.log(obj.get('foo', 4));
console.log(obj.get('foo', 5));

// [
//   'TimeMap',
//   'set',
//   'set',
//   'set',
//   'set',
//   'get',
//   'get',
//   'get',
//   'get',
//   'get',
//   'get',
//   'set',
//   'get',
//   'get',
//   'get',
//   'set',
//   'set',
//   'set',
//   'set',
//   'get',
//   'get',
// ][
//   ([],
//   ['ctondw', 'ztpearaw', 1],
//   ['vrobykydll', 'hwliiq', 2],
//   ['gszaw', 'ztpearaw', 3],
//   ['ctondw', 'gszaw', 4],
//   ['gszaw', 5],
//   ['ctondw', 6],
//   ['ctondw', 7],
//   ['gszaw', 8],
//   ['vrobykydll', 9],
//   ['ctondw', 10],
//   ['vrobykydll', 'kcvcjzzwx', 11],
//   ['vrobykydll', 12],
//   ['ctondw', 13],
//   ['vrobykydll', 14],
//   ['ztpearaw', 'zondoubtib', 15],
//   ['kcvcjzzwx', 'hwliiq', 16],
//   ['wtgbfvg', 'vrobykydll', 17],
//   ['hwliiq', 'gzsiivks', 18],
//   ['kcvcjzzwx', 19],
//   ['ztpearaw', 20])
// ];
