import { useParams, useNavigate } from 'react-router-dom'

function Color() {
    const color = useParams()

    return (
        <div className='Color'>
            <h1>Color for : {color}</h1>
        </div>
    )
}


export default Color