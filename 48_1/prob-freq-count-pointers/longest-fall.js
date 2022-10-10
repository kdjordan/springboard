// add whatever parameters you deem necessary
function longestFall(arr) {
    let count = 0
    let current = arr[0]
    if (arr.length === 0) return 0
    if (arr.length === 1) return 1

    for (let i=1; i < arr.length-1; i++) {
        console.log(arr[i])
        if (arr[i] < current) {
            count++
            current = arr[i]
        } 
        if (arr[i] === current) {
            continue
        }
        else break
        
    }
    return count + 1

    
}
console.log(longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]))