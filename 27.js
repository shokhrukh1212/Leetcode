/**
 * https://leetcode.com/problems/happy-number/
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  const hashMap = hashNumbers();
  const strOfNum = n.toString();
  let sum = 0;

  if (n < 10) {
    if (n === 1 || n === 7) {
      return true;
    }
    return false;
  }

  for (let str of strOfNum) {
    if (hashMap.has(Number(str))) {
      sum += hashMap.get(Number(str));
    }
  }

  console.log(sum);

  if (sum === 1) {
    return true;
  } else {
    return isHappy(sum);
  }
};

const hashNumbers = () => {
  const hashMap = new Map();
  for (let i = 0; i < 10; i++) {
    hashMap.set(i, i * i);
  }

  return hashMap;
};
console.log(isHappy(2));
