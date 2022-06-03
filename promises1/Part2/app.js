let getCardButton = document.querySelector('#getCardButton')
let cardDisplayDiv = document.querySelector('#card-display')
let deckFinished = document.querySelector('#deck-finished')
let cardCount = 0
let displayDeck_id


window.onload = () => {
    getOneCard()
    getTwoCards()
    getDisplayDeck()
  };


  function getOneCard() {
    axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => {
        return axios.get(`http://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
    })
    .then(res => {
        console.log(`The Card is the ${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
    })
    .catch(e => console.log(e))
  }

  function getTwoCards() {
    let deck_id
    axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => {
        deck_id = res.data.deck_id
        return axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
    })
    .then(res => {
        return axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
    })
    .then(res => {
        console.log(`The Card is the ${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
    })
    .catch(e => console.log(e))
  }

function getCard(deck_id) {
    axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    .then(res => {
        console.log('res', res)
        return card.data
    })
}

function printCards(cards) {
    for (card of cards) {
        console.log(`The card is the ${card.cards[0].value} of ${card.cards[0].suit}`)
    }
}


function getDisplayDeck() {
    axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then((res) => {
        displayDeck_id = res.data.deck_id
    })
}


getCardButton.addEventListener('click', ()=> {
    axios.get(`http://deckofcardsapi.com/api/deck/${displayDeck_id}/draw/?count=1`)
    .then(res => {
        addCardImage(res.data.cards[0].image)
    })
})

function addCardImage(img) {
    cardCount++
    if (cardCount <= 52) {
        const image = document.createElement('img')
        image.src  = `${img}`
        let roatateAngle =  Math.random() * (60 - -60) + -60;
        image.style.transform = `rotate(${roatateAngle}deg)`
        cardDisplayDiv.appendChild(image)
    } else {
        deckFinished.style.visibility = 'visible'
    }
}