/**
 * https://leetcode.com/problems/add-digits/
 */

/**
 * @param {number} num
 * @return {number}
 */

/**
 *  Input: num = 38
    Output: 2
    Explanation: The process is
    38 --> 3 + 8 --> 11
    11 --> 1 + 1 --> 2 
    Since 2 has only one digit, return it.
 */
const addDigits = function (num) {
  let sum = addNumbers(num);

  while (sum.toString().length !== 1) {
    sum = addNumbers(sum);
  }

  return sum;
};

function addNumbers(num) {
  let sum = 0;
  while (num > 0) {
    digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }

  return sum;
}
console.log(addDigits(38));
// 2
