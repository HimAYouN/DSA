// https://leetcode.com/problems/valid-parentheses/



/**
* @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []

    const map = new Map()
    map.set(")", "(")
    map.set("}", "{")
    map.set("]", "[")

    for (c of s) {
        if (map.has(c)) {
            if(stack.length === 0 || stack.pop() !== map.get(c)) {
                return false
            }
        }else{
            stack.push(c)
        }
    }
    return (stack.length == 0)
};

console.log(isValid("]"))