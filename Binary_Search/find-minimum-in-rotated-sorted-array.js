// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0; 
    let high = nums.length-1
    let mid = 0;

    while (low<high) {
        mid = parseInt((high+low)/2)
        if(nums[mid]>nums[high]){
            low = mid+1
        } else{
            high = mid
        }
    }
    return nums[low]
};