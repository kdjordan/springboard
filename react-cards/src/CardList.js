import {useEffect, useState } from 'react';
import './CardList.css'
import Card from './Card'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'


function CardList() {
    const [deck, setDeck] = useState()
    const [cards, setCard] = useState([])
    const [btnText, setBtnText] = useState('GET CARD')

    async function getCards(){
        let { data } = await axios.get('http://deckofcardsapi.com/api/deck/new/')
        setDeck(data)
    }
    
    async function getCard() {
        let { data } = await axios.get(`http://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`)

        if (data.remaining === 0) {
            setBtnText('OUT OF CARDS')
            alert('Error: no cards remaining !')
        }

        const num = (Math.random() * 45) - 45;
        console.log('got***', data.cards[0].image)
        setCard(c => {
            return [...c, 
                {   
                    id: uuidv4(),
                    img:`${data.cards[0].image}`,
                    rotate: `${num}`
                }]
        })
    }

    useEffect(() => {
        getCards()
      },[]);

 return (
    <div className="CardList-table">
        <div>
            <button className="CardList-btn" onClick={getCard}>{btnText}</button>
        </div>
        <div className="CardList-container">
            {cards.map(c => {
                console.log(c)
                return <Card key={c.id} img={c.img} rotate={c.rotate} />
                })
            }
        </div>
    </div>
 )

}

export default CardList