// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let n = nums.length
    const ansArr = new Array()

    nums.sort((a, b) => a - b)

    for (let i = 0; i <= n - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) { continue; }

        left = i + 1; right = n - 1;

        while (left < right) {
            let sum = (nums[i] + nums[left] + nums[right])

            if (sum == 0) {
                ansArr.push([nums[i], nums[left], nums[right]])
                left++;
                while (nums[left] == nums[left - 1] && left < right) {
                    left++
                }

            }
            else if (sum > 0) {
                right--
            } else {
                left++
            }
        }

    }
    return ansArr
};


// console.log(threeSum2([0,0,0]))





console.log(threeSum2([-11, 0, 1, 21, 32, 24, 2, 12, 22, 4, 5, -1, -4]))
console.log(threeSum2([0, 0, 0, 0]))