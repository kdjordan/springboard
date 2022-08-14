import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './DogDetail.css'
import { useNavigate } from 'react-router-dom';


function DogDetailWithFilter({dogs}) {
    const navigate = useNavigate()
    const { name } = useParams()
    let theDog = dogs.filter(d => d.name === name)[0]
    if(!theDog) {
        navigate('/no/notfound')
    }
    console.log('thDog ', theDog)
    let linkStr = `/${theDog.name}`
    return (
        <div className='Dog'>
            <Link to={linkStr} className='Dog-link'>
                <div className='Dog-header'>
                    <h2>{theDog.name}</h2>
                </div>
                <img src={theDog.src} alt="" />
                <ul>
                {theDog.facts.map(f => (
                    <li>{f}</li>
                ))}
                </ul>
            </Link>
        </div>
    )
}

export default DogDetailWithFilter