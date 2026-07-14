//https://leetcode.com/problems/sort-colors/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


//BRUTE
// var sortColors = function(nums) {
//     let count = [0,0,0]
//     //COUNTING
//     for(let i = 0; i<nums.length; i++){
//         count[nums[i]] = count[nums[i]] +1
//     }
//     //WRITING
//     let zeros = count[0]
//     let ones = count[1]
//     let twos = count[2]


//     for(let i = 0; i<nums.length; i++){
//         if(zeros>0){
//             nums[i] = 0;
//             zeros--;
//         }else if(ones>0){
//             nums[i] = 1
//             ones--;
//         }else if(twos>0){
//             nums[i] = 2;
//             twos--;
//         }
//     }

// };


// BETTER //
// var sortColors = function(nums) {
//     let write = 0

//     for(let i = 0; i<nums.length; i++){
//         if (nums[i]== 0){
//             let temp = nums[write]
//             nums[write] = nums[i]
//             nums[i] = temp
//             write++
//         }
//     }
//     // console.log("WRITE" , write+1)
//     let back = nums.length-1
//     for(let i = write; i<back;){
//         // console.log("i: ", i)
//         if(nums[i]==2){
//             let temp = nums[back]
//             nums[back] = nums[i]
//             nums[i] = temp
//             back--
//         }else{
//              i++
//         }
//     }
// }


//OPTIMISED 




const arr = [2, 0, 2, 1, 1, 0, 1]
const arr2 = [1, 2, 1]
const arr3 = [2, 0, 2, 1, 1, 0]
sortColors(arr)
sortColors(arr2)
sortColors(arr3)
console.log(arr)
console.log(arr2)
console.log(arr3)