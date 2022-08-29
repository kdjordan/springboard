import React, { useEffect, useState } from "react";
import Loading from "../common/Loading";
import SearchForm from "../common/SearchForm";
import JobCardList from "./JobCardList";
import './Jobs.css'
import Jobly from '../Api.js'

export default function JobList() {
    const [jobs, setJobs] = useState(null)

    useEffect(() => {
       search()
    }, [])

    async function search(title) {
        let jobs = await Jobly.getJobs(title)
        setJobs(jobs)
    }

    if (!jobs) return <Loading />

    return (
        <div className="JobList col-md-8">
            <SearchForm doSearch={search} />
            {jobs.length ? <JobCardList jobs={jobs} />
            : <p>Sorry, no results were found!</p>
            }
        </div>
    )
}