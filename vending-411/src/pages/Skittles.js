import { Link } from 'react-router-dom'
import './Skittles.css'

function Skittles() {
    return (
        <div className='Skittles'>
            <div className="container">
                <h3>SKITTLES</h3>
                <p>You tasting the rainbow !</p>
                <div style={{marginTop: '1vh'}}>
                    <Link to="/">
                        <button>Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Skittles