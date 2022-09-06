// findRotationCount
// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. 
//The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.
// Constraints: Time Complexity: O(log N)

function findRotationCount(arr, left = 0, right = arr.length - 1) {
    if (arr[left] < arr[right]) return left 
    if (left === right) return left
    if (right < left) return 0
    let mid = Math.floor((left + right) / 2)
    
    if (arr[mid] < arr[mid + 1] && arr[mid] < arr[mid - 1]) return mid
    
    if (arr[right] > arr[mid]) {
        return findRotationCount(arr, left, mid - 1)
    } else {
        return findRotationCount(arr, mid + 1, right)
    }
    

}

module.exports = findRotationCount