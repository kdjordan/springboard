import React from "react";
import { Link } from "react-router-dom";

export default function CompanyCard({ handle, name, logoUrl, description}) {

    return (
        <>  
        <Link to={`/companies/${handle}`} className="CompaniesCard card">
            <div className="cardBody">
                <div className="cardHeader">
                    <h4>{name}</h4> 
                    <img src={logoUrl} alt="" />
                </div>
                <p><small>{description}</small></p>
            </div>
        </Link>
        </>
    )

}