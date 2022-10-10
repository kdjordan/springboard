// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let obj = {}
    for (let i=0; i < arr1.length; i++) {
        if (arr2[i]) {
            obj[arr1[i]] = arr2[i]
        } else {
            obj[arr1[i]] = null
        }
    }
    return obj
}
