/**
 * https://leetcode.com/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;
  const map1 = new Map();
  const map2 = new Map();
  for (let idx = 0; idx < s.length; idx++) {
    if (map1.get(s[idx]) !== map2.get(t[idx])) return false;

    map1.set(s[idx], idx + 1);
    map2.set(t[idx], idx + 1);
  }
  return true;
};

console.log(isIsomorphic("paper", "title"));
// true
