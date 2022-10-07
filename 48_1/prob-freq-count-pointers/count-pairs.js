// add whatever parameters you deem necessary
function countPairs(arr, val) {
    let theSet = new Set()
    for (let i=0; i < arr.length; i++) {
        for (k = i+1; k < arr.length; k++) {
            console.log(arr[i], arr[k])
            if (arr[i] + arr[k] === val) {
                if (!theSet.has(`${arr[k]}-${arr[i]}`) || !theSet.has(`${arr[i]}-${arr[k]}`)) {
                    theSet.add(`${arr[i]}-${arr[k]}`)
                }
            }
        }
    }
    return theSet.size
}
