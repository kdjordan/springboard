const Person = (props) => {
    let mssg = props.age >= 18 ? 'Please go vote !' : 'You must be 18'
    let name = props.name.length > 6 ? props.name.slice(0,5) : props.name
    return (
        <div>
            <h1>Learn Some Information about this person !</h1>
            <p>This {name} is {props.age} years old.</p>
            <h3><i>{mssg}</i></h3>
            <h3>Hobbies</h3>
            <ul>
                {props.hobbies.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
        </div>
    )
}