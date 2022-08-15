import { Link } from 'react-router-dom'
import './DogDetail.css'


function DogDetail({doggo}) {
    console.log('in detail ', doggo)
    return (
        <div className='Dog'>
            <Link to={`/${doggo.name.toLowerCase()}`} className='Dog-link'>
                <div className='Dog-header'>
                    <h3>{doggo.name}</h3>
                </div>
                <img src={doggo.src} alt="" />
            </Link>
        </div>
    )
}

export default DogDetail