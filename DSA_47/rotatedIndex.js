// findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. 
// The function should return the index of num in the array. If the value is not found, return -1.
// Constraints: Time Complexity: O(log N)

function findRotatedIndex(arr, num) {
    let pivot = findPivot(arr)
    if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
        return binarySearch(arr, num, 0, pivot - 1)
    } else {
        return binarySearch(arr, num, pivot, arr.length - 1 )
    }
}

function binarySearch(arr, num, left, right) {
    if (arr.length === 0) return -1
    if (num < arr[left] || num > arr[right]) return -1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === num) return mid
        else if (num < arr[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}

function findPivot(arr) {
    if (arr.length === 0 || arr[0] < arr[arr.length - 1]) return 0
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        if(arr[mid] > arr[mid + 1]) return mid + 1
        else if (arr[left] <= arr[mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
}

module.exports = findRotatedIndex