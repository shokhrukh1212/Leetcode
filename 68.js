/**
 * https://leetcode.com/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  const sSet = new Set(s.split(""));
  const tSet = new Set(t.split(""));
  if (Array.from(sSet).length !== Array.from(tSet).length) return false;

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], t[i]);
    } else if (map.get(s[i]) !== t[i]) {
      return false;
    }
  }

  return true;
};

console.log(isIsomorphic("badc", "baba"));
// false
