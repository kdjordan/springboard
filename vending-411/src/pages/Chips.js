import { Link } from 'react-router-dom'
import './Chips.css'

function Chips() {
    return (
        <div className='Chips'>
        <div className="container">
            <h3>CHIPS</h3>
            <p>You crunchy cruchy !</p>
            <div style={{marginTop: '1vh'}}>
                <Link to="/">
                    <button>Go Back</button>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Chips