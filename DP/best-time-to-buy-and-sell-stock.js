https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n =prices.length
    let min = Number.MAX_VALUE
    let maxProfit = 0
    for(let i = 0; i<n; i++) {
        let cost = prices[i];

        if(prices[i]<min) min= prices[i]
        let profit = cost-min
        if(profit>maxProfit) maxProfit = profit 
        
        // for(let j= 0; j<min.length; j++){
            

        // }
    }
    return maxProfit
};