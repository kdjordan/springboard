import React, { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "./UserContext" 

export default function Home() {
    const { currentUser } = useContext(UserContext);
    if(currentUser) {
        return (
            <div className="col-md-6 col-lg-4 text-center">
                <h2>Jobly</h2>
                <p>All the jobs in one, convenient place</p>
                <h3>Welcome back {currentUser.username} !</h3>
            </div>
        )
    } else {
        return (
            <div className="col-md-6 col-lg-4 text-center">
                <h2 className="fw-bolder">Jobly</h2>
                <p>All the jobs in one, convenient place</p>
                <div className="d-flex justify-content-around">
                    <Link to="/login">
                        <button className="btn btn-primary">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="btn btn-primary">Sign up</button>
                    </Link>
                </div>
            </div>
        )

    }
}