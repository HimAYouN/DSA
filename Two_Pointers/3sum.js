// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let n = nums.length
    let left;
    let right;
    const ansArr = new Array()

    nums.sort((a, b) => a - b)



    for (let i = 0; i <= n - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) { i++ }


        left = i + 1; right = n - 1;
        while (left < right) {
            let sum = (nums[i] + nums[left] + nums[right])
            console.log("sum", sum, "i", i, "left", left, "right", right)
            if (sum == 0) {
                // CHECK DUPLICATES 
                ansArr.push([nums[i], nums[left], nums[right]])
                console.log(ansArr)
                left++
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


var threeSum2 = function (nums) {
    let n = nums.length
    let left;
    let right;
    const ansArr = new Array()
    nums.sort((a, b) => a - b)


    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = n - 1;
        while (left < right) {
            let sum = (nums[i] + nums[left] + nums[right])
            if (sum == 0) {
                //check duplicates

                let temp = [nums[i], nums[left], nums[right]]

                ansArr.push(temp)
                left++

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


console.log(threeSum2([-11, 0, 1, 21, 32, 24, 2, 12, 22, 4, 5, -1, -4]))
console.log(threeSum2([0, 0, 0, 0]))