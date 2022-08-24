import React from "react";
import { InputGroup, Button, Input } from "reactstrap";
import './Jobs.css'

export default function Jobs() {
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
                <a href="/" className="JobsCard card">
                    <div className="card-body">
                        <h4 className="cart-title">
                            Nike Inc
                            <img src="../images/test.jpg" alt="" />
                        </h4>
                        <p><small>Just do IT</small></p>
                        <button className="btn btn-secondary float-right">APPLY</button>
                    </div>
                </a>
                <a href="/" className="JobsCard card">
                    <div className="card-body">
                        <h4 className="cart-title">
                            Patagonia
                            <img src="" alt="" />
                        </h4>
                        <p><small>Lead Developer</small></p>
                        <button className="btn btn-secondary float-right">APPLY</button>
                    </div>
                </a>
            </div>
        </div>
    )
}