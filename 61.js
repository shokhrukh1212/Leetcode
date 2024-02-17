/**
 * https://leetcode.com/problems/n-th-tribonacci-number/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number} n
 * @return {number}
 */
const hashMap = new Map();

const tribonacci = function (n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  if (hashMap.has(n)) {
    return hashMap.get(n);
  } else {
    const result = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
    hashMap.set(n, result);
    return result;
  }
};

console.log(tribonacci(25));
// 1389537
