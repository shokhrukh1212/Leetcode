/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let buy = prices[0];
  let max_profit = 0;

  for (let price of prices) {
    if (price < buy) {
      // if the price is less then buy price, we can buy at this price
      buy = price;
    } else if (price - buy > max_profit) {
      // if price is greater than buy price, check if profit from them is greater than our max_profit
      max_profit = price - buy;
    }
  }

  return max_profit; // return max_profit from the stock prices
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// 5
