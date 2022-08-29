import React, { useState, useContext, useEffect } from "react"
import UserContext from "../UserContext";

export default function JobCard({job}) {
    let {id} = job
    let { equity } = job
    const [applied, setApplied] = useState()
    const { hasApplied, applyToJob } = useContext(UserContext);

    useEffect(function updateApplied() {
        setApplied(hasApplied(id))

    }, [id, hasApplied])

    function handleApply(e) {
        if (hasApplied(id)) return;
        applyToJob(id);
        setApplied(true);
    }
    
    return (
        <div className="JobsCard card" key={job.id}>
            <div className="card-body">
                <h4 className="card-title">
                    {job.title}
                </h4>
                <h5>{job.companyName}</h5>
                <p><small>SALARY: {job.salary}</small></p>
                {equity > 0 && <p><small>EQUITY: {job.equity}</small></p>}
                <button 
                    className="btn btn-danger float-right" 
                    id={job.id}
                    onClick={handleApply}
                    disabled={applied}
                >
                {!applied ? 'APPLY' : 'APPLIED'}
                </button>
            </div>
        </div>
    )
}