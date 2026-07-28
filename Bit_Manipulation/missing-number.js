// https://leetcode.com/problems/missing-number/


/**
 * @param {number[]} nums
 * @return {number}
 */


var missingNumber = function(nums) {
    let missing = 0;
    for(let i = 0; i<nums.length; i++){
        missing = missing ^ i
        missing = missing ^ nums[i]
    }
    return nums.length^0 + missing

    
};

// var missingNumber = function(nums) {
//     // let expected = 0;
//     // let actual = 0
//     // for(let i = 0; i<nums.length; i++){
//     //     expected +=i;
//     //     actual += nums[i]
//     // }
//     // expected += nums.length
//     // return expected-actual

//     let actual = 0
//     for(let i = 0; i<nums.length; i++){
//         actual = i - nums[i] + actual
//     }
//     actual += nums.length
//     return actual
// };