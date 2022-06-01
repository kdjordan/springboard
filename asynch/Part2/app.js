let getCardButton = document.querySelector('#getCardButton')

window.onload = () => {
    console.log('ready')
    getDeck()
  };

async function getDeck() {
    let deck = await axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    let card = await axios.get(`http://deckofcardsapi.com/api/deck/${deck.data.deck_id}/draw/?count=1`)
    const { cards } = card.data
    console.log(`The card is the ${cards[0].value} of ${cards[0].suit}`)
}

getCardButton.addEventListener('click', ()=> {
    console.log('getting card')
})