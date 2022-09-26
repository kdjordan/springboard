
function countZeroes(arr) {
let sorted = arr.sort()

let left = 0
let right = sorted.length - 1
let mid = Math.floor((right - left)/2)

while (left < right) {
   
    if (sorted[mid] === 0) {
        //go right
        left = mid + 1
        mid = mid + Math.floor((right - mid) / 2)

        if (left === right) {

        }

    } else {
        //go left
        right = mid - 1
        mid = Math.floor((mid - left) / 2)
        if (left === right) {
            return left
        }
    }
    return left
}


return left 
   
}

function sortedFrequency(arr, val) {
    let left = 0
    let right = arr.length - 1
    let mid = Math.floor((right - left) / 2)

    while (left < right) {
        if (arr[mid] > val) {
            
        }


    }

}



// console.log(countZeroes([1,1,1,0,0])) // 2
//0 0 0 1 1 1 
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1])

console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1