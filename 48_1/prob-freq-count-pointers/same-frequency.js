// add whatever parameters you deem necessary
function getFreq(num) {
    let numStr = String(num)
    let obj = {}
    for (let char of numStr) {
        if (obj[char]) obj[char]++
        else obj[char] = 1
    }
    return obj
}
function sameFrequency(num1, num2) {
    let freq1 = getFreq(num1)
    let freq2 = getFreq(num2)

    for (let k in freq1) {
        if (!freq2[k]) return false
        if (freq1[k] !== freq2[k]) return false
    }
    return true
}
