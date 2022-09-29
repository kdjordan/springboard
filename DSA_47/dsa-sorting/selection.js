function selectionSort(arr) {    
    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             let tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp;      
        }
    }
    return arr;

}

module.exports = selectionSort;