import DogDetail from './DogDetail'
import './DogList.css'
function DogList({dogs}) {
    
    console.log('dogs ', typeof(dogs))
    return( 
        <div className='Dogs'>
            <h1>Meet Our Dags</h1>
            <div className="Dogs-wrapper">
                {dogs.map(d =>  (<DogDetail doggo={d} />))}
            </div>
        </div>
    )
}

export default DogList