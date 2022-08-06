import {useEffect, useState, useRef } from 'react';
import './CardList.css'
import Card from './Card'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

function CardListAutoDraw() {
    const [deck, setDeck] = useState()
    const [cards, setCards] = useState([])
    const [btnText, setBtnText] = useState('SHOW CARDS')
    const [autoDraw, setAutoDraw] = useState(false)
    const timerRef = useRef()

    useEffect(() => {
        async function getDeck() {
            let { data } = await axios.get('http://deckofcardsapi.com/api/deck/new/')
            setDeck(data)
        }
        getDeck()

    },[setDeck])

    useEffect(() => {
        async function getCard() {
            try {
                let { data } = await axios.get(`http://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`)

                if (data.remaining === 0) {
                    setAutoDraw(false)
                    setBtnText('DONE !')
                    throw new Error('Out of Cards')
                }

                const num = (Math.random() * 45) - 45;
                setCards(c => [
                        ...c,
                        {   
                            id: uuidv4(),
                            img:`${data.cards[0].image}`,
                            rotate: `${num}`
                        }
                    ]
                )

            } catch(e){
                alert(e)
            }
        }

        if (autoDraw && !timerRef.current) {
            timerRef.current = setInterval(async () => {
              await getCard();
            }, 1000);
          }

        return () => {
            clearInterval(timerRef.current);
            timerRef.current = null;
        };
    }, [autoDraw, setAutoDraw, deck])

    function startTimer() {
        setAutoDraw(d => !d)
    }

    const allCards = cards.map(card => {
        return <Card key={card.id} img={card.img} rotate={card.rotate} />
    })


 return (
    <div className="CardList-table">
        <div>
            <button className="CardList-btn" onClick={startTimer}>{btnText}</button>
        </div>
        <div className="CardList-container">
            {allCards}
        </div>
    </div>
 )

}

export default CardListAutoDraw