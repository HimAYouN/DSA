// https://leetcode.com/problems/number-of-1-bits/

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    // let a =  (n>>>0).toString(2)
    // let c = 0
    // a.split("").forEach((b)=>{if(b==1)c+=1})
    // return c

    let count = 0
    while(n>0){
        count = count + (n%2)
        n= n>>1
    }
    return count
};