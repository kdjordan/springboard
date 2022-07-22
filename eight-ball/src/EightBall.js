import React from 'react'
import './EightBall.css'
import data from './EightBallData'

const EightBall = () => {
    let mssg = 'Think of a question...'
   
    return (
        <div className="EightBall">
            <div className="EightBall-circle">
                <div className="EightBall-text">
                {mssg}
                </div>
            </div>
        </div>
    )
}

const Clicker = () => {
    function getAnswer() {
        let index = Math.floor(Math.random() * data.length)
        console.log('clickin', data[index]['msg'])
    }
    return (
        <>
            <button id="go-btn" onClick={getAnswer}>SOLUTION</button>
        </>
    )
}



export  {EightBall, Clicker}