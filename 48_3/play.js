// function isPalindrome(str) {
//     return str === str.split('').reverse().join('')
// }

// console.log(isPalindrome('not'))

// var d = {};

// [ 'zebra', 'horse' ].forEach(function(k) {
// 	d[k] = undefined;
// });

// console.log(d)

// var arr1 = "john".split('');
// var arr2 = arr1.reverse(); //[n h o j]
// var arr3 = "jones".split(''); //[n h o j [j o n e s]]
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); //5 - [jones]
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); //5 [jones]

// console.log(1 +  "2" + "2"); 
// console.log(1 +  +"2" + "2"); 
// console.log(1 +  -"1" + "2");
// console.log(+"1" +  "1" + "2"); 
// console.log( "A" - "B" + "2");
// console.log( "A" - "B" + 2);

function doubleMe(x) {
    let y = 2

    return function(x) {
        return y * x
    }
}
let double = doubleMe
double(4)
console.log(double(4))