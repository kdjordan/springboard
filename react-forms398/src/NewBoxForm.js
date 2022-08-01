import React, { useState } from 'react'
import './NewBoxForm.css'

function NewBoxForm({addBox}) {
    const INITIAL_STATE = {
        width: '',
        height: '',
        color: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(() => e, formData)
        setFormData(INITIAL_STATE)
    }

 return (
    <div className='NewBox'>
        <h1>Fun With Boxes</h1>
        <form onSubmit={handleSubmit} className='NewBoxForm'>
            <label htmlFor="width">Enter Box Width (px)</label>
            <input type="number" name="width" id="width" placeholder="width" value={formData.width} onChange={handleChange}/>
            <label htmlFor="height">Enter Box Height (px)</label>
            <input type="number" name="height" id="height" placeholder="height" value={formData.height} onChange={handleChange}/>
            <label htmlFor="color">Select a Color</label>
            <input type="color" name="color" id="color" value={formData.color} onChange={handleChange}/>
            <button className="NewBoxFormButton">ADD</button>
        </form>
    </div>
 )

}

export default NewBoxForm;