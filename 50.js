/**
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 */

/**
 * @param {string} s
 * @return {string}
 */

const isVowel = (c) => {
  return ["a", "e", "i", "o", "u"].indexOf(c.toLowerCase()) !== -1;
};

const reverseVowels = function (s) {
  const vowels = [];
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (isVowel(s[i])) {
      vowels.push(s[i]);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (isVowel(s[i])) {
      const lastVowel = vowels.pop();
      console.log(lastVowel);
      result += lastVowel;
    } else {
      result += s[i];
    }
  }

  return result;
};

console.log(reverseVowels("leetcode"));
// "leotcede"
