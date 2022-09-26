function bubbleSort(arr) {
    let sorted = false
    while(!sorted) {
        console.log('going')
        sorted = true
        for (let i=0; i<arr.length; i++) {
            console.log(arr[i])
            if (arr[i] > arr[i+1]) {
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i] = temp
            }
            sorted = false
        }
    }
    return arr
}

module.exports = bubbleSort;