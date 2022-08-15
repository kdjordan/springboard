import { useParams } from 'react-router-dom'

function Color() {
    const {name} = useParams()

    return (
        <div className='Color' style={{backGroundColor: {}}}>
            <h1>Color for : {name}</h1>
        </div>
    )
}


export default Color