let getCardButton = document.querySelector('#getCardButton')

window.onload = () => {
    console.log('ready')
    getDeck()
  };

async function getDeck() {
    let deck = await axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    let card1 = getCard(deck.data.deck_id)
    let card2 = getCard(deck.data.deck_id)

    let allCards = await Promise.all([card1, card2])
    printCards(allCards)
}

getCardButton.addEventListener('click', ()=> {
    console.log('getting card')
})


async function getCard(deck_id) {
    let card = await axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    return card.data
}

function printCards(cards) {
    for (card of cards) {
        console.log(`The card is the ${card.cards[0].value} of ${card.cards[0].suit}`)
    }
}
