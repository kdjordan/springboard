// add whatever parameters you deem necessary
function averagePair(arr, val) {
    let target = val * 2
   for (let i=0; i < arr.length; i++) {
    for (let k=i+1; k < arr.length; k++) {
        if (arr[i] + arr[k] == target) return true
    }
   }
   return false
}
