/**
 * https://leetcode.com/problems/longest-common-prefix/
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";

  for (let i = 0; i < strs[0].length; i++) {
    const isTrue = strs.every((item) => item[i] === strs[0][i]);
    console.log(isTrue);

    if (isTrue) result += strs[0][i];
    else break;
  }

  return result;
};
