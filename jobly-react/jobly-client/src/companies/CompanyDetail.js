import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Jobly from "../Api"
import JobCardList from "../jobs/JobCardList"
import Loading from "../common/Loading"

function CompanyDetail() {
    const { handle }  = useParams()

    const [company, setCompany] = useState(null)

    useEffect(() => {
        async function getCompany() {
            setCompany(await Jobly.getCompany(handle))
        }
        getCompany()
    }, [handle])

    if (!company) return <Loading />

    return (
        <div className="CompanyDetail">
            <h4>{company.name}</h4>
            <p>{company.description}</p>
            <JobCardList jobs={company.jobs}/>
        </div>
        
    )

}

export default CompanyDetail