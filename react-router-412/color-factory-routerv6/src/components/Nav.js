import './Nav.css'
import { Link } from 'react-router-dom'

function Nav({links}) {
    return (
        <div className="Nav">
            <div className="Nav-logo">
                <Link to='/'>
                    Color Factory
                </Link>
            </div>
            <div className="Nav-links">
                <Link to="/colors/add">
                    Add a Color
                </Link>
            </div>
        </div>
    )
}


export default Nav