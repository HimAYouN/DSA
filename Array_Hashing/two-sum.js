/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // BRUTE ALREADY DONE//
    //OPTIMIZED //
    const seen = new Map()
    for(let i = 0; i<nums.length;i++){
        let need = target - nums[i]
        if(seen.has(need)){
            return [(seen.get(need)), i]
        }
        seen.set(nums[i], i) //TICK
        console.log(seen)
    }
    return []
};

const arr = [2,7,11,15]
console.log(twoSum(arr, 9))