function countZeroes(arr) {
    let sortedArr = arr.sort()
    let leftIdx = 0
    let rightIdx = sortedArr.length - 1
    let mid = Math.floor((rightIdx - leftIdx) / 2)
    while (leftIdx < rightIdx) {

        if (sortedArr[mid] === 0) {
            leftIdx = mid + 1
            mid = mid + Math.floor((rightIdx - mid) / 2)
            if(leftIdx === rightIdx) {
                if(sortedArr[rightIdx] === 1) {
                    return rightIdx
                } else {
                    return rightIdx + 1
                }
            }
            
        } else {
            rightIdx = mid - 1
            mid = Math.floor((mid - leftIdx) / 2)
           
            if(leftIdx === rightIdx) {
                return leftIdx
            }
        }
    }
    return leftIdx
} 

module.exports = countZeroes