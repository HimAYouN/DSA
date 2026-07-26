// https://leetcode.com/problems/search-in-rotated-sorted-array/description/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let mid = 0;

    while(l<=r){
        mid= parseInt((l+r)/2)
        if(arr[mid]==target){
            return mid
        }
            // Left half is sorted
        if(arr[mid]>=arr[l]){
            //left side cancels
            if(arr[mid]<target){
                l=mid+1
            }
            // left side doesn't contains target
            else if (target < arr[l]){
                l=mid+1
            }
            // left side contains 
            else{
                r=mid-1
            }
        }
        //RIGHT half is sorted 
        else{
            //As the part of the array is sorted everything after mid pointer will become bigger, so this check is target is smaller than mid, then no need to search for this part, we just search the left half instead
            if(target<arr[mid]){
                r=mid-1
            }
            //As the part of the array is sorted if the target is bigger than the last element of the subarray, either there is no element or the element is rotated but is not in this subarray
            else if(target>arr[r]){
                r=mid-1
            }
            // If the upper two cases doesn't run we check (target>arr[mid] and target < arr[r]) so we keep shrinking the array 
            else{
                l=mid+1
            }
        }
    }

    return -1
};