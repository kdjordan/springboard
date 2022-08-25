import React, { useState } from "react";
import { Form, Button, Input, FormGroup, Label, Card } from "reactstrap";
import Jobly from './Api.js'
import LocalStorage from "./LocalStorage";
import { useHistory } from 'react-router-dom'

export default function Login() {
    const INITIAL_STATE ={
        username: '',
        password: ''
    }
    const [form, setForm] = useState(INITIAL_STATE)
    const [error, setError] = useState(false)
    const history = useHistory()

    function checkError() {
        if(error) {
            setError(er => (er = false))
        }
    }

    function handleChange(e) {
        const { name, value } = e.target
        setForm(f => ({
            ...f,
            [name]: value
        })) 
    }

    async function handleSubmit(e) {
        e.preventDefault()
        //post credentails to DB
        let user = await Jobly.login(form)
        console.log('got user ', user)
        if (!user instanceof Error) {
            //setLocalStorage
            LocalStorage.setLocalStorage(user.data)
            //goto profile
            history.push("/profile");
        }
        setError(er => (er = true))
    }


    return (
        <div className="col-md-6 col-lg-4">
            <h3>Login</h3>
            {error ? <span>Error logging in.</span> : ''}
            <Card className="p-4">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                <Label for="userName">Username</Label>
                <Input
                    id="userName"
                    name="username"
                    value={form.userName}
                    type="text"
                    onChange={handleChange}
                    onFocus={checkError}
                    autoFocus
                />
                </FormGroup>
                <FormGroup>
                <Label for="password">Password</Label>
                <Input
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                    type="password"
                    onFocus={checkError}
                />
                </FormGroup>
                <Button color="primary" className="btn-block mr-1 mt-1 btn-lg" >Submit</Button>
            </Form>
            </Card>
        </div>
    )
}