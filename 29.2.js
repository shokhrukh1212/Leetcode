/**
 * https://leetcode.com/problems/find-the-difference/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
  for (let letter of s) t = t.replace(letter, "");
  return t;
};

console.log(findTheDifference("abcd", "abcde"));
// "e"
