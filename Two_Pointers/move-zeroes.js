// https://leetcode.com/problems/move-zeroes/
// https://dsa.chaicode.com/two-pointers/move-zeroes



/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 //     BRUTE    //
// var moveZeroes = function(nums) {
//     const arr2 = new Array(nums.length).fill(0)
//     let index = 0;

//     for(let i = 0; i<=nums.length-1; i++){
//         if(nums[i] !== 0){
//             arr2[index] = nums[i]
//             index++;
//         }
//     }
//     for(let i = 0; i<nums.length; i++){
//         nums[i] = arr2[i]
//     }
// };


//      OPTIMIZED    ///
var moveZeroes = function(nums) {
    let slow = 0;
    for(fast= 0; fast<nums.length; fast++){
        if(nums[fast]!=0){
            let temp = nums[slow]
            nums[slow] = nums[fast]
            nums[fast] = temp
            slow++
        }
    }
}


const nums = [2,0,3,4,0,9]
moveZeroes(nums)
console.log(nums)