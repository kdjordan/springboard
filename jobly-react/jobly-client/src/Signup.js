import React, { useState } from "react";
import { Form, Button, Input, FormGroup, Label, Card } from "reactstrap";
import Jobly from './Api.js'
import { useHistory } from "react-router-dom";
import LocalStorage from "./LocalStorage";

export default function Signup({processUser}) {
    const INITIAL_STATE ={
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    const [form, setForm] = useState(INITIAL_STATE)
    const history = useHistory()
    const [error, setError] = useState(false)
    

    function handleChange(e) {
        const { name, value } = e.target
        setForm(f => ({
            ...f,
            [name]: value
        })) 
    }

    async function handleSubmit(e) {
        e.preventDefault()
        //post form data to DB
        let token = await Jobly.signup(form)
        if (token) {
            //setLocalStorage
            let tk = token.token
            LocalStorage.setLocalStorage({'token': tk, 'username':form.username})
            //send user info up to Parent App
            let username = form.username
            processUser({username, 'token': tk})
            //goto companies
            history.push("/companies");
        } else {
            setError(er => (er = true))
        }
    }

    function handleFocus() {
        setError(er => (er = false))
    }


    return (
        <div className="col-md-6 col-lg-4">
            <h3>Sign Up</h3>
            {error ? <span>Error Signing Up.</span> : ''}
            <Card className="p-4">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                <Label for="username">Username</Label>
                <Input
                    id="username"
                    name="username"
                    type="text"
                    value={form.username}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    
                />
                </FormGroup>
                <FormGroup>
                <Label for="password">Password</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    onFocus={handleFocus}
                />
                </FormGroup>
                <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={form.firstName}
                    onChange={handleChange}
                    onFocus={handleFocus}
                />
                </FormGroup>
                <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                    id="lastName"
                    name="lastName"
                    type="text" 
                    value={form.lastName}
                    onChange={handleChange}
                    onFocus={handleFocus}
                />
                </FormGroup>
                <FormGroup>
                <Label for="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="text"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                />
                </FormGroup>
                <Button color="primary" className="btn-block mr-1 mt-1 btn-lg" >Submit</Button>
            </Form>
            </Card>
        </div>
    )
}
