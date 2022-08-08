import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

function useFlip() {
    const [state, setState] = useState(true)
    const flipCard = () => {
      setState(state => !state)
    };

    return [state, flipCard]
}

function useAxios(name, url) {
    const [cards, setCards] = useState([])
    const addCard = async (data) => {
        let theUrl = url
        if(typeof data === 'string') {
            theUrl = `${url}${data}`
        }
        console.log('theURl ', theUrl)
        try {
            const response = await axios.get(theUrl);
            setCards(cards => [...cards, { ...response.data, id: uuidv4() }]);
        } catch(e) {
            console.log(e)
        }
      };

      return[cards, addCard]
}
export  {useFlip, useAxios}