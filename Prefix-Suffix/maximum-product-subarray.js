
// https://leetcode.com/problems/maximum-product-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let n = nums.length;
    let prefix = nums[0];
    let suffix = nums[n - 1];
    let best = nums[0]

    maxCaller()
    for (let i = 1; i < n; i++) {
        if (prefix == 0) prefix = 1
        if (suffix == 0) suffix = 1

        prefix = prefix * nums[i]
        suffix = suffix * nums[n - i - 1]
        maxCaller()

    }
    return best

    function maxCaller() {
        best = max(prefix, best)
        best = max(suffix, best)
    }

    function max(a, b) {
        if (a > b) return a
        return b
    }

};



