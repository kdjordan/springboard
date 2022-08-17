import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './ColorForm.css'
import resetBackground from './resetBackground';

function ColorForm({addColor}) {
    const history = useHistory();
    const INITIAL_STATE = {
        name: '',
        color: ''
    }
    const [form, formData] = useState(INITIAL_STATE)

    function handleChange(e) {
        const { name, value } = e.target
        formData(f => ({
            ...f,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        addColor(form)
        resetBackground()
        history.push('/colors')
    }

    return (
        <div className='ColorForm'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Color Name&nbsp;&nbsp;
                    <input 
                        type="text" 
                        name="name" 
                        value={form.name} 
                        onChange={handleChange}
                        required
                        autoFocus
                    />
                </label>
                <label htmlFor="color">Color&nbsp;&nbsp;
                    <input 
                        type="color" 
                        name="color" 
                        onChange={handleChange}
                    />
                </label>
                <button>LET'S GO</button>
            </form>
        </div>
    )
}

export default ColorForm