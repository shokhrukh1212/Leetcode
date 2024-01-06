/**
 * https://leetcode.com/problems/flatten-deeply-nested-array/
 */

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
const flat = function (arr, n) {
  const result = [];

  // Recursive solution
  arr.map((item) => {
    if (Array.isArray(item) && n > 0) {
      result.push(...flat(item, n - 1));
    } else {
      result.push(item);
    }
  });

  return result;
};

console.log(
  flat(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, [9, 10, 11], 12],
      [13, 14, 15],
    ],
    2
  )
);

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
