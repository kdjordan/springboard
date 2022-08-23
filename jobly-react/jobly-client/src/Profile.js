import React, { useState } from "react";
import './Profile.css'
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


    return (
        <div className="Profile">
            <div className="Profile-header">
                <h2>Profile</h2>
            </div>
            <div className="Profile-card">
                <div>
                    Username
                </div>
                <div>
                    kdjordan
                </div>
                <form>
                    <label htmlFor="firstName">First Name
                        <input 
                            type="text" 
                            name="firstName" 
                            id="firstName" 
                            onChange={handleChange}    
                            value={form.firstName}
                        />
                    </label>
                    <label htmlFor="">Last Name
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
                    <button>Save Changes</button>
                </form>
            </div>
        </div>
    )
}