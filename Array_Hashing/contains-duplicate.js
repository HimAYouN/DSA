// https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */


//       BRUTE .//
// 2 Nested for loops

//OPTIMIZED

var containsDuplicate = function(nums) {
    const seen = new Map()
    let contains = false
    for (let i = 0; i <nums.length; i++){
        if(seen.has(nums[i])){
            contains = true
        }
        seen.set(nums[i], i)
    }
    return contains
};