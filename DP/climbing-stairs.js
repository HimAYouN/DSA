// 



/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {


    // TABULATION IN LESS SPACE
    let first = 1
    let second = 1
    for (let i = 2; i<=n; i++) {
        let temp = first;
        first= first+ second;
        second = temp;
    }
    return first

    //TABULATION
    // const dp = new Array()
    // dp[0] = 1
    // dp[1] = 1
    // for (let i = 2; i<=n; i++) {
    //     dp[i]= dp[i-1] + dp[i-2]
    // }
    // return dp[n]


    //RECURSSION 
    // if(n<=1) return 1
    // return climbStairs(n-1) + climbStairs(n-2)
};