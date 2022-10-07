// add whatever parameters you deem necessary
function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}
function separatePositive(arr) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        while (arr[left] > 0) {
            left++
        }
        while (arr[right] < 0) {
            right--
        }

        if (left < right) {
            swap(arr, left, right)
        }

    }
    return arr
}
// var arr = [1, 2, 3];
// var arr = [-1, -2, -3];
var arr = [2, -1, -3, 6, -8, 10];
console.log(separatePositive(arr))
