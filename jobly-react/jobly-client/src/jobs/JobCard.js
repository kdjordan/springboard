import React from "react"

export default function JobCard({job}) {
    console.log(job)
    return (
        <a href="/" className="JobsCard card" key={job.id}>
            <div className="card-body">
                <h4 className="card-title">
                    {job.title}
                </h4>
                <h5>{job.companyName}</h5>
                <p><small>SALARY: {job.salary}</small></p>
                <p><small>EQUITY: {job.equity}</small></p>
                <button className="btn btn-secondary float-right" id={job.id}>APPLY</button>
            </div>
        </a>
    )
}