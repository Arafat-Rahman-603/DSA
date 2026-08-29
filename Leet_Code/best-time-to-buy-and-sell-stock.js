/**
 * Calculates the maximum profit that can be achieved by buying and selling a stock.
 * @param {number[]} prices - An array of stock prices where prices[i] is the price on day i.
 * @returns {number} The maximum profit.
 */
var maxProfit = function (prices) {

    let buy;
    let ind = 0;
    let sell = 0;

    // Find the best day to buy.
    // We look for a price that is less than the next day's price and is the minimum seen so far.
    for (let i = 0; i < prices.length - 1; i++) {
        if (i === 0) {
            if (prices[i] < prices[i + 1]) {
                buy = prices[i]
                ind = i
            }
        } else {
            if (prices[i] < prices[i + 1] && buy > prices[i]) {
                buy = prices[i]
                ind = i
            }

        }
    }

    // Traverse from the buy day onward to find the best day to sell.
    // We look for a peak price before it drops.
    while (ind < prices.length - 1) {
        if (prices[ind] > prices[ind + 1]) {
            sell = prices[ind];
        }
        ind++
    }

    // Return the difference between sell and buy prices as profit.
    return (sell - buy);

};

// Test output for the maxProfit function with a sample array of prices.
console.log(maxProfit([1, 4, 3, 6, 1]));

