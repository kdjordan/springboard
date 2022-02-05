//to  execute function run node randomGame.js
function  randomGame() {
    let counter = 0
    let randomInterval = setInterval(function() {
        let randomNum = Math.random()
        counter++
        if  (randomNum > .75) {
            clearInterval(randomInterval)
            console.log(counter)
        }
    }, 500)
}

randomGame()