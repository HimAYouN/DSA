// https://leetcode.com/problems/counting-bits/


/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const dp = new Array(n+1).fill(0)
    let offset = 1
    for(let i = 1; i<=n; i++){
        if (offset * 2 == i){ offset = i}
         dp[i] = 1 + dp[i-offset]
    }
    return dp
};

// var countBits = function(n) {
//     const arr = new Array(n+1)
//     let prevCount = 0
//     let prevIndex = 0
//     for(let i = 0; i<=n; i++){
//             let count = prevCount
//             let j = i+prevIndex
//         while(j>0){
//             count += j%2 
//             j = j>>1

//         }
//         arr[i] = count
//     }
//     return arr
// }