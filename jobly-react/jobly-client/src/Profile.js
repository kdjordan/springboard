import React, { useState, useContext } from "react"
import { Form, Button, Input, FormGroup, Label, Card } from "reactstrap"
import Jobly from "./Api.js"
import UserContext from './UserContext'


export default function Profile() {
    const { currentUser, setCurrentUser } = useContext(UserContext)

    const [formData, setFormData] = useState({
        email: currentUser.email,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        username: currentUser.username,
        password: ''
    })

    const [error, setError] = useState(false)
    
    function handleChange(e) {
        const { name, value } = e.target
        setFormData(f => ({
            ...f,
            [name]: value
        })) 
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            let data = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password
            }
            let user = await Jobly.patchUser(currentUser.username, data)
            setCurrentUser(user)
        } catch (error) {
            setError(er => (er = [error]))
        }
    }

    function handleFocus() {
        setError(er => (er = []))
    }


    return (
        <div className="col-md-6 col-lg-4">
            <h3>Profile</h3>
            {error.length ? <span>{error}</span> : ''}
            <Card className="p-4">
            <Form onSubmit={handleSubmit} onFocus={handleFocus}>
                <FormGroup>
                <Label for="userName">Username</Label>
                <Input
                    id="userName"
                    name="userName"
                    value={formData.username}
                    type="text"
                    disabled
                />
                </FormGroup>
                <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    type="text"
                    onChange={handleChange}
                    autoFocus
                />
                </FormGroup>
                <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                
                />
                </FormGroup>
                <FormGroup>
                <Label for="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="text"
                
                />
                </FormGroup>
                <FormGroup>
                <Label for="password">Confirm password to make changes:</Label>
                <Input
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                />
                </FormGroup>
                <Button color="primary" className="btn-block mr-1 mt-1 btn-lg" >Submit</Button>
            </Form>
            </Card>
        </div>
    )
}