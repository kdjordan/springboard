const Tweet = (props) => {
    return (
        <div>
            <p>{props.username}</p>
            <p>{props.date}</p>
            <p>{props.mssg}</p>

        </div>
    )
}