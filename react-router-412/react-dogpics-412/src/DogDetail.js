import { Link } from 'react-router-dom'
import './DogDetail.css'


function DogDetail({doggo}) {
    let linkStr = `/${doggo.name}`
    return (
        <div className='Dog'>
            <Link to={linkStr} className='Dog-link'>
                <div className='Dog-header'>
                    <h3>{doggo.name}</h3>
                </div>
                <img src={doggo.src} alt="" />
            </Link>
        </div>
    )
}

export default DogDetail