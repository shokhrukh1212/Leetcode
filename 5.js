/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (str) {
  if (str.length === 0) return 0;

  const hashMap = new Map();
  let soFarLength = 0;
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (!hashMap.has(str[i])) {
      hashMap.set(str[i], true);
      soFarLength += 1;
    } else {
      hashMap.clear();
      hashMap.set(str[i], true);

      if (i > 0 && str[i - 1] !== str[i]) soFarLength = 2;
      else soFarLength = 1;
    }

    if (soFarLength > result) {
      result = soFarLength;
    }
  }

  return result;
};

console.log(lengthOfLongestSubstring("dvdf"));
// abc
