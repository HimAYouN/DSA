// https://leetcode.com/problems/product-of-array-except-self/


// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function(nums) {
//     const n = nums.length
//     const ans = new Array(n).fill(1)

//     const prefix = new Array(n).fill(1)
//     const postfix = new Array(n+1).fill(1)

//     let prev = 1
//     for(let i = 0; i<n ; i++) {
//         if(i!==0){prev=prefix[i-1]
//         }else{
//         prev= 1

//         }
//         prefix[i] = prev*nums[i]
//     }
//     for(let j = n-1; j>=1; j--) {
//         prev=postfix[j+1]
//         postfix[j]=prev*nums[j]
//     }
//     for(let i = 0;i<n;i++) {
//         if(i!==0){ans[i] = prefix[i-1]*postfix[i+1]
//         }else{
//             ans[i] = postfix[i+1]
//         }
        
//     }
    
//     return ans
// };\


// MORE OPTIMISED ///

var productExceptSelf = function(nums) {
    const n = nums.length
    const ans = new Array()

    let prefix = 1
    let postfix = 1

    for(let i = 0; i<n ; i++) {
        ans[i]=prefix
        prefix = prefix*nums[i]

    }
    console.log(ans)
    for(let j = n-1; j>=0; j--) {
        ans[j]=postfix*ans[j]
        postfix=postfix*nums[j]
    }
    console.log(ans)
    
    
    return ans
};

productExceptSelf([-1,1,0,-3,3])