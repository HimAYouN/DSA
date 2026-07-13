// https://dsa.chaicode.com/two-pointers/container-with-most-water
// https://leetcode.com/problems/container-with-most-water/description/


/**
 * @param {number[]} height
 * @return {number}
 */

//        BRUTE    //
// var maxArea = function(height) {
//     let max = 0;
//     let n = height.length
//     for(let i = 0; i<=n-2; i++){
//         for(j = i+1; j<=n-1; j++){
//             let area = (j-i) * min(height[i], height[j]);
//             if(area>max) max = area;
//         }
//     }
//     return max
// };


//     OPTIMIZED    //
var maxArea = function(height) {
    let max = 0; 
    let left = 0;
    let right = height.length-1;

    while(left<right){
        let area = (right-left) * min(height[left], height[right])
        if(area>max) max= area;

        
        if(height[left]>height[right]) right--
        else left++
    }
    return max
}

function min(a, b){
    if(a<b) return a
    return b
}
function max(a,b){
    if(a<b) return b
    return a
}