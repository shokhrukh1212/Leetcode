/**
 * https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isSubsequence = function (s, t) {
  if (s.length > t.length) return false;
  let p1 = 0;
  let p2 = 0;

  while (p1 < s.length && p2 < t.length) {
    if (s[p1] !== t[p2]) {
      p2++;
    } else {
      p1++;
      p2++;
    }
  }

  return p1 === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
// true
