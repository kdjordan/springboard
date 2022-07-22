import React, { useState } from 'react'
import './EightBall.css'


const EightBall = (props) => {
    let data  = props.answers
    const [mssg, setMssg] = useState('Think of a question...')
    const [backgroundColor, setColor] = useState('black')
    const [fontColor, setFontColor] = useState('white')

    let index = Math.floor(Math.random() * data.length)
    let newMssg = data[index]['msg']
    let color = data[index]['color']

    function doUpdate() {
        setMssg(newMssg)
        setColor(color)
        setFontColor('lightyellow')
    }

    function reset() {
        setMssg('Think of a question...')
        setColor('black')
        setFontColor('red')
    }

    return (
        <div className="EightBall">
            <div className="EightBall-circle" 
                style={{backgroundColor: backgroundColor, borderColor: fontColor}}
            >
                <div className="EightBall-text" style={{color: fontColor}}>
                {mssg}
                </div>
            </div>
            <div>
                <button id="go-btn" onClick={doUpdate}>SOLUTION</button>
            </div>
            <div>
                <button id="go-btn" onClick={reset}>RESET</button>
            </div>
        </div>
    )
}

export default EightBall