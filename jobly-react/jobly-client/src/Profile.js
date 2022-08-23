import React, { useState } from "react";
import './Profile.css'
export default function Profile() {
    const INITIAL_STATE ={
        userName: 'kdjordan',
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
        <div className="Profile">
            <h2>Profile</h2>
            <div className="Profile-card">
                <form onSubmit={handleSubmit} >
                    <label htmlFor="userName">Username
                        <input 
                            type="text" 
                            name="userName" 
                            id="userName" 
                            value={form.userName}
                            disabled
                        />
                    </label>
                    <label htmlFor="firstName">First Name
                        <input 
                            type="text" 
                            name="firstName" 
                            id="firstName" 
                            onChange={handleChange}    
                            value={form.firstName}
                        />
                    </label>
                    <label htmlFor="lastName">Last Name
                        <input 
                            type="text" 
                            name="lastName" 
                            id="lastName" 
                            onChange={handleChange}    
                            value={form.lastName}
                        />
                    </label>
                    <label htmlFor="">Email
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            onChange={handleChange}    
                            value={form.email}
                    />
                    </label>
                    <label htmlFor="">Confirm password to make changes:
                        <input 
                            type="password" 
                            name="" 
                            id="" 
                            onChange={handleChange}    
                            value={form.password}
                        />
                    </label>
                    <button type="submit">Save Changes</button>
                </form>
            </div>
        </div>
    )
}