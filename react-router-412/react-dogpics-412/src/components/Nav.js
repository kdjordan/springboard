import { NavLink } from "react-router-dom"
import './Nav.css'

function Nav({dogs}) {
    return (
        <nav className="Nav">
            <NavLink to="/">
                <h2>You Like Dags ?!?</h2>
            </NavLink>
            <ul className="Nav-list">
                {dogs.map(dog => (
                    <NavLink key={dog.id} to={`/dogs/${dog.name.toLowerCase()}`}>
                        {dog.name}
                    </NavLink>
                ))}
            </ul>
        </nav>
    )
}

export default Nav