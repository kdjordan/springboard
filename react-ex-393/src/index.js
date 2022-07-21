import foods from './foods'
import {choice, remove} from './helpers'

let fruit = choice(foods)
let remainingFruits = remove(foods, fruit)


console.log(`I'd like one ${fruit}, please`)
console.log(`Here you go: ${fruit}`)
console.log(`Delicious, may I have another ?`)
console.log(`Sorry, we are all out, we have ${remainingFruits.length} left.`)