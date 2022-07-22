import React, { useState } from 'react'
import './EightBall.css'
import data from './EightBallData'

const EightBall = () => {
    const [mssg, setMssg] = useState('Think of a question...')
    let index = Math.floor(Math.random() * data.length)
    let newMssg = data[index]['msg']
    
    return (
        <div className="EightBall">
            <div className="EightBall-circle">
                <div className="EightBall-text">
                {mssg}
                </div>
            </div>
            <div>
                <button id="go-btn" onClick={() => setMssg(newMssg)}>SOLUTION</button>
            </div>
        </div>
    )
}





export default EightBall