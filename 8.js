/**
 * https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = (s, k) => {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  let max = 0; // max number of vowels in any window
  let current = 0; // number of vowels in the current window

  // Count the total number of vowels from the first window
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) max++;
  }

  if (max === k) return max; // return if the `k` is hit

  current = max; // set the current to the max

  // Sliding window technique
  for (let i = 1; i <= s.length - k; i++) {
    if (vowels.has(s[i - 1])) current--; // removing the left-most vowel
    if (vowels.has(s[i + k - 1])) current++; // adding the right-most vowel

    if (current === k) return current; // return if the `k` is hit
    if (current > max) max = current; // set `max` to the `current` value, if greater
  }

  return max;
};

console.log(maxVowels("abciiidef", 3));
// 3
