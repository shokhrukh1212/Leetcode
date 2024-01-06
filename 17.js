/**
 * https://leetcode.com/problems/valid-palindrome/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (str) {
  const firstStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); // first string without non-alphanumeric characters
  const secondStr = Array.from(str)
    .reverse()
    .join("")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase(); // // second reversed string without non-alphanumeric characters

  return firstStr === secondStr;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// true
