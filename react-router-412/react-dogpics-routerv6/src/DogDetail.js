import { Link } from 'react-router-dom'
import './DogDetail.css'


function DogDetail({doggo}) {
    return (
        <div className='Dog'>
            <Link to={`/dogs/${doggo.name.toLowerCase()}`} className='Dog-link'>
                <div className='Dog-header'>
                    <h3>{doggo.name}</h3>
                </div>
                <img src={`./images/${doggo.src}.jpg`} alt="" />
            </Link>
        </div>
    )
}

export default DogDetail


