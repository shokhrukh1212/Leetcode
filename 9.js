/**
 * https://leetcode.com/problems/removing-stars-from-a-string/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {string} s
 * @return {string}
 */
const removeStars = function (s) {
  const stack = [];

  for (let item of s) {
    if (item !== "*") {
      stack.push(item);
    } else if (stack.length > 0) {
      stack.pop();
    }
  }

  return stack.join("");
};

console.log(removeStars("leet**cod*e"));
// "lecoe"
