import React, { useEffect, useState } from "react";
import { InputGroup, Button, Input } from "reactstrap";
import './Companies.css'
import Jobly from "../Api";

export default function CompanyList() {
    const [companies, setCompanies] = useState([])
    const [error, setError] = useState([])

    useEffect(() => {
        async function getCmp() {
            try {
                const cmp =  await Jobly.getCompanies()
                setCompanies(c => (c = cmp))
            } catch (error) {
                setError(er => (er = [error]))
            }
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
                {error.length ? <span>{error}</span> : ''}
            </div>
            <div className="CompaniesList">
                {companies.map((c, i) => (
                    <a href={`/companies/${c.handle}`} className="CompaniesCard card" key={i}>
                        <div className="cardBody">
                            <div className="cardHeader">
                                <h4>{c.name}</h4> 
                                <img src={c.logoUrl} alt="" />
                            </div>
                            <p><small>{c.description}</small></p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}