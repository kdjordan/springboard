// add whatever parameters you deem necessary
function returnSum(arr) {
    let sum = 0
    arr.forEach(el => sum += el)
    return sum
}
function pivotIndex(arr) {
    for (let i=1; i < arr.length-1; i++) {
        let leftSum = returnSum(arr.slice(0, i)) 
        let rightSum = returnSum(arr.slice(i+1)) 
        if (leftSum === rightSum) return i

    }
    return -1
}
