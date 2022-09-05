

// findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. 
// The function should return the index of num in the array. If the value is not found, return -1.
// Constraints: Time Complexity: O(log N)

function findRotatedIndex(arr, num) {
    let sortedArr = arr.sort()
    if (sortedArr.indexOf(num) === -1) return -1
    console.log(sortedArr)
    let leftIdx = 0
    let rightIdx = arr.length - 1
    let midIdx = Math.floor((rightIdx - leftIdx) / 2)
    // console.log('L =', leftIdx,'M=' ,midIdx,'R==', rightIdx, 'val=', arr[midIdx], 'num=', num)
    
    while (arr[midIdx] !== num) {
        console.log('L =', leftIdx,'M=' ,midIdx,'R==', rightIdx, 'val=', arr[midIdx], 'num=', num)
        leftIdx = midIdx + 1
        midIdx = midIdx + Math.floor((rightIdx - midIdx) / 2) + 1

        if (arr[midIdx] === num) {
            return midIdx
        }
    }
}


// console.log(findRotatedIndex([3,4,1,2],4)) // 1                              1,2,3,4
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1