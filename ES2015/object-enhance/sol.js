// const createInstructor = (firstName, lastName) => {
//     return {firstName, lastName}
// }

// console.log(createInstructor('kevin', 'jordan'))
// var favoriteNumber = 42;

// let instructor = {
//     firstName : 'Colt',
//     [favoriteNumber]: "That is my favorite!"
// }

// console.log(instructor[])


// let instructor = {
//     firstName: "Colt",
//     sayHi(){
//       return "Hi!";
//     },
//     sayBye(){
//       return this.firstName + " says bye!";
//     }
//   }
//   console.log(instructor.sayBye())

  const createAnimal = (species, verb, noise) => {
    return {
        [species]: species,
        [verb]() {
            console.log(noise)
        }
    }
}

let dog = createAnimal("dog", "bark", "Woooof!")
dog.bark()

// console.log(createAnimal("dog", "bark", "Woooof!"))