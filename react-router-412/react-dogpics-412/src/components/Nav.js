import { Link } from "react-router-dom"
import './Nav.css'

function Nav({dogs}) {
    return (
        <nav className="Nav">
            <Link to="/">
                <h2>You Like Dags ?!?</h2>
            </Link>
            <ul className="Nav-list">
                {dogs.map(dog => (
                    <Link key={dog.id} to={`/${dog.name}`}>{dog.name}</Link>
                ))}
            </ul>
        </nav>
    )
}

export default Nav