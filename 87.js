/**
 * https://leetcode.com/problems/word-pattern/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

const wordPattern = function (pattern, str) {
  const wordsArr = str.split(" ");

  // check if pattern and wordsArr have same length
  if (pattern.length !== wordsArr.length) return false;

  const patternMap = new Map();
  const wordMap = new Map();

  // check if pattern and wordsArr have same characters
  for (let i = 0; i < pattern.length; i++) {
    if (
      patternMap.has(pattern[i]) &&
      patternMap.get(pattern[i]) !== wordsArr[i]
    )
      return false;
    if (wordMap.has(wordsArr[i]) && wordMap.get(wordsArr[i]) !== pattern[i])
      return false;
    patternMap.set(pattern[i], wordsArr[i]);
    wordMap.set(wordsArr[i], pattern[i]);
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
// true
