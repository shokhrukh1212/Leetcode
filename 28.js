/**
 * https://leetcode.com/problems/valid-anagram/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// My first solution
// const isAnagram = function (s, t) {
//   return (
//     s.split("").sort().join("").trim() === t.split("").sort().join("").trim()
//   );
// };

// Second and better solution
const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const lettersArray = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    lettersArray[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    lettersArray[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (let i = 0; i < lettersArray.length; i++) {
    if (lettersArray[i] !== 0) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
// true

console.log(isAnagram("rat", "car"));
// false
