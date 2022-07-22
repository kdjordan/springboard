import React from 'react'
import './EightBall.css'
import data from './EightBallData'

const EightBall = () => {
    function getAnswer() {
        let index = Math.floor(Math.random() * data.length)
        return console.log(data[index])
    }
    return (
        <div className="EightBall">
            <div className="EightBall-circle">
                <div className="EightBall-text">
                Think of a question...
                </div>
            </div>
            <div>
                <button id="go-btn" onClick={getAnswer}>SOLUTION</button>
            </div>
        </div>
    )
}



export default EightBall