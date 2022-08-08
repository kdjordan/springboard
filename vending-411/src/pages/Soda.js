import { Link } from 'react-router-dom'
import './Soda.css'
function Soda() {
    return (
        <div className='Soda'>
            <div className="container">
                <h3>SODA</h3>
                <p>You getting all the sugarz !</p>
                <div style={{marginTop: '1vh'}}>
                    <Link to="/">
                        <button>Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Soda