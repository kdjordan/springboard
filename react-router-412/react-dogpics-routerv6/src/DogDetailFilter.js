import { useParams, useNavigate } from 'react-router-dom'
import './DogDetail.css'



function DogDetailWithFilter({dogs}) {
    const { name } = useParams()
    let navigate = useNavigate()

    let theDog
    if(name) {
        theDog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase())
        if(typeof theDog === 'undefined') {
            return navigate("/no");
        }
        return (
            <div className='Dog'>
                <div className='Dog-header'>
                    <h2>{theDog.name}</h2>
                    <h4>{theDog.age} years old</h4>
                </div>
                <img src={`../images/${theDog.src}.jpg`} alt="" />
                <ul>
                {theDog.facts.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}
                </ul>
            </div>
        )
    }
    return null
}

export default DogDetailWithFilter