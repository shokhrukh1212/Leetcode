/**
 * https://leetcode.com/problems/counting-bits/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (n) {
  const binarys = [];

  for (let i = 0; i <= n; i++) {
    binarys.push(i.toString(2));
  }

  return binarys.map((item) => {
    const arr = item
      .split("")
      .filter((str) => str === "1")
      .join("");
    return arr.length;
  });
};

console.log(countBits(5));
// [0,1,1,2,1,2]
