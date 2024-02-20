/**
 * https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const map = new Map();

  // setting magazine letters to a map
  for (let m of magazine) {
    if (map.has(m)) {
      map.set(m, map.get(m) + 1);
    } else {
      map.set(m, 1);
    }
  }

  // checking map items with ransomNote
  for (let r of ransomNote) {
    if (!map.has(r) || map.get(r) === 0) {
      return false;
    } else {
      map.set(r, map.get(r) - 1);
    }
  }

  return true;
};

console.log(canConstruct("aa", "aab"));
// true
