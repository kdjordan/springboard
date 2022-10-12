function guessingGame() {
    const num = Math.ceil(Math.random() * 99)
    let guesses = 0
    let active = true

    return function inner( val ) {
        if ( active ) {
            guesses++
            if ( val === num ) {
                active = false
                return `You win! You found ${num} in ${guesses} guesses.`
            }
            if ( val < num ) {
                return `${val} is too low!`
            } 
            if ( val > num ) {
                return `${val} is too high!`
            } 
        }
        else {
            return 'The game is over, you already won!'
        }
    } 
    
    
}

module.exports = { guessingGame };
