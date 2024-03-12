/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
const isEmpty = function (obj) {
  if (typeof obj === "object" && !Array.isArray(obj))
    return Object.keys(obj).length === 0;

  if (Array.isArray(obj)) return obj.length === 0;
};
