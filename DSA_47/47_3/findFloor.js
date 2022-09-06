// findFloor
// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. 
// The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.
// Constraints: Time Complexity: O(log N)

function findFloor(arr, num, left = 0, right = arr.length - 1) {
    let mid = Math.floor((right + left) / 2)
    if (num >= arr[right]) return arr[right]
    while (left <= right) {
        if (arr[mid] > num && arr[mid - 1 ] < num) return arr[mid - 1]
        if (arr[mid] > num) {
            return findFloor(arr, num, mid + 1, right)
        } else {
            return findFloor(arr, num, 0, mid - 1)
        }
    }

    return -1
}


console.log(findFloor([1,2,8,10,10,12,19], 9)) // 8
console.log(findFloor([1,2,8,10,10,12,19], 20)) // 19
console.log(findFloor([1,2,8,10,10,12,19], 0)) // -1


module.exports = findFloor