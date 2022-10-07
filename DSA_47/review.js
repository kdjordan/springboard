function swap(arr, x, y) {
    let temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp
}
function bubble(arr) {
    for (let i=0; i < arr.length; i++) {
        for (let j=0; j < arr.length-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
                console.log(arr)
            }
        }
    }
    return arr
}


console.log(bubble([12,1,34,3]))