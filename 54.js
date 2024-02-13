/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (haystack === needle || needle === "") {
    return 0;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let substr = haystack.substring(i, i + needle.length);
      if (substr === needle) return i;
    }
  }

  return -1;
};

console.log(strStr("sadbutsad", "sad"));
// 0
