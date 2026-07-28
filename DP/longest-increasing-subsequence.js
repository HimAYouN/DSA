//  https://leetcode.com/problems/longest-increasing-subsequence/


/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const arr = new Array(nums.length).fill(1);
    let best = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                arr[i] = max(arr[i], 1 + arr[j])
            }
            best = max(best, arr[i])
        }

    }
    return best


};

function max(a, b) {
    if (a > b) return a
    return b
}