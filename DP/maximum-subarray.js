// https://leetcode.com/problems/maximum-subarray/



//BRUTE : TWO FOR LOOPS 


// OPTIMISED : KADANE ALGO



/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
     let cur = nums[0];
     let best = nums[0];

    for(let i =1; i<nums.length;i++) {
        cur= max(nums[i], cur+nums[i]);
        best = max(best, cur)

    }
    return best

};


function max(a,b){
    if(a>b)return a 
    return b
}