import React, { useState } from "react";
import { Form, Button, Input, FormGroup, Label, Card } from "reactstrap";

export default function Profile() {
    const INITIAL_STATE ={
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
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
            <h3>Sign Up</h3>
            <Card className="p-4">
            <Form>
                <FormGroup>
                <Label for="userName">Username</Label>
                <Input
                    id="userName"
                    name="userName"
                    type="text"
                    value={form.userName}
                    onChange={handleChange}
                />
                </FormGroup>
                <FormGroup>
                <Label for="password">Password</Label>
                <Input
                    id="password"
                    name="password"
                    type="text"
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