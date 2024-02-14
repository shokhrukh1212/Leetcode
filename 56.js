/**
 * https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
  if (flowerbed.length === 1) {
    return flowerbed[0] === 0 || (flowerbed[0] === 1 && n === 0) ? true : false;
  }

  for (let i = 0; i < flowerbed.length; i++) {
    if (i === 0) {
      if (flowerbed[0] === 0 && flowerbed[1] === 0) {
        n--;
        flowerbed[0] = 1;
      }
    } else if (i === flowerbed.length - 1) {
      if (flowerbed.at(-2) === 0 && flowerbed.at(-1) === 0) {
        n--;
        flowerbed[flowerbed.length - 1] = 1;
      }
    } else if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      n--;
      flowerbed[i] = 1;
    }
  }

  return n <= 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
// true
