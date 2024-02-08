/**
 * https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
  let p1 = 0,
    p2 = 0;
  let result = "";

  while (p1 < word1.length && p2 < word2.length) {
    result += word1[p1];
    result += word2[p2];

    p1++;
    p2++;
  }

  if (p1 < word1.length) {
    result += word1.slice(p1);
  } else {
    result += word2.slice(p2);
  }

  return result;
};

console.log(mergeAlternately("abc", "pqreee"));
// "apbqcreee"
