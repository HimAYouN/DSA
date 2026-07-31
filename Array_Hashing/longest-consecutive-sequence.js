// https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function(nums) {
//     nums.sort((a,b)=>a-b)
//     let count = 1;
//     let max = 0;
//     if(nums.length >= 1) max = 1
//     for(let i = 1; i<nums.length; i++){
//         if(nums[i] == nums[i-1]+1){
//             count++
//         }else if(nums[i] == nums[i-1]){
//             continue;
//         }
//         else{
//             count = 1
//         }

//         if(count > max ) max = count
//     }
//     return max
// };

function longestConsecutive(nums) {
     const set = new Set(nums)
    // console.log(set)
    let count = 0
    let max = 0
    if(nums.length>=1) max = 1
    for(const value of set) {
        console.log(value)
        if(!set.has(value-1)){
            count = 1;
            while(set.has(value+count)){
                count += 1
            }
            max = maxi(max, count)
        }
    }
    return max
    
}

function maxi(a,b ) {
    if(a>b) return a 
    return b
}

longestConsecutive([100,2,4,200,1,3,2])