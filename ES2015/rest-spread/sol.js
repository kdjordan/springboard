// const removeRandom = (...items) => {
//     let randomIndex = Math.floor(Math.random() * items.length);
//     let returnArr =  items.filter((el, index) => {
//         return index !== randomIndex 
//     })
//     return returnArr

// }

// console.log(removeRandom(true, 1, 'help', 'something', 44, 9))


// const extend = (array1, array2) => {
//     return [...array1, ...array2]
// }

// console.log(extend([1,2,3],[4,5,6]))

// const addKeyVal = (obj, key, val) =>  {
//     return {...obj, [key] : val}
// }

// console.log(addKeyVal({one: 1, two: 2}, 'three', 3))

// const removeKey = (obj, key) => {
//     let newObj = {...obj}
//     delete(newObj[key])
//     return newObj
// }

// console.log(removeKey({one: 1, two: 2, three: 3}, 'three'))

// const combine = (obj1, obj2) => {
//     let newObj = {...obj1, ...obj2}
//     return newObj
// }

// console.log(combine({one:1, two:2}, {three:3, four:4}))

const update = (obj, key, val) => {
    let newObj = {...obj, [key]:val}
    return newObj
}

console.log(update({one:1, two:2}, 'two', 4))