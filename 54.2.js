/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (!needle) return 0;
  for (let i = 0; i < haystack.length; i++) {
    let isMatch = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) return i;
  }
  return -1;
};
