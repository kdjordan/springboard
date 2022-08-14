import { useState } from "react"
import './NewColorForm.css'

function NewColorForm() {
    const INTIAL_STATE = {
        name: '',
        color: ''
    }
    const [form, setForm] = useState(INTIAL_STATE)

    function handleChange(e) {
        const {name, value} = e.target
        setForm(f => ({
            ...form,
            [name]: value
        }))
    }

    function handleSubmit() {
        console.log(form)
    }
    return (
        <div className="NewColorForm">
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
            </form>
        </div>
    )
}


export default NewColorForm