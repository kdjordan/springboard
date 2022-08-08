import { Link } from "react-router-dom"
import './VendingMachine.css'

function VendingMachine() {
    return (
        <div className='VendingMachine'>
            <div style={{marginBottom:'2vh'}}>
                <h1>Vending Machine</h1>
                <h3>Click item to select !</h3>
            </div>
            <ul>
                <li><Link to="/skittles">Skittles</Link></li>
                <li><Link to="/chips">Chips</Link></li>
                <li><Link to="/soda">Soda</Link></li>
            </ul> 
        </div>
    )
}

export default VendingMachine