import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import './ColorList.css'

function ColorList({data}) {
    console.log(data)

    if (data.length === 0) {
        return (
        <div>
            <h2>Here's your Current Colors:</h2>
            <p>): You Have no Colors Yet !(</p>
            <div>
                <button>
                    <Link to='/colors/add'>ADD ONE</Link>
                </button>
            </div>
        </div>
        )
    }
    else {
        return (
            <div>
                <h2>Here's your Current Colors:</h2>
                <div className="ColorList">
                    {data.map(r => (
                    <div key={uuidv4()} className="ColorList-entry">
                        <Link to={`/colors/${r.name}`}>{r.name}</Link>
                    </div>))}
                </div>
            </div>
        )
    }
}

export default ColorList