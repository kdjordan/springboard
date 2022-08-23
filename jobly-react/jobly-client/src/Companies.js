import React from "react";
import { InputGroup, Button, Input } from "reactstrap";
import './Companies.css'

export default function CompanyList() {
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
                <a href="/" className="CompaniesCard card">
                    <div className="card-body">
                        <h4 className="cart-title">
                            Nike Inc
                            <img src="../images/test.jpg" alt="" />
                        </h4>
                        <p><small>Just do IT</small></p>
                    </div>
                </a>
                <a href="/" className="CompaniesCard card">
                    <div className="card-body">
                        <h4 className="cart-title">
                            Patagonia
                            <img src="" alt="" />
                        </h4>
                        <p><small>Lead Developer</small></p>
                    </div>
                </a>
            </div>
        </div>
    )
}