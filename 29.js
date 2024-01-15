/**
 * https://leetcode.com/problems/find-the-difference/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
  const lettersArray = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    lettersArray[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    lettersArray[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  lettersArray[t.charCodeAt(t.length - 1) - "a".charCodeAt(0)]--;

  for (let i = 0; i < lettersArray.length; i++) {
    if (lettersArray[i] !== 0) {
      console.log("a".charCodeAt(0) + i);
      console.log(i);
      return String.fromCharCode("a".charCodeAt(0) + i);
    }
  }
};

console.log(findTheDifference("abcd", "abcde"));
// "e"
