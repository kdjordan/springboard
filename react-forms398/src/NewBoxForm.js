import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './NewBoxForm.css'

function NewBoxForm({addBox}) {
    const [boxData, setBoxData] = useState({
        id: null,
        width: 0,
        height: 0,
        color: ''
    })
    const handleChange = (e) => {
        const {height, width, color} = e.target
        // setBoxData(boxData => {
        //     ...boxData,
        // })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // console.log(uuidv4(), height, width, color)
    }
 return (
    <div className='NewBox'>
        <h1>Fun With Boxes</h1>
        <form onSubmit={handleSubmit} className='NewBoxForm'>
            <label htmlFor="width">Enter Box Width (px)</label>
            <input type="number" name="width" id="width" placeholder="width" value="formData.width" onChange={handleChange}/>
            <label htmlFor="height">Enter Box Height (px)</label>
            <input type="number" name="height" id="height" placeholder="height" value="formData.height" onChange={handleChange}/>
            <label htmlFor="color">Select a Color</label>
            <input type="color" name="color" id="color" value="formData.color" onChange={handleChange}/>
            <button className="NewBoxFormButton">ADD</button>
        </form>
    </div>
 )

}

export default NewBoxForm;