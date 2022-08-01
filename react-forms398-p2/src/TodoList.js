import React from 'react'
import Todo from './Todo'
import './TodoList.css'


function TodoList({data, delTodo}) {

    const removeTodo = (e, id) => {
        delTodo(e => e, id)
    }
    return (
        <div className="TodoList">
            {data.map(d => {
                return <Todo key={d.id} id={d.id} name={d.name} completed={d.completed} removeTodo={removeTodo}/>
            })}
        </div>
    )
}

export default TodoList