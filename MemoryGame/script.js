const gameContainer = document.getElementById("game");
const startBtn = document.querySelector('#start')
const shufflBtn = document.querySelector('#shuffle')
const timer = document.querySelector('#timer')
const score = document.querySelector('#score')

let theTimer = 0
let guesses = 0
let numMatches = 0
let gameTimer

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

startBtn.addEventListener('click', function(e) {
  runTimer()
})

shufflBtn.addEventListener('click', function(e) {
  clearDivs()
  resetDisplay()
  let shuffledColors = shuffle(COLORS);
  createDivsForColors(shuffledColors)
})

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  let number = 1;
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    //add attributte for reference later on matches and multiple clicks of same element
    newDiv.dataset.number = number
    number++

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

//clears all divsif SHUFFLE button is clicked
function clearDivs() {
  let divs = document.querySelectorAll('#game div')
  divs.forEach(el => {
    el.parentNode.removeChild(el);
  });
}


//use array to keep 2 cards that are clicked for comparison
let matchesArr = []
let okayToClick = false
// TODO: Implement this function!
function handleCardClick(event) {
  if(matchesArr.length < 2 && okayToClick){
    guesses++
    score.innerText = guesses
    let match = {
      theEvent : event,
      number : event.target.dataset.number,
      color: event.target.className
    }
    event.target.style.backgroundColor = match.color
    matchesArr.push(match)
    if(matchesArr.length == 2){
      if(checkMatch(matchesArr)) {
        numMatches++
        makeMatchActive()
        checkCompleted()
        resetMatchesArr()
      } else {
        resetCard(event)
        matchesArr.shift()
      }
    } else {
      resetCard(event)
    }
  }
  
}


function checkMatch(arr) {
  if(arr[0].number !== arr[1].number) {
    if(arr[0].color == arr[1].color) {
      return true
    } else {
      return false
    }
  }
}

function checkCompleted() {
  if(numMatches === 5) {
    stopTimer()
    //TODO : add score to localStorage
  }
}

function resetDisplay() {
  clearInterval(theTimer)
  okayToClick = false
  timer.innerText = 0
  score.innerText = 0
  theTimer = 0
  guesses = 0
  numMatches = 0
}

function makeMatchActive() {
  matchesArr.forEach(el => {
    el.theEvent.target.style.background = el.color
    el.theEvent.target.removeEventListener('click', handleCardClick)
  })
}

// when the DOM loads
createDivsForColors(shuffledColors);

function resetMatchesArr() {
  matchesArr = []
}

function runTimer() {
  gameTimer = setInterval(function() {
    okayToClick= true
    theTimer++
    timer.innerText = theTimer
  }, 1000)
}

function stopTimer() {
  clearInterval(gameTimer)
}

function resetCard(e) {
  okayToClick = false
  setTimeout(function() {
    e.target.style.backgroundColor = 'white'
    okayToClick = true;
  }, 500)
}