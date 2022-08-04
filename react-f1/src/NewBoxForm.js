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
        <form onSubmit={handleSubmit} className='NewBoxForm' data-testid='form'>
            <label htmlFor="width">Enter Box Width&nbsp;&nbsp;
                <input type="number" name="width" id="width" placeholder="max 200px" value={formData.width} onChange={handleChange} required/>
            </label>
            <label htmlFor="height">Enter Box Height&nbsp;&nbsp;
                <input type="number" name="height" id="height" placeholder="max 200px" value={formData.height} onChange={handleChange} required/>
            </label>
            <label htmlFor="color">Select a Color&nbsp;&nbsp;
                <input type="color" name="color" id="color" value={formData.color} onChange={handleChange}/>
            </label>
            <button className="NewBoxFormButton">ADD</button>
        </form>
    </div>
 )

}

export default NewBoxForm;