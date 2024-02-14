/**
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function (candies, extraCandies) {
  const maxCandy = Math.max(...candies);
  const result = candies.map((item) => item + extraCandies >= maxCandy);
  return result;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
// [true,true,true,false,true]
