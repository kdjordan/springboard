import React from "react";
import { Link } from "react-router-dom";

export default function Home({user}) {
    console.log('user in Home ', user)
    if(user) {
        return (
            <div className="col-md-6 col-lg-4 text-center">
                <h2>Jobly</h2>
                <p>All the jobs in one, convenient place</p>
                <h3>Welcome back {user.username} !</h3>
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