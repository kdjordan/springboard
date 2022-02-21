// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;
// console.log(facts)

// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
  
//   let {numPlanets, ...discoveryYears} = planetFacts;
//   console.log(discoveryYears); 

//   function getUserData({firstName, favoriteColor="green"}){
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }

//   console.log(getUserData({}))  

//   let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]

//   console.log(raindrops);
// console.log(whiskers);
// console.log(aFewOfMyFavoriteThings);

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers)


// var arr = [1, 2];
// [arr[0], arr[1]] = [arr[1], arr[0]]
// console.log(arr)  

const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest })

console.log(raceResults(['kevin', 'allan', 'vic', 'gary', 'mike' ]))  