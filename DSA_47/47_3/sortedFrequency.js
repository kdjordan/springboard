// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
// Constraints:
// Time Complexity: O(log N)

function sortedFrequency(arr, num) {

    let sortedArr = arr.sort()
    if (sortedArr.indexOf(num) === -1) return -1

    let leftIdx = findLeft(sortedArr, num)
    let rightIdx = findRight(sortedArr, num)
    return rightIdx - leftIdx + 1

}

function findLeft(arr, num, left = 0, right = arr.length - 1) {
    if (right >=  left) {
        let mid = Math.floor((right + left) / 2)
        if ((mid === 0 || arr[mid - 1] < num) && arr[mid] === num) {
            return mid
        } else if (arr[mid] < num) {
            return findLeft(arr, num, mid + 1, right)
        } else {
            return findLeft(arr, num, left, mid - 1)
        }
   }
   return -1
}

function findRight(arr, num, left = 0, right = arr.length - 1) { 
    if (left <= right) {
        let mid = Math.floor((left + right) /2)
        if (((mid === arr.length - 1) || arr[mid + 1] > num) && arr[mid] === num) {
            return mid
        } else if (arr[mid] > num) {
            return findRight(arr, num, left, mid - 1)
        } else {
            return findRight(arr, num, mid + 1, right)
        }
    }
}

module.exports = sortedFrequency
