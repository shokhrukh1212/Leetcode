/**
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 */

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
  const vow = s.match(/[aeiou]/gi);
  return s.replace(/[aeiou]/gi, (el) => vow.pop());
};
