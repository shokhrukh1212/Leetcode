/**
 * https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (str) {
  return str
    .split(" ")
    .reverse()
    .filter((s) => s !== "")
    .join(" ");
};
console.log(reverseWords("     hello      world     "));
// "world hello"
