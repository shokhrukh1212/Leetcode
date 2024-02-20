/**
 * https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  for (let item of magazine) {
    ransomNote = ransomNote.replace(item, "");
  }

  return !ransomNote;
};

console.log(canConstruct("aa", "aab"));
// true
