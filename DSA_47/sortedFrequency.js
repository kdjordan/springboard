// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
// Constraints:
// Time Complexity: O(log N)

function sortedFrequency(arr, num) {

    let sortedArr = arr.sort()
    if (sortedArr.indexOf(num) === -1) return -1

    let leftIdx = findLeft(sortedArr, num)
    // let rightIdx = findRight(sortedArr, num)
    return leftIdx

}

function findLeft(arr, num) {
    let left = 0
    let right = arr.length - 1
    let mid = Math.floor((right  - left) / 2)
    let running = true

    while (running) {
        if (right === left) {
            console.log('return')
            running = false
            return right
        } 
        if (arr[mid] <= num) {
            console.log('returning')
            return right
        }
        right = mid - 1
        mid = Math.floor((mid - left) / 2)

    }
}



console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4
console.log(sortedFrequency([1,1,2,2,2,2,3],3)) // 1
// console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2
// console.log(sortedFrequency([1,1,2,2,2,2,3],4))// -1

