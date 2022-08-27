import React, { useEffect, useState } from "react";
import { InputGroup, Button, Input } from "reactstrap";
import './Jobs.css'
import Jobly from './Api.js'

export default function Jobs() {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        async function getCmp() {
            const cmp =  await Jobly.getJobs()
            setJobs(c => (c = cmp))
        }
        getCmp()
    }, [])
    return (
        <div className="Companies col-md-8">
            <div className="SearchForm mb-3">
                <InputGroup>
                    <Input 
                        placeholder="Enter search term..."
                    />
                    <Button color="primary">Submit</Button>
                </InputGroup>
            </div>
            <div className="JobsList">
                {jobs.map((j, i) => (
                    <a href="/" className="JobsCard card" key={j.id}>
                        <div className="card-body">
                            <h4 className="card-title">
                                {j.title}
                            </h4>
                            <h5>{j.companyName}</h5>
                            <p><small>SALARY: {j.salary}</small></p>
                            <p><small>EQUITY: {j.equity}</small></p>
                            <button className="btn btn-secondary float-right" id={j.id}>APPLY</button>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}