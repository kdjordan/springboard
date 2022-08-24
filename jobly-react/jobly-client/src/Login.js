import React, { useState } from "react";
import { Form, Button, Input, FormGroup, Label, Card } from "reactstrap";

export default function Login() {
    const INITIAL_STATE ={
        userName: '',
        password: ''
    }
    const [form, setForm] = useState(INITIAL_STATE)

    function handleChange(e) {
        const { name, value } = e.target
        setForm(f => ({
            ...f,
            [name]: value
        })) 
        console.log(form)
    }

    function handleSubmit(e) {
        e.preventDefault()
    }


    return (
        <div className="col-md-6 col-lg-4">
            <h3>Login</h3>
            <Card className="p-4">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                <Label for="userName">Username</Label>
                <Input
                    id="userName"
                    name="userName"
                    value={form.userName}
                    type="text"
                    onChange={handleChange}
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
                />
                </FormGroup>
                <Button color="primary" className="btn-block mr-1 mt-1 btn-lg" >Submit</Button>
            </Form>
            </Card>
        </div>
    )
}