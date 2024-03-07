/**
 * https://leetcode.com/problems/sleep/?envType=study-plan-v2&envId=30-days-of-javascript
 */

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise(function (resolve) {
    setTimeout(resolve, millis);
  });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
