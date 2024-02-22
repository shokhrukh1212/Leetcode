/**
 * https://leetcode.com/problems/rotate-string/
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;

  let newStr = "";
  let p = 0;

  while (p < s.length) {
    if (s[p] !== goal[0]) {
      newStr += s[p];
      p++;
    } else {
      const str = s.substring(p);
      console.log(newStr);
      console.log(str);
      if (str.concat(newStr) === goal) return true;
      newStr += s[p];
      p++;
    }
  }

  return false;
};

console.log(rotateString("bbbacddceeb", "ceebbbbacdd"));
// true
