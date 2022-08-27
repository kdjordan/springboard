import React, { useState } from "react";
import { Form, Button, Input, FormGroup, Label, Card } from "reactstrap";
import Jobly from './Api.js'
import { useHistory } from 'react-router-dom'

export default function Login({processUser}) {
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
        try {
            let token = await Jobly.login(form)
            processUser(token)
            history.push('/companies')
        } catch (error) {
            setError(er => (er = [error]))
        }
    }


    return (
        <div className="col-md-6 col-lg-4">
            <h3>Login</h3>
            {error.length ? <span>{error}.</span> : ''}
            <Card className="p-4">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                <Label for="username">Username</Label>
                <Input
                    id="username"
                    name="username"
                    value={form.username}
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