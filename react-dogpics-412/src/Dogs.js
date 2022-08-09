import { useParams } from 'react-router-dom'
import Dog from './Dog'
import './Dogs.css'
function Dogs({dogs}) {
    
    console.log('dogs ', dogs)
    return( 
        <div className='Dogs'>
            <h1>Meet Our Dags</h1>
            <div className="Dogs-wrapper">
                {dogs.map(d =>  (<Dog doggo={d} />))}
            </div>
        </div>
    )
}

export default Dogs