/**
 * https://leetcode.com/problems/find-the-highest-altitude/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function (gain) {
  const result = [];
  result[0] = gain[0];
  for (let i = 1; i < gain.length; i++) {
    result[i] = result[i - 1] + gain[i];
  }

  const maxPoint = Math.max.apply(null, result);

  return maxPoint > 0 ? maxPoint : 0;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
// 1
