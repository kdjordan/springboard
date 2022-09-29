function merge(arr1, arr2) {
    let returnArr = []
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            returnArr.push(arr1[i])
            i++
        } else {
            returnArr.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        returnArr.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        returnArr.push(arr2[j])
        j++
    }
    
    return returnArr
}

function mergeSort(arr) {

}

module.exports = { merge, mergeSort};