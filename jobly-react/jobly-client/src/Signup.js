import React, { useState } from "react";
import { Form, Button, Input, FormGroup, Label, Card } from "reactstrap";
import Jobly from './Api.js'
import { useHistory } from "react-router-dom";

export default function Signup({processUser}) {
    const INITIAL_STATE ={
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    const [form, setForm] = useState(INITIAL_STATE)
    const [error, setError] = useState(false)
    const history = useHistory()
    

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
        let uname = form.username
        try {
            let token = await Jobly.signup(form)
            processUser(uname, token)
            history.push("/companies");
        } catch (error) {
            setError(er => (er = [error]))
        }
    }

    function handleFocus() {
        setError(er => (er = []))
    }


    return (
        <div className="col-md-6 col-lg-4">
            <h3>Sign Up</h3>
            {error.length ? <span>{error}</span> : ''}
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
