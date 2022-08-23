import React from "react";

export default function Home({status}) {
    console.log(status)
    if(!status) {
        return (
            <div className="col-md-6 col-lg-4 text-center">
                <h2>Jobly</h2>
                <p>All the jobs in one, convenient place</p>
                <h3>Welcome Back Kevin !</h3>
            </div>
        )
    } else {
        return (
            <div className="col-md-6 col-lg-4 text-center">
                <h2 className="fw-bolder">Jobly</h2>
                <p>All the jobs in one, convenient place</p>
                <div className="d-flex justify-content-around">
                    <button className="btn btn-primary">Login</button>
                    <button className="btn btn-primary">Sign up</button>
                </div>
            </div>
        )

    }
}