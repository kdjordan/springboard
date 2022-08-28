import React, { useEffect, useState } from "react";
import Loading from "../common/Loading";
import './CompanyList.css'
import Jobly from "../Api";
import SearchForm from "../common/SearchForm";
import CompanyCard from "./CompanyCard";

export default function CompanyList() {
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        search()
    }, [])

    async function search(name) {
        let companies = await Jobly.getCompanies(name)
        setCompanies(companies)
      }

    if (!companies) return <Loading />

    return (
        <div className="Companies col-md-8">
            <SearchForm doSearch={search} />
            {companies.length
            ? (
                <div className="CompanyList-list">
                  {companies.map(c => (
                      <CompanyCard
                          key={c.handle}
                          handle={c.handle}
                          name={c.name}
                          description={c.description}
                          logoUrl={c.logoUrl}
                      />
                  ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
        </div>
    )
}