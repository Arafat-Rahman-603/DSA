var maxProfit = function (prices) {

    let buy;
    let ind = 0;
    let sell = 0;

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

    while (ind < prices.length - 1) {
        if (prices[ind] > prices[ind + 1]) {
            sell = prices[ind];
        }
        ind++
    }

    return (sell - buy);

};

console.log(maxProfit([1, 4, 3, 6, 1]));
