import React, { useEffect, useState } from "react";
import { InputGroup, Button, Input } from "reactstrap";
import './Companies.css'
import Jobly from './Api.js'

export default function CompanyList() {
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        async function getCmp() {
            const cmp =  await Jobly.getCompanies()
            // let result = cmp.companies
            setCompanies(c => (c = cmp))
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
            <div className="CompaniesList">
                {companies.map((c, i) => (
                    <a href={`/companies/${c.handle}`} className="CompaniesCard card" key={i}>
                        <div className="card-body">
                            <h4 className="card-title">
                                {c.name}
                                <img src="{c.logoUrl}" alt="" />
                            </h4>
                            <p><small>{c.description}</small></p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}