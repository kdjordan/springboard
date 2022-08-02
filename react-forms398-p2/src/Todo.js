import React from 'react'

import './Todo.css'

function Todo({name, completed, id, removeTodo}) {
    const todo = {
        name,
        completed,
        id
    }
    const handleDelete = (e, id) => {
        removeTodo(e => e, id)
    }
    return (
        <div className="Todo">
            <div className="Todo-block">
                <h3>{name}</h3>
            </div>
            <button className="Todo-cancel-btn" onClick={e => (handleDelete(e, todo.id))}>X</button>
        </div>
        
    )

}

export default Todo