/**
 * https://leetcode.com/problems/unique-number-of-occurrences/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
  const hashMap = new Map();
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (hashMap.has(arr[i])) {
      let value = hashMap.get(arr[i]);
      hashMap.set(arr[i], ++value);
    } else {
      hashMap.set(arr[i], 1);
    }
  }

  for (let value of hashMap.values()) {
    set.add(value);
  }

  return set.size === hashMap.size;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
// true
