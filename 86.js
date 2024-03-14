/**
 * https://leetcode.com/problems/timeout-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript
 */
const cancellable = function (fn, args, t) {
  // cancelFn function//
  const cancelFn = function () {
    clearTimeout(timer);
  };
  const timer = setTimeout(() => {
    fn(...args);
  }, t);
  return cancelFn;
};
