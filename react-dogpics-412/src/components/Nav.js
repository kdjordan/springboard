import { Link } from "react-router-dom"
import './Nav.css'

function Nav({data}) {
    return (
        <nav className="Nav">
            <h2>You Like Dags ?!?</h2>
            <ul className="Nav-list">
                {data.map(dog => (
                    <Link key={dog.id} to={dog.src}>{dog.name}</Link>
                ))}
            </ul>
        </nav>
    )
}

export default Nav