/**
 * https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript
 */

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function (init) {
  let count = init;

  return {
    increment: function () {
      return ++count;
    },
    reset: function () {
      count = init;
      return count;
    },
    decrement: function () {
      return --count;
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
