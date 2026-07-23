// https://leetcode.com/problems/valid-anagram/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


// BRUTE //
// var isAnagram = function(s, t) {
//     let sortedS = s.split("").sort().join("")
//     let sortedT = t.split("").sort().join("")
//     if(sortedS==sortedT) return true
//     return false
// };


//OPTIMISED //
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    const count = new Map()
    const S = s.split("")
    const T = t.split("")
    S.forEach((s) => {
        let c = count.get(s) || 0
        count.set(s, c + 1)
    })

    T.forEach((t) => {
        let c = count.get(t) || 0
        count.set(t, c - 1)
    })
    
    // console.log(count)
    for (const v of count) {
        console.log(v[1])
        if (v[1] != 0) {
            return false
        }
    }
    return true
}

const s = "anagram"
const t = "nagaram"

const s2 = "rat"
const t2 = "car"


const res = isAnagram(s, t)
const res2 = isAnagram(s2, t2)


console.log(res)
console.log(res2)