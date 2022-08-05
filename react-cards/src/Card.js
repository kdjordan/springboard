import './Card.css'

function Card({img, rotate}) {
 return (
    <div className="Card">
        <img src={img} style={{transform: `rotate(${rotate}deg)`}} alt="" />
    </div>
 )

}

export default Card