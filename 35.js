/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 */

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (str) {
  // creating a hash map
  const hashMap = new Map();

  // setting each string item for a hash map
  for (let s of str) {
    if (!hashMap.has(s)) {
      hashMap.set(s, 1);
    } else {
      const valueOf = hashMap.get(s);
      hashMap.set(s, valueOf + 1);
    }
  }

  // checking which str item has a value of 1
  for (let i = 0; i < str.length; i++) {
    const valueOfS = hashMap.get(str[i]);
    if (valueOfS === 1) return i;
  }

  return -1;
};

console.log(firstUniqChar("leetcode"));
