function getDigit(num, index) {
    return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10
}
function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
function mostDigits(arr) {
    let max = 0
    arr.map(n  => {
        max = digitCount(n) > max ? digitCount(n) : max
    })
    return max
}
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums)
    for (let i=0; i < maxDigitCount; i++) {
        let digitBuckets = Array.from({length:10}, () => [])
        for (let j=0; j < nums.length; j++) {
            digitBuckets[getDigit(nums[j], i)].push(nums[j])
        } 
        nums = [].concat(...digitBuckets)
    }
    return nums
}


module.exports = { getDigit, digitCount, mostDigits, radixSort };