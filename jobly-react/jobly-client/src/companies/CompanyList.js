import React, { useEffect, useState } from "react";
import { InputGroup, Button, Input } from "reactstrap";
import './Companies.css'
import Jobly from "../Api";
import CompanyCard from "./CompanyCard";

export default function CompanyList() {
    const [companies, setCompanies] = useState([])
    const [error, setError] = useState([])

    useEffect(() => {
        async function getCmp() {
            try {
                const cmp = await Jobly.getCompanies()
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
                {companies.map(c => (
                    <CompanyCard 
                        key={c.handle} 
                        handle={c.handle}
                        name={c.name}
                        logoUrl={c.logoUrl}
                        description={c.description}
                    /> 
                ))}
            </div>
        </div>
    )
}