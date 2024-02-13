/**
 * https://leetcode.com/problems/integer-to-roman/
 */

/**
 * @param {number} num
 * @return {string}
 */

const intToRoman = function (num) {
  let result = "";
  const symbols = [
    ["I", 1],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000],
  ];

  for (const symbol of symbols.reverse()) {
    if (num / symbol[1]) {
      result += symbol[0].repeat(num / symbol[1]);
      num = num % symbol[1];
    }
  }

  return result;
};

console.log(intToRoman(21));
// "XXI"
