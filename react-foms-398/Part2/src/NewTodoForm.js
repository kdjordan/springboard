import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css'

function NewTodoForm({addTodo}) {
    const INITIAL_STATE = {
        name: '',
        completed: false
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        console.log('called ', e.target.name)
        const { name, value } = e.target
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }

    const handleSubmit = (e) =>  {
        e.preventDefault()
        let id = uuidv4()
        let finalData = {
            ...formData,
            id
        }
        addTodo(()=> e, finalData)
        setFormData(INITIAL_STATE)
    }


  return (
    <div className="NewTodoForm">
        <h3>Add a New TODO</h3>
        <form className="NewTodoForm-form" onSubmit={handleSubmit} data-testid="form">
            <div>
                <label htmlFor="todo">New Todo: </label>
                <input 
                    type="text" 
                    name="name" 
                    id="todo" 
                    value={formData.name}
                    placeholder="Enter Todo"
                    onChange={handleChange}
                    required
                    />
            </div>
            <div>
                <button type="submit" className="NewTodoForm-button">ADD</button>
            </div>
        </form>
    </div>
  );
}

export default NewTodoForm