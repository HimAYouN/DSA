/**
 * @param {number[]} nums
 * @return {number}
 */

 //     BRUTE     //
// var triangleNumber = function(nums) {
//     nums.sort((a,b)=> a-b)
//     let count = 0
//     for(let i = 0; i<=nums.length-3; i++){
//         for(let j = i+1; j<=nums.length-2; j++){
//             for (let k = j+1; k<=nums.length-1; k++){
//                 let isTriangle = nums[i]+nums[j]>nums[k]
//                 if(isTriangle){
//                     count++
//                 } 
//             }
//         }
//     }
//     return count
// };

 var triangleNumber = function(nums) {
    nums.sort((a,b)=> a-b)
    let count = 0
    for(let k = nums.length-1;k>=2; k--){
        let L = 0;
        let R = k-1;
        while(L<R){
            let isTriangle = nums[L]+nums[R]>nums[k]
            console.log( nums[L],nums[R],nums[k],isTriangle)
            if(isTriangle){
                count = count + ( R-L)
                R--
            }else{
                L++
            }
        }
    }
    return count
 }

 console.log(triangleNumber([7,0,0,0]))