/**
 * https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript
 */

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async function (promise1, promise2) {
  return Promise.all([promise1, promise2]).then(function (results) {
    return results[0] + results[1];
  });
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
