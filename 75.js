/**
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
  const map = new Map();
  const result = [];

  for (let i of nums) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) {
      result.push(i);
    }
  }

  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
// [5, 6]
