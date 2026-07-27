// https://leetcode.com/problems/sum-of-two-integers/


/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    // a = parseInt((a>>>0).toString(2))
    // b = parseInt((b>>>0).toString(2))
    while (b!=0){
        let temp = (a&b) << 1;
        a = a^b;
        b = temp;
    }
    return a
};