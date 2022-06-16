const ExpressError = require("./expressError")

function checkInput(str) {
    let arr = str.split(',')
    for (el of arr) {
        if(isNaN(el)) {
            return new Error(`${el} is not a number`)
        } 
    }
   return arr
}

function getMean(arr) {
    let total = 0
    arr.forEach(num => {
        total += Number(num)
    })
    let solution = total/(arr.length)
    return solution
} 

function getMidpoint(arr) {
    let val = arr[Math.ceil((arr.length-1)/2)]
    return Number(val)
}

function getMode(arr) {    
    let retObj = {}
    arr.forEach(num => {
        if(!retObj[num]) {
            retObj[num] = 1
        } else {
            retObj[num] += 1
        }
    })
    let count = 0
    let theKey
    for(const key in retObj) {
        if(retObj[key] > count) {
            count = retObj[key]
            theKey = key
        }
    }
    return theKey

}

module.exports = {
    checkInput,
    getMean,
    getMidpoint,
    getMode

}