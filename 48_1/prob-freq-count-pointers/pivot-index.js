// add whatever parameters you deem necessary
function returnSum(arr) {
    let sum = 0
    arr.forEach(el => sum += el)
    return sum
}
function pivotIndex(arr) {
    let mid = Math.floor(arr.length/2)
    let left = 0
    let right = arr.length

    
    while (left < right && left < arr.length && right > 0) {
        let leftSum = returnSum(arr.slice(0, mid)) 
        let rightSum = returnSum(arr.slice(mid+1)) 
        if (leftSum === rightSum) return mid

    }

    console.log(leftSum, rightSum)

}

console.log(pivotIndex([5, 2, 7]))