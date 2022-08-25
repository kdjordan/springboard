import React, { useState } from "react";
import { Form, Button, Input, FormGroup, Label, Card } from "reactstrap";
import Jobly from './Api.js'
import { useHistory } from "react-router-dom";
import LocalStorage from "./LocalStorage";

export default function Profile() {
    const INITIAL_STATE ={
        username: 'kdjordan',
        firstName: 'Kevin',
        lastName: 'Jordan',
        email: 'glasskdj@yaho.com',
        password: 'password'
    }
    const [form, setForm] = useState(INITIAL_STATE)
    const history = useHistory()
    const [error, setError] = useState(false)

    function handleChange(e) {
        console.log('called')
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
        console.log('got back user ', token)
        if (!token instanceof Error) {
            //setLocalStorage
            LocalStorage.setLocalStorage(token)
            //goto profile
            history.push("/companies");
        }
        setError(er => (er = true))
        //set user in localstorage
        // LocalStorage.setLocalStorage(user)
        // const localuser = LocalStorage.getLocalStorage()
        // console.log('from local ', localuser)
        history.push('/companies')  
    }


    return (
        <div className="col-md-6 col-lg-4">
            <h3>Sign Up</h3>
            {error ? <span>Error logging in.</span> : ''}
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
                />
                </FormGroup>
                <Button color="primary" className="btn-block mr-1 mt-1 btn-lg" >Submit</Button>
            </Form>
            </Card>
        </div>
    )
}