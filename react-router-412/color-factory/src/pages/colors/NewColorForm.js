import { useState } from "react"
import './NewColorForm.css'
import { Navigate, useNavigate } from 'react-router-dom'

function NewColorForm({addColor}) {
    const INTIAL_STATE = {
        name: '',
        color: '#000000'
    }
    const navigate = useNavigate()
    const [form, setForm] = useState(INTIAL_STATE)

    function handleChange(e) {
        const {name, value} = e.target
        setForm(f => ({
            ...form,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        addColor(() => e, form)
        setForm(INTIAL_STATE)
        navigate('/colors')
    }
    return (
        <div className="NewColorForm">
            <h2 style={{marginBottom:'2vh'}}>Add A NEW COLOR</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name&nbsp;&nbsp;
                        <input 
                            type="text" 
                            placeholder="Color Name"
                            name="name" 
                            id="name" 
                            value={form.name}
                            onChange={handleChange}
                            autoFocus
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="color">
                        <input 
                            type="color" 
                            name="color" 
                            id="color" 
                            value={form.color}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button>GO !</button>
            </form>
        </div>
    )
}


export default NewColorForm