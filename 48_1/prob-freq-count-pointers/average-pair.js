// add whatever parameters you deem necessary
function averagePair(arr1, arr2) {
    let obj = {}
    for (let i=0; i < arr1.length; i++) {
        if (arr2[i]) {
            obj[arr1] = arr2[i]
        } else {
            obj[arr1] = null
        }
    }
}

console.log(averagePair(["a", "b", "c"], [1, 2, 3]))