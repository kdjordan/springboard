import React from "react";
import './Jobs.css'
import JobCard from "./JobCard";

export default function JobCardList({jobs}) {

    return (
        <div className="JobCardList">
            <div className="JobsList">
                {jobs.map(j => (
                    <JobCard job={j} key={j.id}/>
                ))}
            </div>
        </div>
    )
}