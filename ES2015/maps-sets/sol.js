// console.log(new Set([1,1,2,2,3,4]))

// console.log([...new Set("referee")].join(""))

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// console.log(m)

// const hasDuplicate = (arr) => arr.length !== new Set(arr).size

// console.log(hasDuplicate([1,3,2,1]))
// console.log(hasDuplicate([1,5,-1,4]))

const vowelCount = (str) => {
    let theMap = new Map()
    let vowels = 'aeiou'
    for(let char of str.toLowerCase()) {
        if(vowels.indexOf(char) !== -1){
            if(!theMap[char]) {
                theMap[char] = 1
            } else {
                theMap[char]++
            }
        }
    }
    return theMap
}

console.log(vowelCount('awesomeAAA'))
console.log(vowelCount('Colt'))